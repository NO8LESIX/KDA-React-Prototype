import React from 'react';
import { Row, Col } from 'antd';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import {purple} from "color-name";
import "../CSS/Homepage.css";

export class Home_Body extends React.Component {
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