import React from "react";
import "./Levering.css";
import Navbar from "./Components/Navbar";
import Leveringen from "./Components/leveringen";

function Levering() {
  return (
    <div>
      <Navbar />

      <div class="container">
        <div class="flex-page">
          <Leveringen />
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
}

export default Levering;
