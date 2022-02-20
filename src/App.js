import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import GitHub from "./GitHub";
import Themes from "./MyHWs";
import roadmap from "./roadmap.png";
import Main from "./Main";
import { Layout, Menu, Button } from "antd";
import {setTitleIssue} from "./ViewIssue";
import { PlusOutlined } from "@ant-design/icons";


const { Header, Content } = Layout;

const Comp404 = () => {
  return (
    <>
      <b>Упс... 404 ошибка</b>
      <p>Страница, которую Вы ищете, была удалена или не существует</p>
    </>
  );
};

const Img = () => {
  return (
    <div style={{ height: "1000 px" }}>
      <h1>Роадмап курса</h1>
      <img
        src={roadmap}
        alt="course roadmap image"
        style={{ width: "1000 px", height: "1000 px" }}
      ></img>
    </div>
  );
};

const MenuReact = (props) => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Header className="header">
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <span>Главная</span>
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="2">
                <span>Пройденные темы</span>
                <Link to="/themes" />
              </Menu.Item>
              <Menu.Item key="3">
                <span>Роадмап Курса</span>
                <Link to="/roadmap" />
              </Menu.Item>
              <Menu.Item key="4">
                <span>Github Issues</span>
                <Link to="/gitIssues" />
              </Menu.Item>
              <Menu.Item key="4">
                <Button icon={<PlusOutlined />} shape="circle"></Button>
                <Link to="/gitIssues" onClick={setTitleIssue} />
              </Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Layout className="layout">
              <Content className="site-layout-background">
                <Routes>
                  <Route exact path="/" element={<Main />} />
                  <Route path="/themes" element={<Themes />} />
                  <Route path="/roadmap" element={<Img />} />
                  <Route path="/gitIssues" element={<GitHub />} />
                  <Route path="*" element={<Comp404 />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    </>
  );
};

function App() {
  return (
    <div>
      <MenuReact />
    </div>
  );
}

export default App;
