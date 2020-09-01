import React from "react";
import "antd/dist/antd.css";
import KDANavbar from "../Components/KDANavbar";
import KDAFooter from "../Components/KDAFooter";
import {ProductBody} from "../Components/ProductBody";

export default class ProducePage extends React.Component {
    render() {
        return (
            <>
                <KDANavbar />
                <ProductBody/>
                <KDAFooter />
            </>
        );
    }
}