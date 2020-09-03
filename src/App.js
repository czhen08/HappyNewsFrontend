import React from 'react';
import './App.css';
import PredictNews from "./components/PredictNews"
import PositiveNews from "./components/PositiveNews"
import UploadNews from "./components/UploadNews"
import Error from "./components/Error"
import { Link, Route, Switch } from "react-router-dom"

import { Layout, Menu, Typography } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';

const { Sider } = Layout;
const { Title } = Typography;

function App() {
  return (
    <main>
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo" />
          <Title level={2} >
            <div style={{ color: '#FFFFFF', textAlign: 'center' }}>HappyNews</div>
          </Title>
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1" icon={<VideoCameraOutlined />}>
              <Link to="/">Positive News </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to="/predict-news">Predict News </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined />}>
              <Link to="/upload-news">Upload News </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
      <Switch>
        <Route path="/" component={PositiveNews} exact/>
        <Route path="/predict-news" component={PredictNews} />
        <Route path="/upload-news" component={UploadNews} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
