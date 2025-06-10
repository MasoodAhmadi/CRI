"use client";
import React, { useState } from "react";
import { PersonBadgeFill } from "react-bootstrap-icons";

import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import Navbars from "../components/navbars";

function Membership() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    membership: "",
  });

  const [registrations, setRegistrations] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.membership) newErrors.membership = "Select a membership type";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await res.json();

        if (res.ok) {
          setSubmitted(true);
          setFormData({
            name: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            membership: "",
          });
          setErrors({});
        } else {
          alert("Error: " + result.message);
        }
      } catch (error) {
        console.error("Submission failed:", error);
        alert("An error occurred while submitting the form.");
      }
    }
  };

  return (
    <>
      <Navbars />

      <Container className="my-3">
        <Row
          className="text-white py-4 mb-4"
          style={{ borderRadius: "8px", background: "#2db300" }}
        >
          <Col
            md={12}
            className="text-center d-flex flex-row align-items-center justify-content-center gap-2"
          >
            <h1>Membership</h1> <PersonBadgeFill size={35} />
            {/* <p>Join us to unlock exclusive features and benefits!</p> */}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="mb-0">
            <div className="card p-3 text-center">
              <h2>Basic Plan</h2>
              <p>$10/month</p>
              <ul className="list-unstyled">
                <li>Access to basic features</li>
                <li>Email support</li>
              </ul>
              <button className="btn btn-primary">Join Now</button>
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
                          value={formData.name}
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
                          value={formData.lastName}
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
                          value={formData.email}
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
                          value={formData.phone}
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
                          value={formData.address}
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
                          value={formData.city}
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
                          value={formData.membership}
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
    </>
  );
}
export default Membership;
