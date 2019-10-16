import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Provider, { Consumer } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import NewtonOffer from "./components/pages/Newton";
import EmpireOffer from "./components/pages/Empire";

class App extends Component {
  render() {
    return (
      <Provider>
        <Consumer>
          {value => {
            const { weekday } = value;
            return (
              <Router>
                <div className="App">
                  <Header branding="Offer" weekday={weekday} />
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/newton" component={NewtonOffer} />
                    <Route exact path="/empire" component={EmpireOffer} />
                  </Switch>
                  <Footer />
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
