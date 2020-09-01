import React from "react";
import "antd/dist/antd.css";
import UpdatesBody from "../Components/UpdatesBody";
import { Layout } from "antd";
import KDANavbar from "../Components/KDANavbar";
import KDAFooter from "../Components/KDAFooter";

export default class UpdatesPage extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <KDANavbar />
          <UpdatesBody />
          <KDAFooter />
        </Layout>
      </>
    );
  }
}
