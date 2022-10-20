import React, { useState } from "react";
    function About (){
    return(
        <div>
            <h1>hey</h1>
            {producten.map(item =>{
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </div>
    );
}

export default About;
