import React from "react";
import { Grid, Typography, Link, Box } from "@material-ui/core";
import "antd/dist/antd.css";
import { Layout } from "antd";
import KDANavbar from "../Components/KDANavbar";
import KDAFooter from "../Components/KDAFooter";
import { ProductInfo, ProductTypes } from "../Data/types";

interface RegulationsPageProps {
    productProp: ProductInfo;
}
interface RegulationsPageState {
    productInformation: ProductInfo;
}

export default class SearchResultsPage extends React.Component<
    RegulationsPageProps,
    RegulationsPageState
    > {
    constructor(props: any) {
        super(props);
        this.state = {
            productInformation: {
                name: "string",
                category: ProductTypes.Baked,
                description: "string",
                snap: true,
                requirements: [""],
            },
        };
    }
    render() {
        return (
                <Layout>
                    <KDANavbar />
                <Grid container direction="row" alignItems="center" justify="center" spacing={2}>
                        <Grid item xs={6} color="black">
                            <Box display="flex" flexDirection="row">
                                <Typography>Testing </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>

                        </Grid>
                        <Grid item xs={6}>

                        </Grid>
                        <Grid item xs={12}>
                            <Typography align="left" variant="h4">
                                Searches related to
                            </Typography>
                            <Grid container direction="row">
                                <Grid item xs={1} >
                                    related 1
                                </Grid>
                                <Grid item xs={1} >
                                    related 2
                                </Grid>
                            </Grid>
                            <Grid container direction="row">
                                <Grid item xs={1} >
                                    related 3
                                </Grid>
                                <Grid item xs={1} >
                                    related 4
                                </Grid>
                            </Grid>
                            <Grid container direction="row">
                                <Grid item xs={1} >
                                    related 5
                                    </Grid>
                                <Grid item xs={1} >
                                    related 6
                                    </Grid>
                            </Grid>
                        </Grid>
                </Grid>
                        <br></br>
                        <br></br>
                        <br></br>
                    <KDAFooter />
                </Layout>
        );
    }
}