"use client";
import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Image, Container } from "react-bootstrap";
import { image3 } from "../utils/links";
import { ArrowRight } from "react-bootstrap-icons";

const dummyEvents = [
  {
    id: 1,
    title: "Shpazeeza Cricket Tournament 2025 in Hervanta, Tampere",
    author: "Masood Ahmadi",
    date: "15.11.2025 13:59",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title:
      "Football Tournament 2025 in Hervanta, Tampere for Afghans comming soon",
    author: "Farhad Sediqi",
    date: "30.10.2025 09:50",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default function EventSection() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setEvents(dummyEvents);
    }, 500);
  }, []);

  return (
    <div className="position-relative" style={{ minHeight: "700px" }}>
      <Image
        fluid
        loading="lazy"
        src={image3}
        alt="a description of the image"
        className="top-0 left-0 w-100 h-100 object-fit-cover position-absolute"
      />
      <div
        className="position-relative"
        style={{ backgroundColor: "", minHeight: "500px" }}
      >
        <div className="container pt-5 d-flex flex-row justify-content-between align-items-center">
          <h1 className="text-light" style={{ fontWeight: 700 }}>
            Events
          </h1>
          <div
            className="d-flex flex-row justify-content-center align-items-center"
            role="button"
            onClick={() => navigate("/news")}
          >
            <p className="m-0 text-light" style={{ fontWeight: 500 }}>
              all Events
            </p>
            <ArrowRight className="mx-3" size={21} style={{ color: "#fff" }} />
            {/* <Image
              loading="lazy"
              className="mx-3"
              // src={ToggleIcon}
              alt="toggle button"
              style={{ transform: "rotate(-90deg)" }}
            /> */}
          </div>
        </div>
        <Container className="">
          <Row className="g-2 justify-content-center">
            {" "}
            {events.map((event) => (
              <Col
                sm={12}
                md={12}
                lg={6}
                xl={6}
                className="mt-3"
                key={event.id}
              >
                <Card
                  className="h-100 text-center shadow-sm "
                  // style={{ width: "38rem" }}
                >
                  <Card.Body>
                    <div
                      style={{
                        backgroundColor: "#4caf50",
                        width: "80px",
                        height: "80px",
                        margin: "0 auto 20px auto",
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: "36px", color: "#4caf50" }}>
                        🎙️
                      </span>
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
                      href={`/events/${event.id}`}
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
  );
}
