import React from "react";

const PasswordValidation = ({ validate: { char, number, upper, splChar } }) => {
  return (
    <div className="password-meter text-left mb-4">
      <p className="text-dark">Password must contain:</p>
      <ul className="text-muted">
        <PasswordValidationItem
          isValid={char}
          text="Have at least 8 characters"
        />
        <PasswordValidationItem
          isValid={number}
          text="Have at least 1 number"
        />
        <PasswordValidationItem
          isValid={splChar}
          text="Have at least 1 special character"
        />
        <PasswordValidationItem
          isValid={upper}
          text="Have at least 1 uppercase"
        />
      </ul>
    </div>
  );
};

const PasswordValidationItem = ({ isValid, text }) => {
  const highlightClass = isValid
    ? "text-success"
    : isValid !== null
    ? "text-danger"
    : "";
  return <li className={highlightClass}>{text}</li>;
};

export default PasswordValidation;
