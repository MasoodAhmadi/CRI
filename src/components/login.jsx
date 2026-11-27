import { toast } from "react-toastify";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { Eye, EyeOff, X, ShieldCheck } from "lucide-react";

const Login = ({ onLoginSuccess, onClose }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    setErrorMessage("");

    try {
      if (!email.trim() || !password) {
        setErrorMessage("Email and password are required.");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      onLoginSuccess?.(data.user);
      onClose?.();

      toast.success("Login successful!", {
        position: "bottom-left",
        autoClose: 3000,
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage(error.message || "Unable to sign in. Please try again.");
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div className="club-login-wrapper">
      <Card className="club-login-card">
        {/* Header */}
        <div className="club-login-header">
          {onClose && (
            <button
              type="button"
              className="club-login-close"
              onClick={onClose}
              aria-label="Close login"
              disabled={isSigningIn}
            >
              <X size={21} />
            </button>
          )}

          <div className="club-login-logo">
            <ShieldCheck size={29} />
          </div>

          <h2>Welcome Back</h2>
          <p>Sign in to your cricket club account</p>
        </div>

        <Card.Body className="club-login-body">
          <Form onSubmit={onSubmit} autoComplete="on">
            <Form.Group className="mb-4" controlId="loginEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                autoComplete="username"
                required
                className="club-login-input"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="loginPassword">
              <Form.Label>Password</Form.Label>

              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="club-login-input"
                />

                <Button
                  type="button"
                  variant="outline-secondary"
                  className="club-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </Button>
              </InputGroup>
            </Form.Group>

            {errorMessage && (
              <div className="club-login-error" role="alert">
                {errorMessage}
              </div>
            )}

            <Button
              variant="success"
              type="submit"
              disabled={isSigningIn}
              className="club-login-submit"
            >
              {isSigningIn ? "Signing In..." : "Sign In"}
            </Button>

            <div className="club-login-footer">
              <ShieldCheck size={15} />
              <span>Secure access to your club account</span>
            </div>
          </Form>
        </Card.Body>
      </Card>

      <style>{`
        .club-login-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 8px;
          background: #f5f7f8;
          border-radius: 18px;
        }

        .club-login-card {
          width: 100%;
          max-width: 440px;
          border: 1px solid #e5e9ed;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 35px rgba(20, 40, 55, 0.09);
          background: #fff;
        }

        .club-login-header {
          position: relative;
          text-align: center;
          padding: 34px 24px 26px;
          color: #fff;
          background: linear-gradient(135deg, #142f46, #1d4652);
        }

        .club-login-close {
          position: absolute;
          top: 13px;
          right: 13px;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,.3);
          border-radius: 50%;
          background: rgba(255,255,255,.1);
          color: #fff;
          cursor: pointer;
          transition: background .2s ease;
        }

        .club-login-close:hover {
          background: rgba(255,255,255,.22);
        }

        .club-login-logo {
          width: 58px;
          height: 58px;
          margin: 0 auto 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: #278653;
          border-radius: 16px;
        }

        .club-login-header h2 {
          font-size: 25px;
          font-weight: 700;
          margin: 0 0 7px;
          letter-spacing: -.4px;
        }

        .club-login-header p {
          font-size: 14px;
          margin: 0;
          color: #d5e1e6;
        }

        .club-login-body {
          padding: 30px 28px 24px;
        }

        .club-login-body .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #263b4b;
          margin-bottom: 8px;
        }

        .club-login-input {
          min-height: 47px;
          border: 1px solid #dce3e8;
          border-radius: 9px;
          font-size: 14px;
          box-shadow: none !important;
        }

        .club-login-input:focus {
          border-color: #278653;
          box-shadow: 0 0 0 3px rgba(39,134,83,.12) !important;
        }

        .club-password-toggle {
          border-color: #dce3e8;
          border-radius: 0 9px 9px 0;
          color: #526575;
          background: #fff;
        }

        .club-password-toggle:hover {
          color: #278653;
          background: #f5f8f6;
          border-color: #278653;
        }

        .club-login-submit {
          width: 100%;
          min-height: 48px;
          border: none;
          border-radius: 9px;
          background: #278653;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: .2px;
          transition: background .2s ease, transform .2s ease;
        }

        .club-login-submit:hover:not(:disabled) {
          background: #1e7044;
          transform: translateY(-1px);
        }

        .club-login-error {
          padding: 11px 13px;
          margin-bottom: 17px;
          border-radius: 8px;
          color: #a52d37;
          background: #fff0f0;
          border: 1px solid #f5d4d7;
          font-size: 13px;
        }

        .club-login-footer {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 7px;
          margin-top: 22px;
          color: #7b8993;
          font-size: 12px;
        }

        @media (max-width: 480px) {
          .club-login-body {
            padding: 24px 19px 20px;
          }

          .club-login-header {
            padding: 30px 20px 23px;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
