import React from "react";
import "antd/dist/antd.css";
import KDANavbar from "../Components/KDANavbar";
import KDAFooter from "../Components/KDAFooter";

export default class SNAPInfoPage extends React.Component {
  render() {
    return (
      <>
          <KDANavbar />
          <p>About Page</p>
          <KDAFooter />
      </>
    );
  }
}