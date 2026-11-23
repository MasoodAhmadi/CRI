
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutButton, NavRight } from "../styles/navbar.style";
import { MainNavbar } from "../styles/navbar.style";
import { NavLinks, NavLink } from "../styles/navbar.style";
import { LoginButton } from "../styles/navbar.style";
import { Container, Modal } from "react-bootstrap";
import AuthModal from "./authmodal";
import RBNavbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });
  const navigate = useNavigate();

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
    navigate("/");
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
                navigate("/");
              }}
              style={{ cursor: "pointer" }}
            />
            <NavLinks>
              <NavLink forwardedAs={Link} to="/">Home</NavLink>
              <NavLink forwardedAs={Link} to="/#about">About</NavLink>
              <NavLink forwardedAs={Link} to="/events">Events</NavLink>
              <NavLink forwardedAs={Link} to="/matches">Matches</NavLink>
              <NavLink forwardedAs={Link} to="/membership">Membership</NavLink>

              <NavRight>
                {userLoggedIn ? (
                  <>
                    <NavLink forwardedAs={Link} to="/dashboard">Dashboard</NavLink>
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
