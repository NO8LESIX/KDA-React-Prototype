//Navbar using Ant Design - Scrapped due to theme reasons

import React from 'react';
import {Menu, Layout} from 'antd';
import {Input} from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const {Search} = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

export default class Navbar extends React.Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Item 1</Menu.Item>
          <Menu.Item key="2" isSelected={false}>
            {" "}
            <img
              src="https://www.k-state.edu/ksu-resources/branding/2/images/innovation-inspiration-215.png"
              placeholder="Logo Here"
            />
          </Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    );
  }
}