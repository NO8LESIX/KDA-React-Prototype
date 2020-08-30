import React from 'react';
import { Button } from 'antd';
import "../CSS/Homepage.css";
import data from "../data/FoodType.json";
import {
    useParams
} from "react-router-dom";




export class HomeBody extends React.Component {

    categories = [
        { id: 0, title: ["Produce", "Baked", "Processed", "Canned"], subcategories: [1,2,3,4]},
        { id: 1, title: ["a", "b", "c", "d"], subcategories: [1,2,3,4]},
        { id: 2, title: ["e", "e", "e", "e"], subcategories: [1,2,3,4]},
        { id: 3, title: ["e", "e", "e", "e"], subcategories: [1,2,3,4]},
        { id: 4, title: ["e", "e", "e", "e"], subcategories: [1,2,3,4]},
    ];

    comment = {

        date: new Date(),
        text: 'I hope you enjoy learning React!',
        home: {
            produce: 'Fresh Produce',
            produceURL: 'produce',
            goods: 'Baked Goods',
            processed: 'Processed Foods',
            canned: 'Canned Foods',
            url: window.location.pathname,
        },
    };




    render() {

            return (
                <>
                    <div className="divide">
                        <p className="header">Browse Regulations by Food Type:</p>
                    </div>
                    <div id="boxes">
                        <Button className="buttons" type="primary" shape="round" size={'large'}>
                            <a href={'/produce'+this.renderURL(1)}>{this.renderSwitch(1)}</a>
                        </Button>
                        <Button className="buttons" type="primary" shape="round" size={'large'}>
                            <a href={'/baked'}> {this.renderSwitch(2)}</a>
                        </Button>
                        <Button className="buttons" type="primary" shape="round" size={'large'}>
                            <a href={'/processed'}>{this.renderSwitch(3)}</a>
                        </Button>
                        <Button className="buttons lastButton" type="primary" shape="round" size={'large'}>
                            <a href={'/canned'}>{this.renderSwitch(4)}</a>
                        </Button>
                    </div>
                    <div className="divide divideBottom">
                    </div>
                </>
            );

    }

    renderURL(num: number) {
        //let { id } = useParams();
       // let { slug }: any = useParams();
       // return <div>Now showing post {slug}</div>;

        if(this.comment.home.url !== '/')
        {
            return "/"+num;
        }
        else
        {
            return "";
        }
    }

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
                return data.types.map( (data) => {
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