import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import GitHub from "./GitHub";
import Themes from "./MyHWs";
import roadmap from "./roadmap.png";
import Main from "./Main";
import { Layout, Menu } from "antd";

const { Header, Content } = Layout;

// import { Menu } from 'antd';

const Comp404 = () => <h1>404 ошибка</h1>;

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
      {/* <menu>
      <BrowserRouter>
        <div>
          <nav>
            <ul
            // style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}
            >
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/themes">Пройденные темы</Link>
              </li>
              <li>
                <Link to="/roadmap">Роадмап курса</Link>
              </li>
              <li>
                <Link to="/gitIssues">Github Issues</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </BrowserRouter>
    </menu> */}
      <BrowserRouter>
      <Layout>
        <Header className="header">
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
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
            {/* <Menu.Item key="5">
              <span>+</span>
              <Link state={{ param: 'addIssue' }} to="/issues" />
            </Menu.Item> */}
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
      {/* <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route index path="/themes" element={<Themes />} />
          <Route path="/roadmap" element={<Img />} />
          <Route path="/gitIssues" element={<GitHub />} />
          <Route path="*" element={<Comp404 />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
