import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const theme = {
    colors: {
      primary: "#343a40",
      textLight: "#f8f9fa",
    },
  };
  return (
    <footer
      className="text-light text-center py-4 mt-5"
      style={{ background: theme.colors.primary }}
    >
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <div className="mb-2 d-flex justify-content-center">
              <a
                href="https://www.facebook.com/profile.php?id=61573336199254"
                className="me-3"
                style={{ color: "#3b5998" }}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
              <a href="#" className="me-3" style={{ color: "#1DA1F2" }}>
                <FaTwitter size={24} />
              </a>
              <a href="#" style={{ color: "#E1306C" }} aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
            </div>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <p className="mb-0">
              <small>
                &copy; {new Date().getFullYear()} Copy Right Reserved
              </small>
            </p>
          </Col>

          <Col md={4}>
            <p className="mb-0">
              <small>Contact: afghanistancricketassociation@gmail.com</small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
