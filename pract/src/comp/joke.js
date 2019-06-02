import React from "react";

function Joke(props) {
  if (props.jokes.q.trim() !== "") {
    return (
      <h3>
        {props.jokes.q} - {props.jokes.p}
      </h3>
    );
  } else {
    return <h3>{props.jokes.p}</h3>;
  }
}

export default Joke;
