import React from "react";
import "antd/dist/antd.css";
import KDANavbar from "../Components/KDANavbar";
import KDAFooter from "../Components/KDAFooter";
import ReferenceBody from "../Components/ReferenceBody";

export default class ReferencePage extends React.Component {
    render() {
        return (
            <>
            <KDANavbar />
            <ReferenceBody />
            <KDAFooter />
            </>
        );
    }
}