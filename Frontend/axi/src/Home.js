import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import GridButton from "./Components/GridButton";
function Home(){
    

    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <GridButton />
            </div>
            <h1>AXI</h1>    
        </div>
    );
}

export default Home;