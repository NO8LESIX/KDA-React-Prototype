import React from 'react';
import { Button } from 'antd';
import "../CSS/Homepage.css";

export class HomeBody extends React.Component {
    render() {
        return (
            <>
            <div className="divide">
                <p className="header">Browse Regulations by Food Type:</p>
            </div>
            <div id="boxes">
                <Button className="buttons" type="primary" shape="round" size={'large'}>
                    Fresh Produce
                </Button>
                <Button className="buttons" type="primary" shape="round" size={'large'}>
                    Baked Goods
                </Button>
                <Button className="buttons" type="primary" shape="round" size={'large'}>
                    Processed Foods
                </Button>
                <Button className="buttons lastButton" type="primary" shape="round" size={'large'}>
                    Canned Foods
                </Button>
            </div>
            <div className="divide divideBottom">
            </div>
            </>
        );
    }
}