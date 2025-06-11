"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const NotFoundPage = () => {
  const router = useRouter();

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
        onClick={() => router.push("/")}
        variant="primary"
        className="rounded-pill px-4 py-2 fw-semibold shadow-sm"
      >
        Go Back Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
