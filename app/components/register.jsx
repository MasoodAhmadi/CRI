"use client";
import React, { useState } from "react";
import bcrypt from "bcryptjs";
import { Button, Card, Form } from "react-bootstrap";

const Register = ({ onSwitchToLogin, onRegisterSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsRegistering(true);
    setErrorMessage("");

    try {
      // Hash password before sending
      const hashedPassword = await bcrypt.hash(password, 10);

      // Call your Express API
      const response = await fetch(
        "https://backend-express-mlv3vqxxm-masoodahmadis-projects.vercel.app/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password: hashedPassword,
            role: "player", // or "user"
            name: email.split("@")[0], // optional, just example
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message || "Registration failed.");
      } else {
        console.log("User registered:", data);
        onRegisterSuccess?.(); // Call success callback
      }
    } catch (err) {
      console.error("Registration error:", err);
      setErrorMessage("Something went wrong.");
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div style={{ background: "transparent" }}>
      <Card
        className="p-1"
        aria-label="Register Card"
        style={{
          border: "none",
          background: "rgba(255, 255, 255, 0.95)",
          WebkitBackdropFilter: "blur(30px)",
          borderRadius: "1.25rem",
          maxWidth: "400px",
          margin: "auto",
          marginTop: "100px",
          padding: "20px",
        }}
      >
        <Card.Body>
          <h2 className="mb-4 text-center text-primary fw-bold">
            Create Account
          </h2>
          <Form autoComplete="off" onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-semibold">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-semibold">Password</Form.Label>
              <Form.Control
                disabled={isRegistering}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
              <Form.Label className="fw-semibold">Confirm Password</Form.Label>
              <Form.Control
                disabled={isRegistering}
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            {errorMessage && (
              <span className="text-danger fw-bold">{errorMessage}</span>
            )}

            <Button
              variant="primary"
              type="submit"
              className="w-100 rounded-pill fw-semibold shadow-sm"
              style={{ letterSpacing: "1px" }}
              disabled={isRegistering}
            >
              {isRegistering ? "Registering..." : "Register"}
            </Button>

            <div className="d-flex justify-content-center align-items-center mt-4">
              <span className="me-2 text-muted">Already have an account?</span>
              <button
                type="button"
                className="btn btn-link p-0 fw-semibold"
                style={{ textDecoration: "underline" }}
                onClick={onSwitchToLogin}
              >
                Log in
              </button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
