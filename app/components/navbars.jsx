"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogoutButton, NavRight } from "../styles/navbar.style";
import { MainNavbar } from "../styles/navbar.style";
import { NavLinks, NavLink } from "../styles/navbar.style";
import { LoginButton } from "../styles/navbar.style";
import { Container, Modal } from "react-bootstrap";
import AuthModal from "./authmodal";
import RBNavbar from "react-bootstrap/Navbar";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });
  const router = useRouter();

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUserLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <>
      <MainNavbar expand="sm" variant="dark" collapseOnSelect>
        <RBNavbar.Toggle aria-controls="main-navbar-nav" />
        <Container className="d-flex justify-content-between align-items-center py-2">
          <RBNavbar.Collapse
            id="main-navbar-nav"
            className="justify-content-start"
          >
            <img
              src="/AfghanTampereSports.png"
              width="100px"
              height="100px"
              onClick={() => {
                router.push("/");
              }}
              style={{ cursor: "pointer" }}
            />
            <NavLinks>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/#about">About</NavLink>
              <NavLink href="/events">Events</NavLink>
              <NavLink href="/matches">Matches</NavLink>
              <NavLink href="/membership">Membership</NavLink>

              <NavRight>
                {userLoggedIn ? (
                  <>
                    <NavLink href="/dashboard">Dashboard</NavLink>
                    <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
                  </>
                ) : (
                  <LoginButton onClick={() => setShowLogin(true)}>
                    Login
                  </LoginButton>
                )}
              </NavRight>
            </NavLinks>
          </RBNavbar.Collapse>
        </Container>
      </MainNavbar>
      <Modal
        show={showLogin}
        onHide={() => setShowLogin(false)}
        dialogClassName="custom-auth-modal"
        centered
      >
        <AuthModal onClose={() => setShowLogin(false)} />
      </Modal>{" "}
    </>
  );
}
