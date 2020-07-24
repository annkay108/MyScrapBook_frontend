import React from "react";
import FancyBorder from "./components/FancyBorder";
import Component1 from "./components/Component1";
import "./App.css";

function App(){
  return(
    <FancyBorder name ="Neha" >
      <Component1>
        <ul>
          <li>Something</li>
        </ul>
        <p>Hello how is it going people</p>
      </Component1>
    </FancyBorder>
  )
}
export default App;