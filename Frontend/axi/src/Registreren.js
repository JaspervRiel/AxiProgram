import React from "react";
import "./Registreren.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import { Email } from "@mui/icons-material";

const Registreren = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const [telefoonnummer, settelefoonnummer] = useState("");
  const [id, setid] = useState("");

  const Registreren = (e) => {
    e.preventDefault();
    fetch(
      "https://localhost:7157/api/CheckCredentials?username=" +
        username +
        "&password=" +
        password +
        email +
        telefoonnummer
    )
      .then(() => {
        console.log("Registreren_");
      })
      .then((response) => console.log(response));
  };

  return (
    <div class="Registreren_achtergrond">
      <Navbar />
      <p>{id}</p>
      <div class="screen">
        <div class="screen__content">
          <form class="Registreren">
            <div class="Registreren__field">
              <input
                type="text"
                className="input"
                name="Registreren_input"
                placeholder="Enter Gebruikersnaam"
                id="Gebruikersnaam"
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div class="Registreren__field">
              <input
                type="password"
                className="input"
                name="Registreren_input"
                placeholder="Enter Wachtwoord"
                id="Wachtwoord"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="Registreren__field">
              <input
                type="text"
                className="input"
                name="Registreren_input"
                placeholder="Enter email"
                id="Email"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div class="Registreren__field">
              <input
                type="text"
                className="input"
                name="Registreren_input"
                placeholder="Enter telefoonnummer"
                id="Telefoonnummer"
                maxLength={10}
                onChange={(e) => settelefoonnummer(e.target.value)}
              />
            </div>
            <button class="button Registreren__submit" onClick={Registreren}>
              <span class="button__text">Registreren</span>
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

export default Registreren;
