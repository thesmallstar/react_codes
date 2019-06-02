import React from "react";
import Joke from "./joke";

function App() {
  return (
    <div>
      <h1>This are jokesss</h1>
      <Joke jokes={{ q: "this is a question", p: "I am punch line" }} />
      <Joke jokes={{ q: "this is a question", p: "I am punch line" }} />
      <Joke jokes={{ q: "  ", p: "I am punch line" }} />
      <Joke jokes={{ q: "this is a question", p: "I am punch line" }} />
    </div>
  );
}

export default App;
