"use client";
import React, { useState } from "react";
import Login from "../login/login";
import Register from "./register";

const AuthModal = ({ onClose }) => {
  const [authMode, setAuthMode] = useState("login");

  const openLogin = () => {
    console.log("Open Login");
    setAuthMode("login");
  };

  const openRegister = () => {
    console.log("Open Register");
    setAuthMode("register");
  };

  return (
    <>
      {authMode === "login" && (
        <Login onSwitchToRegister={openRegister} onRegisterSuccess={onClose} />
      )}
      {authMode === "register" && (
        <Register onSwitchToLogin={openLogin} onRegisterSuccess={onClose} />
      )}
    </>
  );
};

export default AuthModal;
