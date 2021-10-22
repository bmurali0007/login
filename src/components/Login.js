import React, { useState } from "react";
import PasswordValidation from "./PasswordValidation";
import "../styles/login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [pass, setPass] = useState("");
  const [focus, setFocus] = useState(false);
  const [data, setData] = useState("");
  const [validate, setValidate] = useState({
    char: null,
    number: null,
    upper: null,
    splChar: null,
  });
  //regExp

  const regexUser = /^[a-zA-Z0-9._]*$/; //eslint-disable-line
  const isNumberRegx = /\d/; //eslint-disable-line
  const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; //eslint-disable-line
  const isUppercase = /[A-Z\s]+/; //eslint-disable-line

  const userHandler = (user) => {
    setUser(user);
    !regexUser.test(user) && user !== "" ? setUserErr(true) : setUserErr(false);
  };

  const passValidate = (pass) => {
    setPass(pass);
    setValidate({
      char: pass.length > 7 ? true : false,
      splChar: specialCharacterRegx.test(pass) ? true : false,
      number: isNumberRegx.test(pass) ? true : false,
      upper: isUppercase.test(pass) ? true : false,
    });
  };
  const confirmHandler = (e) => {
    e.preventDefault();
    let userInfo = { user, pass };
    !userErr &&
    user !== "" &&
    pass !== "" &&
    validate.char === true &&
    validate.splChar === true &&
    validate.number === true &&
    validate.upper === true
      ? setData(userInfo)
      : setData("Invalid");
  };

  return (
    <div className="login">
      <form className="form-container">
        <h2 className="text-center">Login</h2>
        <input
          value={user}
          type="text"
          className="form-control"
          placeholder="username"
          onChange={(e) => userHandler(e.target.value)}
        />
        {userErr ? <span className="text-danger">Invalid Username</span> : null}
        <input
          value={pass}
          type="text"
          className="form-control"
          placeholder="password"
          onChange={(e) => passValidate(e.target.value)}
          onFocus={() => setFocus(true)}
        />
        {data !== "Invalid" && data !== "" ? (
          <div className="alert alert-success" role="alert">
            Logged In successfully
          </div>
        ) : null}
        {data === "Invalid" ? (
          <div className="alert alert-danger" role="alert">
            Check login credentials
          </div>
        ) : null}
        {data === "" ? null : null}
        {focus && <PasswordValidation validate={validate} />}
        <div className="text-center">
          <button onClick={confirmHandler}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
