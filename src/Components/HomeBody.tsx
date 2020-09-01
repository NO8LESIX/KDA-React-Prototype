import React from 'react';
import { Button } from 'antd';
import "../CSS/Homepage.css";
//import Data from "../Data/FoodType.json";
import RightData from "../Data/FoodCategories.json";
//import { useHistory } from "react-router-dom";

//<button onClick={() => useHistory().goBack()}>Back</button>

export class HomeBody extends React.Component {


    //List of all categories for Product Types. May need to be transferred into JSON or SQL file in the future
    /*categories = [
        { id: 0, parent: "Browse Regulations by Food Type:", title: ["Produce", "Baked", "Processed", "Canned"], subcategories: [1,2,3,4]},
        { id: 1, parent: "Produce", title: ["Vegetables", "Fresh Cuts", "Fruits", "Sprouts"], subcategories: [5,2,3,4]},
        { id: 2, parent: "Baked", title: ["Pies", "Cookies", "Bread", "Pecan Pie"], subcategories: [1,2,3,4]},
        { id: 3, parent: "Processed", title: ["Dough", "Vacuum-Packaged", "Non-Specialized", "Temperature-Controlled"], subcategories: [1,2,3,4]},
        { id: 4, parent: "Canned", title: ["Honey", "Nuts and Butters", "Candies", "Lard"], subcategories: [1,2,3,4]},
        { id: 5, parent: "Vegetables", title: ["Carrots", "Peas", "Broccoli", "Corn"], subcategories: [6,7,8,9]},
        { id: 6, parent: "Fresh Cuts", title: ["Cut Berries", "Cut Herbs", "Cut Carrots", "Cut Greens"], subcategories: [6,7,8,9]},
        { id: 7, parent: "Fruits", title: ["Tomatoes", "Apple", "Orange", "Apricot"], subcategories: [6,7,8,9]},
        { id: 8, parent: "Sprouts", title: ["Alfalfa Sprouts", "Bean Sprouts", "Mung Sprouts", "Lentil Sprouts"], subcategories: [6,7,8,9]},
    ];*/

    //Properties accessed in methods below to store temporary variables
    comment = {
        currentID: 0,
        currentURLID: "",
        parent: "",
        titles: [""],
        subcategories: [0],
        url: window.location.pathname
    };


    //Renders display
    render() {

            return (
                <>
                    <div className="divide">
                        <p className="header">{this.getParent(this.getID())}</p>
                    </div>
                    <div id="boxes">
                            {this.renderButtons()}
                    </div>
                    <div className="divide divideBottom">
                    </div>
                </>
            );

    }

    renderButtons() {
        RightData.types.forEach((data) => {
            if(data.id === this.comment.currentID)
            {
                //console.log("NEW ID:" + this.comment.currentID);
                //console.log("Type: "+ Data.title[val]);
                //return "HI" + Data.title[val];
                this.comment.titles = data.title;

            }
        });

        return this.comment.titles.map( (data) => {
            let replace = '/' + data.replace(" ","_").toLowerCase();
            if(this.comment.url !== '/')
            {
                replace = this.comment.url + replace;
            }
           // console.log("URL NAV: "+replace);
            return (
                <Button className="buttons" type="primary" shape="round" >
                    <a href={'' + replace}>{data}</a>
                </Button>
            )
        });

    }

    //Retrieves Header
    getParent(num: number)
    {
        RightData.types.forEach((data) => {
            if(data.id === num)
            {
                //console.log("Parent:" + data.parent);
                this.comment.parent = data.parent;
            }
        });

        return this.comment.parent;
    }


    //Retrieves current Product Parent ID for display
    getID() {

        let lastUrl = this.comment.url.split('/').pop();

        //console.log("LastBitofURL: " + lastUrl);

        RightData.types.forEach( (data) => {
            if(data.parent.replace(' ','_').toLowerCase() === lastUrl)
            {
                this.comment.currentID = data.id;
            }
        });

        return this.comment.currentID;
    }

}