import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: "Manthan",
      log: true
    };
  }
  render() {
    return (
      <div>
        <h1>
          Hello you are currently logged <p hidden={this.state.log}>out</p>{" "}
          <p hidden={!this.state.log}>in</p>
        </h1>
      </div>
    );
  }
}

export default App;
