import React from 'react';
import {Menu} from 'antd';

export default class Navbar extends React.Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item>First</Menu.Item>
        <Menu.Item>Second</Menu.Item>
        <Menu.Item>Third</Menu.Item>
      </Menu>
    );
  }
}