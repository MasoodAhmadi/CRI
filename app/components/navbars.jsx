"use client"; // 👈 Add this line

import Image from "next/image";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import CrickLogo from "../assets/logo.png"; // Adjust the path as necessary

function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary px-3">
      <Navbar.Brand href="/" className="ms-2">
        <Image
          src={CrickLogo}
          width="90"
          height="90"
          className="d-inline-block align-top me-2"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto  ms-2">
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
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars;
