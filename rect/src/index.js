import React from "react";
import ReactDOM from "react-dom";

/* 

practice 1


ReactDOM.render(
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>,
  document.getElementById("root")
);
*/

/* 


Cannot import two jsx elements in one 


ReactDOM.render(<h1>Hello Worlds</h1><p>Helloo</p>, document.getElementById("root"));

is not allowed

*/

/* functional componants 


function MyApp() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));

*/

/* functional componant pratice */

function AboutMe() {
  return (
    <div>
      <h1>MAnthan Surkar</h1>
      <p> me Blabbring about myself</p>
      <ol>
        <li>Mumbai</li>
        <li>Pune</li>
        <li>Goa</li>
      </ol>
    </div>
  );
}

ReactDOM.render(<AboutMe />, document.getElementById("root"));
