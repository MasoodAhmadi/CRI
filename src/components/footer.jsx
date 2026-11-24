import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
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
              &copy; {new Date().getFullYear()} Copy Right Reserved
            </p>
          </Col>

          <Col md={4}>
            <p className="mb-0">
              Contact: afghanistancricketassociation@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
