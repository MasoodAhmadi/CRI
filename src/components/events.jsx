import React from "react";
import { image3 } from "../utils/links";
import { Link } from "react-router-dom";
import { dummyEvents } from "../data/dummyData";
import { ArrowRight } from "react-bootstrap-icons";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Events() {
  return (
    <Container
      className="p-0"
      style={{
        position: "",
        // background: "#fbfbfb",
        // borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(14, 133, 33, 0.1)",
      }}
    >
      <div className="position-relative" style={{ minHeight: "700px" }}>
        <img
          loading="lazy"
          src={image3}
          alt="Events background"
          className="top-0 left-0 w-100 h-100 object-fit-cover position-absolute"
          style={{ opacity: 0.5, zIndex: -1 }}
        />

        <div className="position-relative" style={{ minHeight: "500px" }}>
          <Container className="pt-5">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="text-dark" style={{ fontWeight: 700 }}>
                Events
              </h1>

              <div className="d-flex align-items-center">
                <Link
                  to="/events"
                  className="text-dark text-decoration-none fw-medium"
                >
                  All Events
                  <ArrowRight
                    className="mx-3 text-dark"
                    size={21}
                    style={{ color: "#000" }}
                  />
                </Link>
              </div>
            </div>
          </Container>

          <Container className="mb-4">
            <Row className="g-2 justify-content-center">
              {dummyEvents.map((event) => (
                <Col
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  className="mt-3 mb-3"
                  key={event.id}
                >
                  <Card className="h-100 text-center shadow-sm mb-3">
                    <Card.Body>
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          margin: "0 auto 20px auto",
                          borderRadius: "20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="/logo.png"
                          alt="Event Icon"
                          width={80}
                          height={80}
                          style={{ objectFit: "contain" }}
                        />
                      </div>

                      <Card.Title className="fw-bold text-dark">
                        {event.title}
                      </Card.Title>

                      <p className="text-muted small mb-2">
                        {event.author} - {event.date}
                      </p>

                      <hr />

                      <Card.Text className="text-muted small">
                        {event.description}
                      </Card.Text>

                      <Button
                        variant="success"
                        className="mt-3 px-4"
                        as={Link}
                        to={`/events/${event.id}`}
                      >
                        Read More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </Container>
  );
}
