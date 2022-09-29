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
        </div>
    );
}

export default Home;