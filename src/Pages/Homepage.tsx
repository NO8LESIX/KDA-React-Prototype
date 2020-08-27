import React from "react";
import "antd/dist/antd.css";
import {Home_Body} from "../Components/Home_Body";
import { Layout } from "antd";
import KDANavbar from "../Components/KDANavbar";
const { Header, Content, Footer } = Layout;
//Constants

export class Homepage extends React.Component {

  state = {
    theme: 'dark',
    current: '1',
    collapsed: false
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
          <Home_Body />
          <Footer>Goes here</Footer>
        </Layout>
      </>
    );
  }
}
