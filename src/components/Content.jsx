import React from "react";

export default function Content() {
  var name = "parth";
  var age = 25;
  var isMarried = false;
  var user = {
    name: "Raj",
    age: 25,
  };
  var skills = ["HTML", "CSS", "JS", "REACT"];

  var contentStyle = {
    backgroundColor: "lightblue",
    margin: "10px",
  }

  return (
    <div style={contentStyle}>
      <h1>VARIABLE DECLARATION..</h1>
      {name}
      <h1 style={{color:"red"}}>Name = {name}</h1>
      <h2>Age : {age}</h2>
      <h2>Married : {isMarried == true ? "Married" : "Not Married"}</h2>
      <h2>Married: {isMarried == true ?<span style={{color:"green"}}>Married</span> : <span style={{color:"red"}}>Not Married</span>}</h2>
      <h3>{user.name}</h3>

      {/* <h1>Hello All !!</h1>
      <h2>From single component we have to return 1 tag and 1 tag must be return</h2>
      <h3>Every tag must have closing tag</h3>
      <h3>Whatever written in return statment will display to browser</h3> */}
    </div>
  );
}
