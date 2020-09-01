import React from "react";
import "../CSS/Homepage.css";
import Data from "../Data/FoodType.json";
import { ProductInfo, ProductTypes } from "../Data/types";
import { TestProductList } from "../Data/TestData"
import {bool} from "prop-types";

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
                </div>

            </>
        );
    }

    //Retrieves Header
    getParent(name: string)
    {
        console.log(name);
        for (let testProductListKey in TestProductList) {
            if(testProductListKey === name)
            {
                //console.log("Parent:" + testProductListKey);
                this.comment.home.name = TestProductList[testProductListKey].name;
                this.comment.home.category = TestProductList[testProductListKey].category;
                this.comment.home.description = TestProductList[testProductListKey].description;
                this.comment.home.requirements = TestProductList[testProductListKey].requirements;
                
                //this.comment.parent = TestProductList[testProductListKey];
            }
        }
        //this.comment.parent =
        // console.log("this.state.parent");
        return this.comment.home.requirements;
    }

    //Retrieves categories for each child name
    retrieveCategories(num: number, val: number) {
        //+(string.replace(this.retrieveCategories(this.getID(),0)))
        this.categories.forEach((data) => {
            if(data.id === num)
            {
                console.log("NEW ID:" + this.comment.currentID);
                //console.log("Type: "+ data.title[val]);
                //return "HI" + data.title[val];
                this.comment.text = data.title[val];
            }
        });

        return this.comment.text;
        //return null;
    }

    //Renders correct URLs for children navigation

    //Retrieves current Product Parent ID for display
    getIDName() {
        Data.types.forEach( (data) => {
            if (data.id === this.comment.home.url) {
                this.comment.currentIDName = data.idName;
            }
        });
        return this.comment.currentIDName;
    }

}