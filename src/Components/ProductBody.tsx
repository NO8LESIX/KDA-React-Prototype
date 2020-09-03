import React from "react";
import "../CSS/Homepage.css";
import Data from "../Data/FoodType.json";
import { ProductInfo, ProductTypes } from "../Data/types";
import {TestProductList, TestTomatoes} from "../Data/TestData"
import {bool} from "prop-types";
import RightData from "../Data/FoodCategories.json";
import {TestUpdates} from "../Data/TestUpdates";
import { Row, Col } from 'antd';

interface RegulationsPageProps {
}
interface RegulationsPageState {
  productInformation: ProductInfo;
  parent?: ProductInfo;
}


export class ProductBody extends React.Component<
    RegulationsPageProps,
    RegulationsPageState
    > {

    //List of all categories for Product Types. May need to be transferred into JSON or SQL file in the future
    categories = [
        { id: 0, parent: "Browse Regulations by Food Type:", title: ["Produce", "Baked", "Processed", "Canned"], subcategories: [1,2,3,4]},
        { id: 1, parent: "Produce", title: ["Vegetables", "Fresh Cuts", "Fruits", "Sprouts"], subcategories: [5,2,3,4]},
        { id: 2, parent: "Baked", title: ["Pies", "Cookies", "Bread", "Pecan Pie"], subcategories: [1,2,3,4]},
        { id: 3, parent: "Processed", title: ["Dough", "Vacuum-Packaged", "Non-Specialized", "Temperature-Controlled"], subcategories: [1,2,3,4]},
        { id: 4, parent: "Canned", title: ["Honey", "Nuts and Butters", "Candies", "Lard"], subcategories: [1,2,3,4]},
        { id: 5, parent: "Vegetables", title: ["Carrots", "Peas", "Broccoli", "Corn"], subcategories: [6,7,8,9]},
        { id: 6, parent: "Fresh Cuts", title: ["Cut Berries", "Cut Herbs", "Cut Carrots", "Cut Greens"], subcategories: [6,7,8,9]},
        { id: 7, parent: "Fruits", title: ["Tomatoes", "Apple", "Orange", "Apricot"], subcategories: [6,7,8,9]},
        { id: 8, parent: "Sprouts", title: ["Alfalfa Sprouts", "Bean Sprouts", "Mung Sprouts", "Lentil Sprouts"], subcategories: [6,7,8,9]},
        { id: 9, parent: "Carrots", title: ["Alfalfa Sprouts", "Bean Sprouts", "Mung Sprouts", "Lentil Sprouts"], subcategories: [6,7,8,9]},

    ];

    //Properties accessed in methods below to store temporary variables
    comment = {

        date: new Date(),
        text: 'I hope you enjoy learning React!',
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
            relatedItems:  [""],
            url: window.location.pathname,
        },
    };

    constructor(props:any) {
        super(props);
        this.state = {
            productInformation: {
                name: "string",
                category: ProductTypes.Baked,
                description: "string",
                snap: true,
                requirements: [""],
            },
            parent: {
                name: "",
                category: ProductTypes.Baked,
                description: "",
                snap: true,
                requirements: [""],
                relatedItems:  [""],
                url: window.location.pathname,
            },
        };
    }





    //Renders display
    render() {
        return (
            <>
                {/* Image goes first */}
                {/* Quick reference card info next */}
                {/* Product Description */}
                {/* Additional Information */}
                <div className="divide">
                    <p className="header">{this.getParent(this.getIDName())}</p>
                    <Row>
                        <Col span={12}>Name: </Col>
                        <Col span={12}>{this.comment.home.name}</Col>
                        <Col span={12}>Category: </Col>
                        <Col span={12}>{this.comment.home.category}</Col>
                        <Col span={12}>Description: </Col>
                        <Col span={12}>{this.comment.home.description}</Col>
                        <Col span={12}>Regulatory Requirements: </Col>
                        <Col span={12}>{this.comment.home.requirements}</Col>
                    </Row>
                </div>
                <div className="divide divideBottom">
                </div>

            </>
        );
    }

    //Retrieves Header
    getParent(name: string)
    {
        let com;
        console.log("TO UPPER: " + name);
        for (let testProductListKey in TestProductList) {
            if(testProductListKey === name)
            {
                //console.log("Parent:" + testProductListKey);
                this.comment.home.name = TestProductList[testProductListKey].name;
                this.comment.home.category = TestProductList[testProductListKey].category;
                this.comment.home.description = TestProductList[testProductListKey].description;
                this.comment.home.requirements = TestProductList[testProductListKey].requirements;
                //this.comment.home.snap = true;
                com = TestProductList[testProductListKey];
                //this.comment.parent = TestProductList[testProductListKey];
            }
        }

        return "Product Page";



        //this.comment.parent =
        // console.log("this.state.parent");
        //return this.comment.home.requirements;
       // console.log(TestTomatoes);
        //console.log("KEY: "+ com);
    }

    //Retrieves categories for each child name
    retrieveCategories(num: number, val: number) {
        //+(string.replace(this.retrieveCategories(this.getID(),0)))
        this.categories.forEach((data) => {
            if(data.id === num)
            {
                console.log("NEW ID:" + this.comment.currentID);
                //console.log("Type: "+ Data.title[val]);
                //return "HI" + Data.title[val];
                this.comment.text = data.title[val];
            }
        });

        return this.comment.text;
        //return null;
    }

    //Renders correct URLs for children navigation

    //Retrieves current Product Parent ID for display
    getIDName() {
        let lastUrl = this.comment.home.url.split('/').pop();

        //console.log("LastBitofURL: " + lastUrl);

        RightData.types.forEach( (data) => {
            if(data.parent.replace(' ','_').toLowerCase() === lastUrl)
            {
                this.comment.parent = data.parent;
                this.comment.currentID = data.id;
            }
        });

        console.log(lastUrl);
        if(lastUrl)
        {
            return this.comment.parent = lastUrl.toUpperCase();
        }
        return this.comment.parent;
    }

}