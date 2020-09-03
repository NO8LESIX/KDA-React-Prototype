import React from "react";
import { Typography } from "@material-ui/core";
import "antd/dist/antd.css";
import { Layout } from "antd";
import KDANavbar from "../Components/KDANavbar";
import KDAFooter from "../Components/KDAFooter";
import { ProductList } from "../Data/types";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { TestProductList } from "../Data/TestData";
import "../CSS/SearchResultsPage.css";

interface SearchPageProps {
    productList: ProductList;
}
interface SearchPageState {
    productList: ProductList;
}

export default class SearchResultsPage extends React.Component<
    SearchPageProps,
    SearchPageState
    > {
    constructor(props: any) {
        super(props);
        this.state = {
         productList: TestProductList
        };
        this.renderRow = this.renderRow.bind(this)

    }

    renderRow(props: ListChildComponentProps) {
        const { index, style } = props;

        
        const product = Object.values(this.state.productList)[index];
      
        return (
            <ListItem button style={style} key={product.name}>
                <ListItemText primary={product.name} secondary={product.description.substring(0, 50)}/>
            </ListItem>
        );
      }



    render() {
        return (
                <Layout>
                    <KDANavbar />
                    <div className="results">
                        <Typography component="h1"> Results </Typography>
                        <FixedSizeList height={500} width={"100%"} itemSize={46} itemCount={Object.values(this.state.productList).length}>
                            {this.renderRow}
                        </FixedSizeList>
                    </div>
                    <KDAFooter />
                </Layout>
        );
    }
}