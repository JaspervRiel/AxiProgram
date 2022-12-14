import React from "react";
import "./Gebruiker.css";
import Navbar from "./Components/Navbar";

function Gebruiker() {
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
              />
            </div>
            <div class="login__field">
              <input
                type="password"
                className="input"
                name="login_input"
                placeholder="Enter Wachtwoord"
                id="Wachtwoord"
              />
            </div>
            <button class="button login__submit">
              <span class="button__text">Inloggen</span>
            </button>
          </form>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default Gebruiker;
