import React from "react";

function Joke(props) {
  console.log(props);
  if (props.q.trim() !== "") {
    return (
      <h3>
        {props.q} - {props.p}
      </h3>
    );
  } else {
    return <h3>{props.p}</h3>;
  }
}

export default Joke;
