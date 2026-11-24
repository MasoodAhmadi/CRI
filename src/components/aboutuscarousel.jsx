import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Carousels from "./carousel";
import useWindowSize from "../utils/useWindowsSize";
import { AboutUsCarouselContainer } from "../styles/carousel.style";

export default function AboutUsCarousel() {
  const size = useWindowSize();

  return (
    <Container
      // fluid
      className="p-0"
      style={{ position: "", background: "#ffffff" }}
    >
      <AboutUsCarouselContainer id="about">
        <Container fluid className="py-4 px-3">
          <Row className="about-row g-3">
            {/* Left Column - Carousel */}
            <Col xs={6} className="about-column">
              <div className="about-carousel">
                <Carousels size={size} />
              </div>
            </Col>

            {/* Right Column - About Us */}
            <Col xs={6} className="about-column">
              <div className="about-text">
                <h2 className="fw-bold text-dark mb-3">About Us</h2>

                <p className="text-muted mb-3">
                  The Afghanistan Cricket Association in Tampere, Finland brings
                  Afghan cricket players and fans together through matches,
                  training, and community events. We support young talent and
                  promote Afghan cricket culture in Finland.
                </p>

                <ListGroup variant="flush">
                  <ListGroup.Item>
                    ✅ Discipline on and off the field.
                  </ListGroup.Item>

                  <ListGroup.Item>🚀 Unity through every match.</ListGroup.Item>

                  <ListGroup.Item>
                    🧠 Resilience in every challenge.
                  </ListGroup.Item>

                  <ListGroup.Item>
                    🌐 Growing Afghan cricket in Finland.
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </AboutUsCarouselContainer>
    </Container>
  );
}
