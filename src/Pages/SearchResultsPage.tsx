import React from "react";
import { Typography, Grid, Divider, List } from "@material-ui/core";
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
            <React.Fragment>
                <ListItem button style={style} key={product.name} className="resultItem">
                    <ListItemText primary={product.name} secondary={product.description.substring(0, 50)}/>
                </ListItem>
                <Divider variant="inset" component="li" />
            </React.Fragment>

        );
      }



    render() {
        return (
                <Layout>
                    <KDANavbar />
                    <Grid container direction="column" className="results">
                        <Grid item className="resultsTitle">
                            <Typography variant="h4" className="resultsTitleText"> Search Results </Typography>
                        </Grid>
                        <Divider/>
                        <Grid item container className="resultsContainer">
                            <List className = "resultsList" disablePadding>
                                {Object.values(this.state.productList).concat(Object.values(this.state.productList)).concat(Object.values(this.state.productList)).map(product => (
                                <React.Fragment key = {product.name}>
                                    <ListItem button key={product.name} className="resultItem">
                                        <ListItemText primary={product.name} secondary={product.description.substring(0, 50)}/>
                                    </ListItem>
                                    <Divider variant="fullWidth" component="li" className="divider"/>
                                </React.Fragment>
                                )) }
                            </List>
                        </Grid>
                   
                    </Grid>
                    <KDAFooter />
                </Layout>
        );
    }
}
/*

                        <FixedSizeList height={500} width={"100%"} itemSize={46} itemCount={Object.values(this.state.productList).length} >
                            {this.renderRow}
                        </FixedSizeList>


*/