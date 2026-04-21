"use client";

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Button, Form, Spinner, Modal } from "react-bootstrap";

import Navbars from "../../components/navbars";
import BreadCrump from "../../components/breadCrump";
import EventManagement from "../../components/eventmanagement";

const API_BASE_URL =
  process.env.BACKEND_URL || "https://backend-express-two-taupe.vercel.app";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    location: {
      name: "",
      address: "",
      city: "",
    },
  });

  // ================= FETCH EVENTS =================
  const fetchEvents = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/events`);
      const data = await res.json();
      if (res.ok) setEvents(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name in form.location) {
      setForm((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          [name]: value,
        },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ================= OPEN CREATE =================
  const openCreate = () => {
    setEditingId(null);
    setForm({
      title: "",
      description: "",
      date: "",
      startTime: "",
      endTime: "",
      location: { name: "", address: "", city: "" },
    });
    setShowModal(true);
  };

  // ================= OPEN EDIT =================
  const openEdit = (event) => {
    setEditingId(event._id);
    setForm(event);
    setShowModal(true);
  };

  // ================= SUBMIT (CREATE / UPDATE) =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const method = editingId ? "PATCH" : "POST";
    const url = editingId
      ? `${API_BASE_URL}/api/events/${editingId}`
      : `${API_BASE_URL}/api/events`;

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // ✅ THIS IS REQUIRED
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      fetchEvents();
      setShowModal(false);
    } else {
      const data = await res.json();
      console.log("ERROR:", data);
      alert(data.message || "Error saving event");
    }
  };

  // ================= DELETE EVENT =================
  const deleteEvent = async (id) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    const res = await fetch(`${API_BASE_URL}/api/events/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setEvents((prev) => prev.filter((e) => e._id !== id));
    }
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner />
      </Container>
    );
  }

  return (
    <>
      <Navbars />
      <BreadCrump />
      <Container className="py-4">
        <div className="d-flex justify-content-between mb-3">
          <h2>Event Management</h2>

          <Button onClick={openCreate}>+ Create Event</Button>
        </div>

        {/* EVENTS LIST */}
        <Row>
          {events.map((event) => (
            <Col md={4} key={event._id}>
              <Card className="mb-3 shadow-sm">
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>

                  <Card.Text>{event.description}</Card.Text>

                  <p>
                    📍 {event.location?.name}, {event.location?.city}
                  </p>

                  <p>📅 {new Date(event.date).toDateString()}</p>

                  <div className="d-flex gap-2">
                    <Button
                      size="sm"
                      variant="warning"
                      onClick={() => openEdit(event)}
                    >
                      Edit
                    </Button>

                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => deleteEvent(event._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* MODAL (CREATE / EDIT) */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <EventManagement
            editingId={editingId}
            form={form}
            setForm={setForm}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Modal>
      </Container>
    </>
  );
}
