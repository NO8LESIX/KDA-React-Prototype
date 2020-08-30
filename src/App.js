import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./Pages/Homepage.tsx";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import SNAPInfoPage from "./Pages/SNAPInfoPage";
import ProduceTypePage from "./Pages/ProduceTypePage";


/*const categories = [
  { id: 0, title: ["Produce", "Baked", "Processed", "Canned"], subcategories: [1,2,3,4]},
  { id: 1, title: ["a", "b", "c", "d"], subcategories: [1,2,3,4]},
  { id: 2, title: ["e", "e", "e", "e"], subcategories: [1,2,3,4]},
  { id: 3, title: ["e", "e", "e", "e"], subcategories: [1,2,3,4]},
  { id: 4, title: ["e", "e", "e", "e"], subcategories: [1,2,3,4]},
];

const Category = ({match}) => {
  const category = categories.find((category) => {
    return parseInt(match.params.catId) === category.id;
  });

  return (
      <>
        {match.isExact && (
            <>
              <h1>{category.title}</h1>
              {category.subcategories.map(subCategoryId => {
                return (
                    <div>
                      <Link key={subCategoryId} to={`${match.url}/${subCategoryId}`}>
                        {category.title.map(categoryTitle => {
                          return (<div>{categoryTitle}</div>)
                        })}
                      </Link>
                    </div>
                );
              })}
              {category.id === 7 && (
                  <p>Hello</p>
              )}
            </>
        )}
        <Switch>
          <Route path={`${match.path}/:catId`} component={Category} />
        </Switch>
      </>
  );
};*/

export default function App() {
  return (
    <>
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
           /* <Route exact path="/:catId" component={Category}>
            </Route>*/
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
              <ProduceType />
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

function ProduceType() {
  return <ProduceTypePage />;
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
