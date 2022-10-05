/*import React from "react";
async function GetFetch(){
    let resp = await fetch('https://localhost:7157/api/Product')
    let respJson = await resp.json()
    const list = respJson
    console.log(list)
    return list
}*/

function About (){    
    fetch('https://localhost:7157/api/Product')
        .then(response=>response.json())
        .then(data=>console.log(data));
    return(
        <div>
            <h1>hey</h1>
        </div>
    );
}

export default About;
