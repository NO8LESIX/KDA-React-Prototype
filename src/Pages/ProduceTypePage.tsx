import React from "react";
import "antd/dist/antd.css";
import KDANavbar from "../Components/KDANavbar";
import KDAFooter from "../Components/KDAFooter";
import {HomeBody} from "../Components/HomeBody";

export default class ProducePage extends React.Component {
    render() {
        return (
            <>
                <KDANavbar />
                <p>About Page</p>
                <HomeBody />
                <KDAFooter />
            </>
        );
    }
}