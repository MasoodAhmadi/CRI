"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar, Nav, Modal, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import CrickLogo from "../assets/AfghanTampereSports.png";
import AuthModal from "./authmodal";
import "./navbar.css";
import SearchButton from "./search";

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
        style={{ backgroundColor: "" }}
        className="navbar-custom px-3 navbar-large-text"
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
          <Nav className="">
            <Nav.Link href="#features">ABOUT US</Nav.Link>
            <Nav.Link href="#events">EVENTS</Nav.Link>
            <Nav.Link href="/membership">MEMBERSHIP</Nav.Link>
          </Nav>
          <Nav className="ms-auto me-3 gap-3">
            <SearchButton />
            {userLoggedIn ? (
              <>
                <Nav.Link href="/dashboard">DASHBOARD</Nav.Link>
                <Button
                  variant="outline-danger"
                  size=""
                  onClick={handleLogout}
                  className="rounded-pill px-3 py-1 text-nowrap shadow-sm"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  size=""
                  onClick={() => setShowLogin(true)}
                  className="rounded-pill px-3 py-1 text-nowrap shadow-sm custom-login-btn"
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
