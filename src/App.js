import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./Pages/Homepage.tsx";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import SNAPInfoPage from "./Pages/SNAPInfoPage";
import FileReportPage from "./Pages/FileReportPage";
import ReferencePage from "./Pages/ReferencePage";
import { COERegulationsPage } from "./Pages/COERegulationsPage";
import ProducePage from "./Pages/ProductTypePage";
import UpdatesPage from "./Pages/UpdatesPage";
import SearchResultsPage from "./Pages/SearchResultsPage";

export default function App() {
  return (
    <>
    <div className="AppSize">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/test">
              <Testing />
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
            <Route exact path="/produce">
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
            <Route exact path="/produce/:id">
              <Home />
            </Route>
            <Route exact path="/produce/:id/:id">
              <ProductPage />
            </Route>
            <Route exact path="/report">
                <FileReport />
            </Route>
            <Route path="/references">
              <Reference />
            </Route>
            <Route path="/coeregulations">
              <COERegulations />
              </Route>
            <Route path="/search">
                <SearchResults />
            </Route>
            <Route path="/updates">
              <Updates />
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
    </>
  );
}
function Home() {
  return <Homepage />;
}

function ProductPage() {
  return <ProducePage />;
}

//Use this route to test a page
function Testing() {
  return <> </>;
}

function About() {
  return <AboutPage />;
}

function SNAPInfo() {
  return <SNAPInfoPage />;
}

function FileReport() {
  return <FileReportPage />;
}
function Reference() {
  return <ReferencePage />
}
function COERegulations() {
  return <COERegulationsPage />
}
function SearchResults() {
    return <SearchResultsPage />
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
