"use client";
import React, { useState } from "react";
import Accordations from "./accordation";
import { ToastContainer, toast } from "react-toastify";
import { PersonBadgeFill } from "react-bootstrap-icons";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Modal,
} from "react-bootstrap";

export default function Membership() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!acceptedTerms) newErrors.terms = "You must agree to the terms";

    return newErrors;
  };

  // Submit form
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
      const response = await fetch(
        "https://backend-express-mlv3vqxxm-masoodahmadis-projects.vercel.app/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: "default123", // required by backend
            role: "player",
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Error creating user");
        setSubmitted(false);
      } else {
        setMessage("User added successfully!");
        setSubmitted(true);

        setForm({
          name: "",
          email: "",
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

                  <div className="mb-3">
                    <Button
                      variant="outline-primary"
                      onClick={() => setShowTermsModal(true)}
                    >
                      Terms and Conditions
                    </Button>
                  </div>

                  {message && !submitted && (
                    <Alert variant="danger">{message}</Alert>
                  )}

                  <Button
                    variant="primary"
                    type="submit"
                    disabled={loading || !acceptedTerms}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </Form>

                <Modal
                  show={showTermsModal}
                  onHide={() => setShowTermsModal(false)}
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Terms and Conditions</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Please review the membership terms before submitting.</p>
                    <p>
                      By joining, you agree to follow the community rules,
                      attend events responsibly, and respect other members.
                    </p>
                    <Form.Check
                      type="checkbox"
                      id="modalTermsAccept"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      label="I accept the Terms and Conditions"
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => setShowTermsModal(false)}
                    >
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => setShowTermsModal(false)}
                      disabled={!acceptedTerms}
                    >
                      Accept Terms
                    </Button>
                  </Modal.Footer>
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
