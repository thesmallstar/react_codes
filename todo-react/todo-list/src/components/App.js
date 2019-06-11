import React from "react";
import TodoItem from "./TodoItem";
import Menu from "./navbar";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";

const data = [
  {
    id: 1,
    title: "first todo",
    description: "pick up milk",
    complete: true,
    canceled: true,
    date: 1389878466730
  },
  {
    id: 2,
    title: "second todo",
    description: "learn backbone",
    canceled: false,
    date: 1389988926901,
    complete: false
  },

  {
    id: 3,
    title: "third todo",
    description: "go for a run",
    complete: false,
    canceled: false,
    date: 1389992494240
  }
];

const themes = createMuiTheme({
  palette: {
    primary: {
      main: "#1e88e5"
    },
    secondary: indigo
  }
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: data
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(function(prevstate) {
      console.log(prevstate);

      prevstate.todo[id - 1].complete = ~prevstate.todo[id - 1].complete;
      return prevstate;
    });
    console.log(id);
  }

  render() {
    const todos = this.state.todo.map(todom => (
      <TodoItem
        change={this.handleChange}
        key={todom.id}
        id={todom.id}
        t={todom.description}
        s={todom.complete}
      />
    ));

    return (
      <MuiThemeProvider theme={themes}>
        <div>
          <Menu />
          <Container>
            <FormControl component="fieldset">{todos}</FormControl>
          </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
