import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./Pages/Homepage.tsx";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import SNAPInfoPage from "./Pages/SNAPInfoPage";
import ProducePage from "./Pages/ProducePage";

export default function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blank">Blank</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/reactdefault">default</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blank">
              <Blank />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/reactdefault">
              <ReactDefault />
            </Route>
            <Route path="/snapInfo">
              <SNAPInfo />
            </Route>
            <Route path="/produce">
              <Produce />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
function Home() {
  return <Homepage />;
}

function Blank() {
  return <p>Blank</p>;
}

function About() {
  return <AboutPage />;
}

function SNAPInfo(){
  return <SNAPInfoPage/>
};

function Produce(){
  return <ProducePage />;
}

function ReactDefault() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
