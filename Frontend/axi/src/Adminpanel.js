import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import GridButtonAdmin from "./Components/GirdButtonAdmin";

function Adminpanel() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <GridButtonAdmin />
      </div>
    </div>
  );
}

export default Adminpanel;
