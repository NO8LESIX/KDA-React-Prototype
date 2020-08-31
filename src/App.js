import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./Pages/Homepage.tsx";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import SNAPInfoPage from "./Pages/SNAPInfoPage";



export default function App() {
  return (
    <>
      <Router>
        <div>
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
              <Home />
            </Route>
            <Route path="/baked">
              <Home />
            </Route>
            <Route path="/canned">
              <Home />
            </Route>
            <Route path="/processed">
              <Home />
            </Route>
            <Route path="/produce/:id">
              <Home />
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

function SNAPInfo() {
  return <SNAPInfoPage />;
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
