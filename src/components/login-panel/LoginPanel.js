import React, { useState } from "react";
import styles from "./LoginPanel.module.scss";

function LoginPanel() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inputValues, setInputValues] = useState({
    name_first: "",
    name_last: "",
    email: "",
    ssn: ""
  });

  const isValidated =
    inputValues["name_first"].length > 0 &&
    inputValues["name_last"].length > 0 &&
    inputValues["email"].length > 0;

  const isSSNEntered = inputValues["ssn"].length >= 9;

  const handleInputChange = event => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    setFormSubmitted(isValidated && isSSNEntered);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_column_form}>
        <div className={styles.card_header}>LogWin</div>
        <form className={styles.card_form} autoComplete="off">
          <fieldset>
            <legend>Name</legend>
            <input
              name="name_first"
              type="text"
              placeholder="First"
              onChange={handleInputChange}
            />
            <input
              name="name_last"
              type="text"
              placeholder="Last"
              onChange={handleInputChange}
            />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input name="email" type="text" onChange={handleInputChange} />
          </fieldset>
          <fieldset
            className="effect_fade"
            style={isValidated ? { opacity: "1" } : { opacity: "0" }}
          >
            <legend>SSN</legend>
            <input
              name="ssn"
              type="text"
              placeholder="You can trust us."
              onChange={handleInputChange}
            />
          </fieldset>
          <button
            disabled={!isSSNEntered}
            onClick={handleFormSubmit}
            className={styles.btn_submit}
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className={styles.card_column_content}>
        <h1>
          Login once.
          <br />
          Login <span className={formSubmitted ? styles.effect_scary_text : ''}>forever.</span>
        </h1>
        <p>
          We aim to ease the pain of remembering countless passwords and
          credentials. Let us carry that burden. Simply provide us with a little
          information about yourself and we will do the work for you.
        </p>
        <p>Trust us.</p>
        <h3
          className="effect_fade"
          style={isValidated ? { opacity: 1 } : { opacity: 0 }}
        >
          Just one more thing.
        </h3>
      </div>
    </div>
  );
}

export default LoginPanel;
