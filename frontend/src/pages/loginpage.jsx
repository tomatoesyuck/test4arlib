import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./loginpage.module.css";
import logo from "../assets/high_effort_logo.gif";
import { GoogleLogin } from "@react-oauth/google";

function LoginContainer() {
  const nav = useNavigate();
  const handleSubmit = () => {
    loginuser();
  };
  const responseMessage = (response) => {
    console.log(response);

    nav("/homepage");
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <img src={logo} alt="logo broke sad"></img>
      </div>

      <div className={styles.loginButt}>
        <div>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
        <p> &#40; login with ur nyu email pls &#41; </p>
        {/* <button onClick={handleSubmit}> LOGIN WITH GOOGLE </button> */}
      </div>
    </>
  );
}

export function LoginPage() {
  return (
    <>
      <LoginContainer></LoginContainer>
    </>
  );
}

async function loginuser() {
  console.log("fart");
  const url = `http://127.0.0.1:8000/accounts/login/`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
    mode: "cors",
  });
  const response_json = await response.json();
  return response_json;
}
