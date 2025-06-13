"use client";
import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const dummyEvents = [
  {
    id: 1,
    title:
      "First Event: Shpazeeza Cricket Tournament 2025 in Hervanta, Tampere",
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
    <div
      className="py-5 px-3"
      style={{
        background:
          "linear-gradient(135deg,rgb(255, 255, 255),rgb(255, 255, 255))",
      }}
    >
      <Row className="g-4 justify-content-center">
        {events.map((event) => (
          <Col md={5} key={event.id}>
            <Card className="h-100 text-center shadow-sm">
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
                  <span style={{ fontSize: "36px", color: "#4caf50" }}>🎙️</span>
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
                <Button variant="primary" className="mt-3 px-4">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
