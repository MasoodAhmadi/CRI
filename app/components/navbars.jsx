"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BrandBar, BrandRow, BrandSection } from "../styles/navbar.style";
import { LogoImage, BrandTitle, MainNavbar } from "../styles/navbar.style";
import { LogoCard, NavLinks, NavLink } from "../styles/navbar.style";
import { LoginButton } from "../styles/navbar.style";
import useWindowSize from "../utils/useWindowsSize";
import { Container, Modal } from "react-bootstrap";
import AuthModal from "./authmodal";

export default function Navbar() {
  // const size = useWindowSize();
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

  const isMobile = !!size.width && size.width <= 550;

  return (
    <>
      {/* TOP BRAND BAR */}
      <Container className="p-0">
        <BrandBar>
          <BrandRow>
            <BrandSection align="flex-start">
              <LogoCard isMobile={isMobile}>
                <LogoImage src="/crick.png" alt="Cricket" />
              </LogoCard>
            </BrandSection>

            <BrandSection align="center">
              <BrandTitle>AFGHANS TAMPERE SPORTS</BrandTitle>
            </BrandSection>

            <BrandSection align="flex-end">
              <LogoCard isMobile={isMobile}>
                <LogoImage src="/AfghanTampereSports.png" alt="Logo" />
              </LogoCard>
            </BrandSection>
          </BrandRow>
        </BrandBar>
      </Container>
      {/* MAIN NAVBAR */}
      <MainNavbar>
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#events">Events</NavLink>
          <NavLink href="/membership">Membership</NavLink>
        </NavLinks>

        {userLoggedIn ? (
          <NavLink onClick={handleLogout}>Logout</NavLink>
        ) : (
          <LoginButton>Login</LoginButton>
        )}
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
