import React from "react";
import "./Registreren.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import { Email } from "@mui/icons-material";

const Registreren = () => {
  const [name, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, settelefoonnummer] = useState("");
  const [id, setid] = useState("");
  const [isManager] = useState("false");

  const Registreren = (e) => {
    console.log("test correct");
    e.preventDefault();
    const id = 0;
    const user = { id, name, password, email, phonenumber, isManager: false };
    console.log(user);
    fetch("https://localhost:7157/api/Users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log("New user Added");
    });
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
