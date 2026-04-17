"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Badge,
  Spinner,
} from "react-bootstrap";
import Navbars from "../../components/navbars";
const API_BASE_URL =
  process.env.BACKEND_URL || "https://backend-express-two-taupe.vercel.app";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/events`);
      const data = await res.json();

      if (res.ok) {
        setEvents(data);
      }
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const now = new Date();

  const upcomingEvents = events.filter((e) => new Date(e.date) >= now);

  const pastEvents = events.filter((e) => new Date(e.date) < now);

  const handleRegister = (eventId) => {
    alert(`Register clicked for event: ${eventId}`);
    // later: API call to join event
  };

  const EventCard = ({ event, isPast }) => {
    return (
      <>
        <Card
          className="mb-4 shadow-lg border-0 event-card"
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            transition: "0.3s",
          }}
        >
          <div
            style={{
              background: isPast
                ? "#6c757d"
                : "linear-gradient(135deg, #28a745, #20c997)",
              height: "8px",
            }}
          />

          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <Card.Title className="mb-0">{event.title}</Card.Title>

              <Badge bg={isPast ? "secondary" : "success"}>
                {isPast ? "Past Event" : "Upcoming"}
              </Badge>
            </div>

            <Card.Text>{event.description}</Card.Text>

            <p className="mb-1">
              📍 <strong>{event.location?.name}</strong>, {event.location?.city}
            </p>

            <p className="mb-1">
              🕒 {event.startTime} - {event.endTime}
            </p>

            <p className="mb-3">📅 {new Date(event.date).toDateString()}</p>

            {!isPast && (
              <Button
                variant="success"
                className="w-100"
                onClick={() => handleRegister(event._id)}
              >
                Register
              </Button>
            )}
          </Card.Body>
        </Card>
      </>
    );
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <>
      <Navbars />

      <Container className="py-5">
        {/* UPCOMING EVENTS */}
        <h2 className="mb-3">🟢 Upcoming Events</h2>

        {upcomingEvents.length === 0 ? (
          <p>No upcoming events</p>
        ) : (
          <Row>
            {upcomingEvents.map((event) => (
              <Col md={4} key={event._id}>
                <EventCard event={event} isPast={false} />
              </Col>
            ))}
          </Row>
        )}

        {/* PAST EVENTS */}
        <h2 className="mt-5 mb-3">⚫ Past Events</h2>

        {pastEvents.length === 0 ? (
          <p>No past events</p>
        ) : (
          <Row>
            {pastEvents.map((event) => (
              <Col md={4} key={event._id}>
                <EventCard event={event} isPast={true} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}
