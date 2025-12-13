"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BrandBar, BrandRow, BrandSection } from "../styles/navbar.style";
import { LogoImage, BrandTitle, MainNavbar } from "../styles/navbar.style";
import { LogoCard, NavLinks, NavLink } from "../styles/navbar.style";
import { LoginButton } from "../styles/navbar.style";
import useWindowSize from "../utils/useWindowsSize";
import { Modal } from "react-bootstrap";
import AuthModal from "./authmodal";

export default function Navbar() {
  const size = useWindowSize();
  const isMobile = size.width <= 550;
  const [showLogin, setShowLogin] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const router = useRouter();

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
      {/* TOP BRAND BAR */}
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
            <img
              src="/AfghanTampereSports.png"
              alt="Logo"
              width={isMobile ? 100 : 200}
              height={isMobile ? 80 : 200}
            />
          </BrandSection>
        </BrandRow>
      </BrandBar>
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
