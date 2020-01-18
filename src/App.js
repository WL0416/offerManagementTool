import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
import Provider, { Consumer } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import NewOffer from "./components/pages/NewOffer";

class App extends Component {
  render() {
    const NewtonCourses = [
      "GE",
      "EAP",
      "DB",
      "ADB",
      "DLM",
      "ADLM",
      "GC",
      "GD",
      "DI",
      "ADT"
    ];

    const EmpireCourses = ["GE", "EAP", "DLM", "ADLM"];

    return (
      <Provider>
        <Consumer>
          {value => {
            const { weekday } = value;
            return (
              <Router>
                <div className="App">
                  <Header branding="OFFER MANAGEMENT TOOL" weekday={weekday} />
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                      exact
                      path="/newton"
                      component={() => (
                        <NewOffer college="Newton" allcourses={NewtonCourses} />
                      )}
                    />
                    <Route
                      exact
                      path="/empire"
                      component={() => (
                        <NewOffer college="Empire" allcourses={EmpireCourses} />
                      )}
                    />
                  </Switch>
                </div>
              </Router>
            );
          }}
        </Consumer>
      </Provider>
    );
  }
}

export default App;
