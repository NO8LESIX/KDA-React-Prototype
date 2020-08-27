import React from "react";
import "antd/dist/antd.css";
import { KDANavbar } from "../Components/KDANavbar";
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
        <KDANavbar />        
      </>
    );
  }
}
