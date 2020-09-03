import React from "react";
import "../CSS/Homepage.css";
import { ProductInfo, ProductTypes } from "../Data/types";
import { TestProductList } from "../Data/TestData";
import { bool } from "prop-types";
import RightData from "../Data/FoodCategories.json";
import { RegulationsDisplay } from "./RegulationsDisplay";

interface RegulationsPageProps {}
interface RegulationsPageState {
    
}

export class ProductBody extends React.Component<
  RegulationsPageProps,
  RegulationsPageState
> {
  //Properties accessed in methods below to store temporary variables
  comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    currentID: 0,
    currentIDName: "",
    currentURLID: "",
    parent: "",
    home: {
      name: "",
      category: ProductTypes.Baked,
      description: "",
      snap: bool,
      requirements: [""],
      relatedItems: [""],
      url: window.location.pathname,
    },
  };

  //Renders display
  render() {
    return (
      <>
        <div className="divide">{this.getParent()}</div>
        <div className="divide divideBottom"></div>
      </>
    );
  }

  //Retrieves Header
  getParent() {
    const idName = this.getIDName();

    let par: ProductInfo = {
      name: "Default",
      category: ProductTypes.Processed,
      description: "Item not Found",
      snap: true,
      requirements: ["Default", "Requirements"],
    };

    for (let testProductListKey in TestProductList) {
      if (testProductListKey === idName) {
        par = {
          name: TestProductList[testProductListKey].name,
          category: TestProductList[testProductListKey].category,
          description: TestProductList[testProductListKey].description,
          snap: true,
          requirements: TestProductList[testProductListKey].requirements,
        };
      }
    }

    return <RegulationsDisplay productProp={par} />;
  }

  //Retrieves current Product Parent ID for display
  getIDName() {
    let lastUrl = this.comment.home.url.split("/").pop();

    //console.log("LastBitofURL: " + lastUrl);

    RightData.types.forEach((data) => {
      if (data.parent.replace(" ", "_").toLowerCase() === lastUrl) {
        this.comment.parent = data.parent;
        this.comment.currentID = data.id;
      }
    });

    if (lastUrl) {
      return (this.comment.parent = lastUrl.toUpperCase());
    }
    return this.comment.parent;
  }
}
