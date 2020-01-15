import React, { Component } from "react";

const Context = React.createContext();

class Provider extends Component {
  state = {
    weekday: ""
  };

  async componentDidMount() {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    const nowSerializer = now.toLocaleDateString(undefined, options);

    this.setState({
      weekday: nowSerializer
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
export const Consumer = Context.Consumer;
