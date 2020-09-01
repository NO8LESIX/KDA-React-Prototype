import React from "react";
import "antd/dist/antd.css";
import UpdateBody from "../Components/UpdateBody";
import { Layout } from "antd";
import KDANavbar from "../Components/KDANavbar";
import KDAFooter from "../Components/KDAFooter";

export default class UpdatePage extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <KDANavbar />
          <UpdateBody />
          <KDAFooter />
        </Layout>
      </>
    );
  }
}
