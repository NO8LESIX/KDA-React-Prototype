import React from "react";
import { Grid } from "@material-ui/core";
import { Descriptions, Space, Button } from "antd";
import { ProductInfo } from "../Data/types";
import { Image } from 'antd';
import {HeartOutlined, HeartFilled} from "@ant-design/icons"
//import { ProductInfo, ProductTypes, TestName } from "../Data/types";

interface RegulationsDisplayProps {
  productProp: ProductInfo;
}
interface RegulationsDisplayState {
  productInformation: ProductInfo;
  favDisplay: JSX.Element;
}
// Testing use only
// const testingItem: ProductInfo = {
//   name: "Mango",
//   category: ProductTypes.Produce,
//   description: "A mango is a stone fruit produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit.",
//   snap: true,
//   regulatoryRequirements: "None since they do not grow in Kansas",
//   requiredLicenses: [],
//   productTesting: [{
//     testName: TestName.PHActivity,
//     notes: "Test of the testing variable",
//     urlRedirect: "/updates",
// }],
//   relatedItems: [],
//   imageURL: "data:image/jpeg;base64,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",
// }

export class RegulationsDisplay extends React.Component<
  RegulationsDisplayProps,
  RegulationsDisplayState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      //productInformation: this.props.productProp,
      productInformation: this.props.productProp,
      favDisplay: <HeartOutlined/>,
    };
    // console.log(this.props.productProp);
  }
  buildRelatedItemsString = (items: string[] | undefined) => {
    // let relatedItems =  this.state.productInformation.relatedItems?.map((item:string) => {item + ", "});
    // return relatedItems;
  };
  
  onFavorite = (event: React.MouseEvent<HTMLElement, MouseEvent>)  => {
    if(this.state.favDisplay === <HeartOutlined/>){
      console.log("HeartFilled");
      this.setState({
        favDisplay: <HeartFilled/>,
      });
    }else{
      console.log("HeartOutlined");
      this.setState({
        favDisplay: <HeartOutlined/>,
      });
    }
  };

  render() {
    return (
      <>
        <br />
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          xs={12}
          data-testId="test"
        >
          <Grid item xs={12} md lg xl alignContent="center">
            <Image
              width={500}
              height={500}
              src={
                this.state.productInformation.imageURL
                  ? this.state.productInformation.imageURL
                  : "error"
              }
              fallback="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </Grid>
          <Grid item xs={12} md lg xl>
            <Descriptions
              title={this.state.productInformation.name + " Information"}
              bordered
              extra={
                <Button type="default" onClick={(e:React.MouseEvent<HTMLElement, MouseEvent>) => this.onFavorite(e)} >
                {/* <Button variant="contained" color="default" onClick={this.onFavorite} > */}
                  <Space>
                    {"Favorite"}
                    {this.state.favDisplay}
                  </Space>
                </Button>
              }
              size="middle"
              layout="vertical"
              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
              <Descriptions.Item label={<b>Product Name</b>}>
                {this.state.productInformation.name}
              </Descriptions.Item>
              <Descriptions.Item label={<b>SNAP</b>}>
                {this.state.productInformation.snap ? "Eligible" : "Ineligible"}
              </Descriptions.Item>
              {/* <Descriptions.Item label="Description">
                {this.state.productInformation.description
                  ? this.state.productInformation.description
                  : "No Description Provided"}
              </Descriptions.Item> */}
              <Descriptions.Item label={<b>Regulatory Requirements</b>}>
                {this.state.productInformation.regulatoryRequirements
                  ? this.state.productInformation.regulatoryRequirements
                  : "No Requirements"}
              </Descriptions.Item>
              <Descriptions.Item label={<b>Related Items</b>}>
                {this.state.productInformation.relatedItems
                  ? this.state.productInformation.relatedItems
                  : "No Examples"}
              </Descriptions.Item>
              <Descriptions.Item label={<b>Licenses Required</b>}>
                {this.state.productInformation.productTesting
                  ? this.state.productInformation.productTesting?.toString()
                  : "No Licenses Required"}
              </Descriptions.Item>
              <Descriptions.Item label={<b>Tests Requried</b>}>
                {this.state.productInformation.productTesting
                  ? this.state.productInformation.productTesting
                  : "None Required"}
              </Descriptions.Item>
            </Descriptions>
          </Grid>
        </Grid>
        <br />
      </>
    );
  }
}
