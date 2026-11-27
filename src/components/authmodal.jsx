import React, { useState } from "react";
import Login from "./login";
import Register from "./register";

const AuthModal = ({ onClose, onLoginSuccess }) => {
  const [authMode, setAuthMode] = useState("login");

  const openLogin = () => {
    setAuthMode("login");
  };

  const openRegister = () => {
    setAuthMode("register");
  };

  return (
    <>
      {authMode === "login" && (
        <Login
          onSwitchToRegister={openRegister}
          onClose={onClose}
          onLoginSuccess={onLoginSuccess}
        />
      )}

      {authMode === "register" && (
        <Register
          onSwitchToLogin={openLogin}
          onClose={onClose}
          onRegisterSuccess={onClose}
        />
      )}
    </>
  );
};

export default AuthModal;
