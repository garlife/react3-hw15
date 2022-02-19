import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";
import View from "./View";
import MyHWs from "./MyHWs";
import GitHub from "./GitHub";
import roadmap from "./roadmap.png"
// import { Menu } from 'antd';

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
    <menu>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Материалы на курсе</Link>
              </li>
              <li>
                <Link to="/roadmap">Роадмап курса</Link>
              </li>
              <li>
                <Link to="/works">Мои работы</Link>
              </li>
              <li>
                <Link to="/gitIssues">Github Issues</Link>
              </li>
            </ul>
          </nav>
        </div>
      </BrowserRouter>
    </menu>
  );
};

function App() {
  return (
    <div>
      <MenuReact />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/roadmap" element={<Img />} />
          <Route path="/works" element={<MyHWs />} />
          <Route path="/gitIssues" element={<GitHub />} />
          {/* <Route path="users" element={<Users />}>
          <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// function Users() {
//   return (
//     <div>
//       <nav>
//         <Link to="me">My Profile</Link>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }

export default App;
