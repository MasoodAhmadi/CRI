"use client";
import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useRouter } from "next/navigation";
import { Button, Card, Form } from "react-bootstrap";
import bcrypt from "bcryptjs";
import { ToastContainer, toast } from "react-toastify";

const Login = ({ onSwitchToRegister, onRegisterSuccess }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    setErrorMessage("");

    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !user) {
      setErrorMessage("User not found.");
      setIsSigningIn(false);
      return;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      setErrorMessage("Incorrect password.");
      setIsSigningIn(false);
      toast.error("Incorrect password!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    // Optional: store session info if needed
    toast.success("Login successfully!", {
      position: "bottom-left",
      autoClose: 3000,
    });

    setTimeout(() => {
      localStorage.setItem(
        "user",
        JSON.stringify({ id: user.id, email: user.email, role: user.role })
      );

      if (onRegisterSuccess) onRegisterSuccess();
      router.push("/dashboard");
    }, 1000); // 1 second delay before redirect
  };

  return (
    <>
      <ToastContainer />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "" }}
      >
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
                <div className="text-danger fw-semibold mb-3">
                  {errorMessage}
                </div>
              )}

              <Button
                variant="primary"
                type="submit"
                disabled={isSigningIn}
                className="w-100 rounded-pill fw-semibold shadow-sm"
              >
                {isSigningIn ? "Signing In..." : "Sign In"}
              </Button>

              <div className="d-flex justify-content-center align-items-center mt-4">
                <span className="me-2 text-muted">Don't have an account?</span>
                <button
                  type="button"
                  className="btn btn-link p-0 fw-semibold"
                  style={{ textDecoration: "underline" }}
                  onClick={onSwitchToRegister}
                >
                  Sign up
                </button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Login;
