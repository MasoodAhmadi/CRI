
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

export default function BreadCrump() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Breadcrumb className="mt-3">
      <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>

      <Breadcrumb.Item onClick={() => navigate("/dashboard")}>
        Dashboard
      </Breadcrumb.Item>

      {pathname.includes("users") && (
        <Breadcrumb.Item active>User Management</Breadcrumb.Item>
      )}

      {pathname.includes("events") && (
        <Breadcrumb.Item active>Event Management</Breadcrumb.Item>
      )}
      {pathname.includes("matches") && (
        <Breadcrumb.Item active>Match Management</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}
