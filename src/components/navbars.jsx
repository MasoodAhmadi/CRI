import AuthModal from "./authmodal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RBNavbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { Container, Modal } from "react-bootstrap";
import { NavLinks, NavLink, LoginButton } from "../styles/navbar.style";
import { LogoutButton, NavRight, MainNavbar } from "../styles/navbar.style";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(
    () => !!localStorage.getItem("token") && !!localStorage.getItem("user"),
  );

  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setUserLoggedIn(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setUserLoggedIn(false);
    setShowLogin(false);

    navigate("/");
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setUserLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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
              src="/123.png"
              width="90px"
              height="90px"
              alt="Logo"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />

            <NavLinks>
              <NavLink forwardedAs={Link} to="/">
                Home
              </NavLink>

              <NavLink forwardedAs={Link} to="/#about">
                About
              </NavLink>

              <NavLink forwardedAs={Link} to="/events">
                Events
              </NavLink>

              <NavLink forwardedAs={Link} to="/matches">
                Matches
              </NavLink>

              <NavLink forwardedAs={Link} to="/players">
                Squad
              </NavLink>

              <NavLink forwardedAs={Link} to="/membership">
                Membership
              </NavLink>

              <NavRight>
                {userLoggedIn ? (
                  <>
                    <NavLink forwardedAs={Link} to="/dashboard">
                      Dashboard
                    </NavLink>

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
        <AuthModal
          onClose={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      </Modal>
    </>
  );
}
