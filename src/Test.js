import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";
import View from "./View";

const Menu = (props) => {
  return(
    <menu>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Материалы на курсе</Link>
                </li>
                <li>
                  <Link to="/about">Мои работы</Link>
                </li>
              </ul>
            </nav>
          </div>
        </Router>
      </menu>
  )
}

function Home() {
  return <h2>Home</h2>;
}

const About = () => (
  <h1>
    <View />
    <Outlet />
  </h1>
)

function App() {
  


  return (
    <div>
      <Menu />

      <Router>
        <Routes>
          <Route path="/about"> element={<About />}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </Router>
    
      <View />
    </div>
  );
}

export default App;
