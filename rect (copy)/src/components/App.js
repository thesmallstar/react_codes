import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      charector: {},
      loading: false
    };
  }
  componentDidMount() {
    this.setState(Prev => {
      let newstate = Prev;
      newstate.loading = true;
      return newstate;
    });
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://swapi.co/api/people/1"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then(response => response.json())
      .then(contents => this.setState({ charector: contents, loading: false }));
  }

  render() {
    console.log(this.state.loading);
    return (
      <div>{this.state.loading ? "loading" : this.state.charector.name}</div>
    );
  }
}

export default App;
