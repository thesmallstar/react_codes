import React from "react";
import TodoItem from "./TodoItem";
import Menu from "./navbar";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";

const themes = createMuiTheme({
  palette: {
    primary: {
      main: "#1e88e5"
    },
    secondary: indigo
  }
});

function App() {
  return (
    <MuiThemeProvider theme={themes}>
      <div>
        <Menu />
        <Container>
          <FormControl component="fieldset">
            <TodoItem />
          </FormControl>
        </Container>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
