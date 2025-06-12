"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar, NavDropdown, Nav, Modal, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import CrickLogo from "../assets/logo.png";
import AuthModal from "./authmodal";
import "./navbar.css"; // Assuming you have a CSS file for custom styles

function Navbars() {
  const [showLogin, setShowLogin] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user exists in localStorage
    const user = localStorage.getItem("user");
    setUserLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserLoggedIn(false);
    router.push("/");
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        // style={{ backgroundColor: "#e9ecef" }}
        style={{ backgroundColor: "" }}
        className="navbar-custom px-3 navbar-large-text"
      >
        <Navbar.Brand href="/" className="ms-2">
          <Image
            src={CrickLogo}
            width="90"
            height="90"
            className="d-inline-block align-top me-2"
            alt="Crick Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-2">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="me-3">
            <Nav.Link href="/membership">Memberships</Nav.Link>

            {userLoggedIn ? (
              <>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                variant="primary"
                size="sm"
                onClick={() => setShowLogin(true)}
              >
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal
        show={showLogin}
        onHide={() => setShowLogin(false)}
        dialogClassName="custom-auth-modal"
        centered
      >
        <AuthModal onClose={() => setShowLogin(false)} />
      </Modal>
    </>
  );
}

export default Navbars;
