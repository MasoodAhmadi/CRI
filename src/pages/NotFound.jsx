import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <p className="lead fw-semibold mb-3">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-muted mb-4">It might have been moved or deleted.</p>
      <Button
        onClick={() => navigate("/")}
        variant="primary"
        className="rounded-pill px-4 py-2 fw-semibold shadow-sm"
      >
        Go Back Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
