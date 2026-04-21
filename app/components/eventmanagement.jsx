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
      <Modal.Header closeButton>
        <Modal.Title>{editingId ? "Edit Event" : "Create Event"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Control
                placeholder="Title"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="mb-2"
              />
            </Col>

            <Col md={6}>
              <Form.Control
                placeholder="Date"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="mb-2"
              />
            </Col>

            <Col md={6}>
              <Form.Control
                placeholder="Start Time"
                name="startTime"
                value={form.startTime}
                onChange={handleChange}
                className="mb-2"
              />
            </Col>

            <Col md={6}>
              <Form.Control
                placeholder="End Time"
                name="endTime"
                value={form.endTime}
                onChange={handleChange}
                className="mb-2"
              />
            </Col>

            <Col md={12}>
              <Form.Control
                placeholder="Description"
                name="description"
                value={form.description}
                onChange={handleChange}
                className="mb-2"
              />
            </Col>

            <Col md={4}>
              <Form.Control
                placeholder="Location Name"
                name="name"
                value={form.location?.name || ""}
                onChange={handleChange}
                className="mb-2"
              />
            </Col>

            <Col md={4}>
              <Form.Control
                placeholder="Address"
                name="address"
                value={form.location?.address || ""}
                onChange={handleChange}
                className="mb-2"
              />
            </Col>

            <Col md={4}>
              <Form.Control
                placeholder="City"
                name="city"
                value={form.location?.city || ""}
                onChange={handleChange}
                className="mb-2"
              />
            </Col>

            <Button type="submit" className="mt-3">
              Save Event
            </Button>
          </Row>
        </Form>
      </Modal.Body>
    </>
  );
}
