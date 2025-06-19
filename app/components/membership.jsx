"use client";
import React, { useState } from "react";

import { PersonBadgeFill } from "react-bootstrap-icons";
import Accordations from "./accordation";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Membership() {
  const supabase = createClientComponentClient();
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    membership: "",
    approved: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [registrations, setRegistrations] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    if (!form.address) newErrors.address = "Address is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.membership) newErrors.membership = "Select a membership type";
    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setSubmitted(false);

    // Validate form
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setLoading(false);
      return;
    }

    // Check if email or phone already exists
    const { data: existing, error: fetchError } = await supabase
      .from("members")
      .select("*")
      .or(`email.eq.${form.email},phone.eq.${form.phone}`);

    if (fetchError) {
      setMessage(
        "Error checking existing registrations: " + fetchError.message
      );
      setLoading(false);
      return;
    }

    if (existing && existing.length > 0) {
      const emailExists = existing.some((entry) => entry.email === form.email);
      const phoneExists = existing.some((entry) => entry.phone === form.phone);
      setErrors({
        ...validationErrors,
        ...(emailExists && { email: "Email is already registered" }),
        ...(phoneExists && { phone: "Phone is already registered" }),
      });
      setLoading(false);
      return;
    }

    // Insert new member
    const { error } = await supabase.from("members").insert({
      ...form,
    });

    if (error) {
      setMessage("Error: " + error.message);
      setSubmitted(false);
    } else {
      setMessage("User added successfully!");
      setForm({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        membership: "",
        approved: false,
      });
      setSubmitted(true);
    }

    setLoading(false);
  };
  return (
    <div className="container py-5">
      <Container className="my-3">
        <Row
          className="text-white py-4 mb-4"
          style={{ borderRadius: "8px", background: "#232323" }}
        >
          <Col
            md={12}
            className="text-center d-flex flex-row align-items-center justify-content-center gap-2"
          >
            <h1 className="display-3">Membership</h1>{" "}
            <PersonBadgeFill size={55} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="mb-0">
            <div className="card p-3 text-center">
              <strong className="m-2 p-2">Rules or Guidelines</strong>
              <Accordations />
            </div>
          </Col>
          <Col md={7} className="mb-0">
            <div className="card p-3">
              <Container className="mt-4">
                {/* <h3>Membership Form</h3> */}
                {submitted && (
                  <Alert variant="success">Form submitted successfully!</Alert>
                )}
                <Form noValidate onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          style={{ backgroundColor: "#e8edea" }}
                          className="bg-grey-100"
                          placeholder=""
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          style={{ backgroundColor: "#e8edea" }}
                          placeholder=""
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.lastName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder=""
                          style={{ backgroundColor: "#e8edea" }}
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          style={{ backgroundColor: "#e8edea" }}
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          style={{ backgroundColor: "#e8edea" }}
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                          isInvalid={!!errors.address}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.address}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          style={{ backgroundColor: "#e8edea" }}
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          isInvalid={!!errors.city}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.city}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-3" controlId="formMembership">
                        <Form.Label>Membership Type</Form.Label>
                        <Form.Select
                          name="membership"
                          value={form.membership}
                          onChange={handleChange}
                          isInvalid={!!errors.membership}
                        >
                          <option value="">Choose...</option>
                          <option value="basic">Practices</option>
                          <option value="premium">Matches</option>
                          <option value="vip">Full Membership</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.membership}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Container>
            </div>
          </Col>
        </Row>
        {/* </Container> */}`
      </Container>
    </div>
  );
}
