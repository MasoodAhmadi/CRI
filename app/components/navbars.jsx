"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar, Nav, Modal, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import CrickLogo from "../assets/AfghanTampereSports.png";
import AuthModal from "./authmodal";
import SearchButton from "./search";
import "./navbar.css";

function Navbars() {
  const [showLogin, setShowLogin] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
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
        className="navbar-custom px-3 navbar-large-text shadow-sm"
      >
        <Navbar.Brand href="/" className="ms-2">
          <Image
            src={CrickLogo}
            sizes="100px"
            width={100}
            height={100}
            className="d-inline-block align-top me-2"
            alt="Crick Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Left side links */}
          <Nav className="me-auto">
            <Nav.Link href="/#about" className="nav-link-custom">
              ABOUT US
            </Nav.Link>
            <Nav.Link href="/#events" className="nav-link-custom">
              EVENTS
            </Nav.Link>
            <Nav.Link href="/membership" className="nav-link-custom">
              MEMBERSHIP
            </Nav.Link>
          </Nav>

          {/* Right side links/buttons */}
          <Nav className="ms-auto gap-3">
            <SearchButton />
            {userLoggedIn ? (
              <>
                <Nav.Link href="/dashboard" className="nav-link-custom">
                  DASHBOARD
                </Nav.Link>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={handleLogout}
                  className="rounded-pill px-3 py-1 text-nowrap shadow-sm"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="sm"
                  onClick={() => setShowLogin(true)}
                  className="px-3 py-1 text-nowrap custom-login-btn"
                >
                  Login
                </Button>
              </>
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
