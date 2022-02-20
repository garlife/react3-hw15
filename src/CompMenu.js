import { PlusOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Comp404 from "./Pages/Comp404";
import GitHub from "./Pages/GitHub";
import Img from "./Pages/Img";
import Main from "./Pages/Main";
import Themes from "./Pages/MyHWs";
import { setTitleIssue } from "./Pages/ViewIssue";


const { Header, Content } = Layout;

const CompMenu = (props) => {
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

  export default CompMenu;