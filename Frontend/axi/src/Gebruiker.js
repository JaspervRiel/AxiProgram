import React from "react";
import "./Gebruiker.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";

const Gebruiker = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [id, setid] = useState("");

  const redirect=()=>{
    window.location.href = "http://localhost:3000"
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
    .then(sessionStorage.setItem("loggedIn",true)).then(console.log(sessionStorage.getItem("token")));
    setTimeout(redirect,5000)
  

  }
  
  return (
    <div class="inlog_achtergrond">
      <Navbar />
      <div class="screen">
        <div class="screen__content">
          <form class="login">
            <div class="login__field">
              <input
                type="text"
                className="input"
                name="login_input"
                placeholder="Enter Gebruikersnaam"
                id="Gebruikersnaam"
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div class="login__field">
              <input
                type="password"
                className="input"
                name="login_input"
                placeholder="Enter Wachtwoord"
                id="Wachtwoord"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button class="button login__submit" onClick={login} type="button">
              <span class="button__text">Inloggen</span>
            </a>
            <a class="button login__submit" href="Registreren">
              <span class="button__text">Registreren?</span>
            </a>
          </form>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Gebruiker;
