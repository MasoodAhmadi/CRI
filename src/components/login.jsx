import { toast } from "react-toastify";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";

const Login = ({ onLoginSuccess, onClose }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    setErrorMessage("");

    try {
      if (!email || !password) {
        setErrorMessage("Email and password are required.");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Update Navbar
      onLoginSuccess?.(data.user);

      // Close login modal
      onClose?.();

      toast.success("Login successful!", {
        position: "bottom-left",
        autoClose: 3000,
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage(error.message || "An error occurred during login.");
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card
        className="p-3 mb-5 shadow-sm"
        style={{
          border: "none",
          background: "rgba(255, 255, 255, 0.95)",
          WebkitBackdropFilter: "blur(30px)",
          borderRadius: "1.25rem",
          maxWidth: "450px",
          width: "100%",
        }}
      >
        <Card.Body>
          <h2 className="text-center text-primary fw-bold mb-4">Sign In</h2>

          <Form onSubmit={onSubmit} autoComplete="off">
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label className="fw-semibold">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-semibold">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {errorMessage && (
              <div className="text-danger fw-semibold mb-3">{errorMessage}</div>
            )}

            <Button
              variant="primary"
              type="submit"
              disabled={isSigningIn}
              className="w-100 rounded-pill fw-semibold shadow-sm"
            >
              {isSigningIn ? "Signing In..." : "Sign In"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
