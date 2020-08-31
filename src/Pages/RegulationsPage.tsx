import React from "react";
import KDANavbar from "../Components/KDANavbar";
import KDAFooter from "../Components/KDAFooter";
import { Grid } from "@material-ui/core";
import { Descriptions } from "antd";
import { ProductInfo, ProductTypes } from "../data/types";

interface RegulationsPageProps {
}
interface RegulationsPageState {
  productInformation: ProductInfo;
}

export class RegulationsPage extends React.Component<
  RegulationsPageProps,
  RegulationsPageState
> {
  constructor(props:any) {
    super(props);
    this.state = {
      productInformation: {
        name: "string",
        category: ProductTypes.Baked,
        description: "string",
        snap: true,
      },
    };
  }
  render() {
    return (
      <>
        <KDANavbar />
        {/* Image goes first */}
        {/* Quick reference card info next */}
        {/* Product Description */}
        {/* Additional Information */}

        <Grid container alignItems="center" xs={12}>
          <Grid item xs={12} md lg xl alignContent="center">
            <img
              src="https://www.k-state.edu/ksu-resources/branding/2/images/innovation-inspiration-215.png"
              alt="Product Design Here"
            />
          </Grid>
          <Grid item xs={12} md lg={6} xl>
            <Descriptions
              title="Responsive Descriptions"
              bordered
              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
              <Descriptions.Item label="Product Name">
                {this.state.productInformation.name}
              </Descriptions.Item>
              <Descriptions.Item label="SNAP">
                {this.state.productInformation.snap.valueOf.toString()}
              </Descriptions.Item>
              <Descriptions.Item label="time">18:00:00</Descriptions.Item>
              <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
              <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
              <Descriptions.Item label="Official">$60.00</Descriptions.Item>
              <Descriptions.Item label="Config Info">
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1
              </Descriptions.Item>
            </Descriptions>
          </Grid>
          <Grid item xs={12} md lg xl></Grid>
          <Grid item xs={12} md lg xl></Grid>
        </Grid>

        <KDAFooter />
      </>
    );
  }
}
