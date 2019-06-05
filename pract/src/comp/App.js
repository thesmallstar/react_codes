import React from "react";
import Joke from "./joke";
const jokes = require("../lib/jokes");

function App() {
  const jokedata = jokes.getjokes();
  console.log(jokedata);
  const jokec = jokedata.map(joke => (
    <Joke q={joke.setup} p={joke.punchline} key={joke.id} />
  ));

  return (
    <div>
      <h1>This are jokesss</h1>
      {jokec}
    </div>
  );
}

export default App;
