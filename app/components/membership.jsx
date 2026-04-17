"use client";
import React, { useState } from "react";
import Accordations from "./accordation";
import { ToastContainer, toast } from "react-toastify";
import { PersonBadgeFill, Phone } from "react-bootstrap-icons";
import { Form, Button, Container, Row } from "react-bootstrap";
import { Col, Alert, Modal } from "react-bootstrap";
import Privacy from "./privacyandterms";
import PrivacyandTerms from "./privacyandterms";

export default function Membership() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const API_BASE_URL = process.env.BACKEND_URL || "error fetching backend URL";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) newErrors.phone = "phone number is required";
    if (!form.city) newErrors.city = "City is required";
    if (!acceptedTerms) newErrors.terms = "You must agree to the terms";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setSubmitted(false);

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setLoading(false);
      return;
    }

    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        city: form.city,
        password: "default123", // backend requires it
        role: "player", // optional if backend sets default
      };

      const response = await fetch(
        "https://backend-express-two-taupe.vercel.app/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        const errorText =
          data?.message ||
          (data?.errors &&
            Object.values(data.errors)
              .map((e) => e.message)
              .join(", ")) ||
          "Error creating user";

        setMessage(errorText);
        setSubmitted(false);
        return;
      } else {
        setMessage("User added successfully!");
        setSubmitted(true);

        setForm({
          name: "",
          email: "",
          phone: "",
          city: "",
        });

        toast.success("Form submitted successfully!", {
          position: "bottom-left",
          autoClose: 3000,
        });
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("Something went wrong.");
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
          <Col className="text-center d-flex align-items-center justify-content-center gap-2">
            <h1 className="display-3">Membership</h1>
            <PersonBadgeFill size={55} />
          </Col>
        </Row>

        <Row className="justify-content-center">
          {/* Right side */}
          <Col md={7}>
            <div className="card p-3">
              <Container className="mt-4">
                {submitted && <Alert variant="success">{message}</Alert>}

                <ToastContainer />

                <Form noValidate onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                          style={{ backgroundColor: "#e8edea" }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          style={{ backgroundColor: "#e8edea" }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>phone Number*</Form.Label>
                        <Form.Control
                          type="text"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                          style={{ backgroundColor: "#e8edea" }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>City*</Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          isInvalid={!!errors.city}
                          style={{ backgroundColor: "#e8edea" }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.city}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="mb-3">
                    <Button
                      variant="outline-primary"
                      onClick={() => setShowTermsModal(true)}
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "#28a745",
                        color: "#000",
                      }}
                    >
                      Terms and Conditions
                    </Button>
                  </div>

                  {message && !submitted && (
                    <Alert variant="danger">{message}</Alert>
                  )}

                  <Button
                    type="submit"
                    disabled={loading || !acceptedTerms}
                    style={{
                      backgroundColor: "#28a745",
                      borderColor: "#28a745",
                      color: "#000",
                      width: "220px",
                      display: "block",
                      margin: "0 auto",
                    }}
                  >
                    {loading ? "Registering..." : "Register Now"}
                  </Button>
                </Form>

                <Modal
                  show={showTermsModal}
                  onHide={() => setShowTermsModal(false)}
                  centered
                  size="lg"
                >
                  <PrivacyandTerms
                    setShowTermsModal={setShowTermsModal}
                    setAcceptedTerms={setAcceptedTerms}
                    acceptedTerms={acceptedTerms}
                  />
                </Modal>
              </Container>
            </div>
          </Col>
          {/* Left side */}
          <Col md={4}>
            <div className="card p-3 text-center">
              <strong className="m-2 p-2">
                Important Information – Cricket Tampere (Afghan Community)
              </strong>
              <Accordations />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
