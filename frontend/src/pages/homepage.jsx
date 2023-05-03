import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./loginpage.module.css";
import logo from "../assets/high_effort_logo.gif";

function Content() {
  return (
    <>
      <p>yay hi u logged in</p>
    </>
  );
}

export function HomePage() {
  return (
    <>
      <Content></Content>
    </>
  );
}
