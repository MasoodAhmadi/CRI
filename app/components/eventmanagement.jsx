"use client";

import React from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";

export default function EventManagement({
  editingId,
  form,
  setForm,
  handleChange,
  handleSubmit,
}) {
  return (
    <>
      <Modal.Header closeButton className="event-modal-header">
        <Modal.Title className="event-modal-title">
          {editingId ? "Edit Event" : "Create Event"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="event-modal-body">
        <Form onSubmit={handleSubmit}>
          <Row className="g-3">
            <Col md={6}>
              <Form.Control
                placeholder="Title"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="event-input"
              />
            </Col>

            <Col md={6}>
              <Form.Control
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="event-input"
              />
            </Col>

            <Col md={6}>
              <Form.Control
                placeholder="Start Time"
                name="startTime"
                value={form.startTime}
                onChange={handleChange}
                className="event-input"
              />
            </Col>

            <Col md={6}>
              <Form.Control
                placeholder="End Time"
                name="endTime"
                value={form.endTime}
                onChange={handleChange}
                className="event-input"
              />
            </Col>

            <Col md={12}>
              <Form.Control
                placeholder="Description"
                name="description"
                value={form.description}
                onChange={handleChange}
                className="event-input"
              />
            </Col>

            <Col md={4}>
              <Form.Control
                placeholder="Location Name"
                name="name"
                value={form.location?.name || ""}
                onChange={handleChange}
                className="event-input"
              />
            </Col>

            <Col md={4}>
              <Form.Control
                placeholder="Address"
                name="address"
                value={form.location?.address || ""}
                onChange={handleChange}
                className="event-input"
              />
            </Col>

            <Col md={4}>
              <Form.Control
                placeholder="City"
                name="city"
                value={form.location?.city || ""}
                onChange={handleChange}
                className="event-input"
              />
            </Col>

            <Col md={12}>
              <Button type="submit" className="event-submit-btn w-100">
                Save Event
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </>
  );
}
