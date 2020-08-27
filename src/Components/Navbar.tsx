import React from 'react';
import {Menu} from 'antd';
import {Input} from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import {Buttons} from './Buttons';
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


  render() {
    return (
      <Menu mode="horizontal" theme="dark" selectable={false} >
        <Menu.Item>First</Menu.Item>
        <Menu.Item>Second</Menu.Item>
        <Menu.Item><Buttons></Buttons></Menu.Item>
        <Menu.Item>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={(value) => console.log(value)}
          />
        </Menu.Item>
      </Menu>
    );
  }
}