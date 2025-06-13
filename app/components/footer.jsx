"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <a
              href="#"
              className="me-3"
              style={{ color: "#3b5998" }} // Facebook Blue
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="me-3"
              style={{ color: "#1DA1F2" }} // Twitter Blue
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              style={{ color: "#E1306C" }} // Instagram Pink
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Copy Right Reserved
            </p>
          </Col>

          <Col md={4}>
            <p className="mb-0">Contact: info@example.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
