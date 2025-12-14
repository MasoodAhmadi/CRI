import styled from "styled-components";
import { hoverGlow } from "./mixins";
import { Card, Nav, Navbar } from "react-bootstrap"
/* TOP BRAND BAR */
export const BrandBar = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.light};

  display: flex;
  align-items: center;

  /* Lock vertical growth */
  min-height: 110px;

  @media (max-width: 550px) {
    min-height: 80px;
  }
`;


export const BrandRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

/* THREE EQUAL SECTIONS */
export const BrandSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center; /* instead of margin-top */
  justify-content: ${({ align }) => align};
`;


/* LOGO CARD */
export const LogoCard = styled(Card)`
  width: 15rem;
  height: 15rem;
  border: none;
  background: transparent;
  overflow: hidden;
  margin-bottom: -25px;

  @media (max-width: 550px) {
    width: 5rem;
    height: 5rem;
    margin-bottom: -16px;
  }
`;




export const LogoImage = styled(Card.Img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

/* TITLE */
export const BrandTitle = styled.h1`
  margin: 0; /* VERY IMPORTANT */
  padding: 0;

  font-weight: ${({ theme }) => theme.typography.weightBold};
  color: ${({ theme }) => theme.colors.secondary};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;

  font-size: 3rem;
  line-height: 1.1;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }

  @media (max-width: 550px) {
    font-size: 0.7rem;
  }
`;


/* MAIN NAVBAR */

export const MainNavbar = styled(Navbar)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.75rem 1rem;
`;

/* NAV CONTAINER */
export const NavLinks = styled(Nav)`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  width: 100%;

  @media (max-width: 550px) {
    gap: 1rem;
    padding-top: 1rem;
  }
`;


/* NAV LINK */
export const NavLink = styled(Nav.Link)`
  color: ${({ theme }) => theme.colors.light} !important;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.typography.weightMedium};
  ${hoverGlow("#FFCC00")};
`;

/* RIGHT SIDE (LOGIN / LOGOUT) */
export const NavRight = styled(Nav)`
  margin-left: auto; 
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 550px) {
    padding-top: 1rem;
  }
`;


/* LOGIN BUTTON */
export const LoginButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radius.md};
  ${hoverGlow("#FFCC00")};
`;
export const LogoutButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radius.md};
  ${hoverGlow("#FFCC00")};
`;

