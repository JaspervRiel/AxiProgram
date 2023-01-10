import { Token } from "@mui/icons-material"
import React from "react"
import { useState } from "react"

function Testgebruiker(){
    const [username, setusername] = useState("")
    const [password, setPassword] = useState("")
    const [id,setid] = useState(0)
    
    
    const Printcookie=()=>{
      console.log(sessionStorage.getItem("token"))
    }
    const login=()=>{
      var user 
      var raw = JSON.stringify({
        "name": username,
        "password": password,
        "token": 'null'
      });
      
      fetch('https://localhost:7157/api/CheckCredentials',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:raw
      }).then((response) => response.json())
      .then((json) => sessionStorage.setItem("token",json.token))
      .then(sessionStorage.setItem("loggedIn",true));
    }
    return(
        <div>
        <div className="test">
            <p>{id}</p>

            <input onChange={(e)=>setusername(e.target.value)}></input>
            <input onChange={(e)=>setPassword(e.target.value)}></input>
            <button type="button" onClick={login}>login</button>
        </div>
        <div className="test2">
          <button type="button" onClick={Printcookie}>test</button>
        </div>
        </div>
        

    )

}
export default Testgebruiker