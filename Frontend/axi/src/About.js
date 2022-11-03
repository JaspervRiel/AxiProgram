import React, {useState } from "react";  
function About (){
const [producten, setProducten] = useState([])
fetch('https://localhost:7157/api/Product').then(response => response.json())
.then(json => setProducten(json));


    return(

        <div>
            {producten.map(item => {
                return <h1>{JSON.stringify(item.Name)}</h1>
            })}
        </div>
    );
}

export default About;
