import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";
import View from "./View";
import MyHWs from "./MyHWs";
// import { Menu } from 'antd';


const Img = () => {
  return(
    <div>
      <h1>Роадмап курса</h1>
      <img src="https://trello.com/1/cards/61c4c7977522155990570844/attachments/61c4c7977522155990570870/download/image.png" alt="course roadmap image"></img>
    </div>
  )
}

const MenuReact = (props) => {
  return(
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
              </ul>
            </nav>
          </div>
        </BrowserRouter>
      </menu>
  )
}

function App() {
  return (
    <>
    <MenuReact />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/roadmap" element={<Img />} />
        <Route path="/works" element={<MyHWs />} />
        {/* <Route path="users" element={<Users />}>
          <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
    </>
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
