import React from "react";
import "antd/dist/antd.css";
import { HomeBody } from "../Components/HomeBody";
import { Layout } from "antd";
import KDANavbar from "../Components/KDANavbar";
import KDAFooter from "../Components/KDAFooter";

export class Homepage extends React.Component {
  state = {
    theme: "dark",
    current: "1",
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <>
        <Layout>
          <KDANavbar />
          <HomeBody />
          <KDAFooter />
        </Layout>
      </>
    );
  }
}
