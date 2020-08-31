import React from 'react';
import { Button } from 'antd';
import "../CSS/Homepage.css";
import data from "../data/FoodType.json";


export class HomeBody extends React.Component {

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

    ];

    //Properties accessed in methods below to store temporary variables
    comment = {

        date: new Date(),
        text: 'I hope you enjoy learning React!',
        currentID: 0,
        currentURLID: "",
        parent: "",
        home: {
            produce: 'Fresh Produce',
            produceURL: 'produce',
            goods: 'Baked Goods',
            processed: 'Processed Foods',
            canned: 'Canned Foods',
            url: window.location.pathname,
        },
    };

    //Renders display
    render() {

            return (
                <>
                    <div className="divide">
                        <p className="header">{this.getParent(this.getID())}</p>
                    </div>
                    <div id="boxes">
                        <Button className="buttons" type="primary" shape="round" >
                            <a href={'' + this.renderURL(1)}>{this.retrieveCategories(this.comment.currentID,0)}</a>
                        </Button>
                        <Button className="buttons" type="primary" shape="round">
                            <a href={'' + this.renderURL(2)}> {this.retrieveCategories(this.comment.currentID,1)}</a>
                        </Button>
                        <Button className="buttons" type="primary" shape="round">
                            <a href={'' + this.renderURL(3)}>{this.retrieveCategories(this.comment.currentID,2)}</a>
                        </Button>
                        <Button className="buttons lastButton" type="primary" shape="round">
                            <a href={'' + this.renderURL(4)}>{this.retrieveCategories(this.comment.currentID,3)}</a>
                        </Button>
                    </div>
                    <div className="divide divideBottom">
                    </div>
                </>
            );

    }

    //Retrieves Header
    getParent(num: number)
    {
        this.categories.forEach((data) => {
            if(data.id === num)
            {
                console.log("Parent:" + data.parent);
                this.comment.parent = data.parent;
            }
        });

        return this.comment.parent;
    }

    //Retrieves categories for each child name
    retrieveCategories(num: number, val: number) {
        //+(string.replace(this.retrieveCategories(this.getID(),0)))
        this.categories.forEach((data) => {
            if(data.id === num)
            {
                console.log("NEW ID:" + this.comment.currentID);
                console.log("Type: "+ data.title[val]);
                //return "HI" + data.title[val];
                this.comment.text = data.title[val];
            }
        });

        return this.comment.text;
        //return null;
    }

    //Renders correct URLs for children navigation
    renderURL(num: number) {
        //let { id } = useParams();
       // let { slug }: any = useParams();
       // return <div>Now showing post {slug}</div>;
        data.types.forEach( (data) => {
            if (data.idNum === num) {
                this.comment.currentURLID = data.id;
            }
            console.log("CurrentURLID: "+ this.comment.currentURLID);
        });

        console.log(this.comment.home.url);
        if(this.comment.home.url !== '/')
        {

            return this.comment.home.url + "/"+num;
        }
        else
        {
            return this.comment.currentURLID;
        }
    }

    //Retrieves current Product Parent ID for display
    getID() {
        data.types.forEach( (data) => {
            if (data.id === this.comment.home.url) {
                console.log("WORKED");
                this.comment.currentID = data.idNum;
            }
            else
            {
                console.log("DID NOT");
                return this.comment.currentID;
            }
        });
        return this.comment.currentID;
    }

    //Outdated May Need Removal in Future
    renderSwitch(num: number) {
        console.log(this.comment.home.url);
        switch(this.comment.home.url) {
            case '/':
                switch(num) {
                    case 1:
                        return this.comment.home.produce;
                    case 2:
                        return this.comment.home.goods;
                    case 3:
                        return this.comment.home.processed;
                    case 4:
                        return this.comment.home.canned
                }
                break;
            default:
                return data.types.forEach( (data) => {
                    if (data.id === this.comment.home.url) {
                        switch (num) {
                            case 1:
                                return data.foodType1;
                            case 2:
                                return data.foodType2;
                            case 3:
                                return data.foodType3;
                            case 4:
                                return data.foodType4;
                        }
                    }
                });
        }
    }

}