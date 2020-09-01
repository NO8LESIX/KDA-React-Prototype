import React, { useState } from "react";
import "antd/dist/antd.css";
import KDANavbar from "../Components/KDANavbar";
import KDAFooter from "../Components/KDAFooter";
import { Grid } from "@material-ui/core";
import CNIRegulationForm from "../Components/CreateNewItemRegulationForm";

interface COERegulationsPageProps {}
interface COERegulationsPageState {}

export class COERegulationsPage extends React.Component<
  COERegulationsPageProps,
  COERegulationsPageState
> {
  onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  render() {
    return (
      <>
        <KDANavbar />
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-around"
          spacing={1}
        >
          <Grid item xs={12} md lg xl>
            <CNIRegulationForm />
          </Grid>
        </Grid>
        <KDAFooter />
      </>
    );
  }
}