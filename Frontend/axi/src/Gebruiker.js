import React from "react";
import "./Gebruiker.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";

const Gebruiker = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [id, setid] = useState("");

  const login = (e) => {
    e.preventDefault();
    fetch(
      "https://localhost:7157/api/CheckCredentials?username=" +
        username +
        "&password=" +
        password
    )
      .then(() => {
        console.log("login");
      })
      .then((response) => console.log(response));
  };

  return (
    <div class="inlog_achtergrond">
      <Navbar />
      <p>{id}</p>
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
            <button class="button login__submit" onClick={login}>
              <span class="button__text">Inloggen</span>
            </button>
            <button class="button login__submit" href="Registreren">
              <span class="button__text">Registreren?</span>
            </button>
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
