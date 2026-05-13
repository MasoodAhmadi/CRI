"use client";

import React, { useEffect, useState } from "react";
import Navbars from "../../components/navbars";
import BreadCrump from "../../components/breadCrump";
import { Table, Form, Button, Container } from "react-bootstrap";
import { Row, Col, Card, Badge } from "react-bootstrap";
import countryFlags from "../../utils/countryFlags";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.NEXT_PUBLIC_BACKEND_URL_3 ||
  process.env.NEXT_PUBLIC_BACKEND_URL_2 ||
  "There is no backend service working!";

const matchFormats = [
  "5 Over Match",
  "6 Over Match",
  "8 Over Match",
  "10 Over Match",
  "12 Over Match",
  "14 Over Match",
  "15 Over Match",
];

export default function MatchesPage() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    format: "",
    team1: { name: "", flag: "", score: "" },
    team2: { name: "", flag: "", score: "" },
    winner: "",
    result: "",
    venue: "",
    date: "",
  });

  // ---------------- FETCH MATCHES ----------------
  const fetchMatches = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/matches`);
      const data = await res.json();

      if (res.ok) {
        setMatches(data.data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  // ---------------- HANDLE INPUT ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("team1.")) {
      setForm({
        ...form,
        team1: {
          ...form.team1,
          [name.split(".")[1]]: value,
        },
      });
    } else if (name.startsWith("team2.")) {
      setForm({
        ...form,
        team2: {
          ...form.team2,
          [name.split(".")[1]]: value,
        },
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // ---------------- RESET ----------------
  const resetForm = () => {
    setForm({
      format: "",
      team1: { name: "", flag: "", score: "" },
      team2: { name: "", flag: "", score: "" },
      winner: "",
      result: "",
      venue: "",
      date: "",
    });
    setEditingId(null);
  };

  // ---------------- CREATE ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/api/matches`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        fetchMatches();
        resetForm();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ---------------- UPDATE ----------------
  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/matches/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        fetchMatches();
        resetForm();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ---------------- DELETE ----------------
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/matches/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchMatches();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ---------------- EDIT ----------------
  const handleEdit = (match) => {
    setForm(match);
    setEditingId(match._id);
  };

  return (
    <div>
      <Navbars />

      <Container className="pt-3">
        <BreadCrump />

        <h3 className="mt-3 mb-3">Matches Management</h3>

        {/* ---------------- FORM ---------------- */}
        <Card className="p-3 mb-4 shadow-sm">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={12}>
                <Form.Select
                  name="format"
                  value={form.format}
                  onChange={handleChange}
                  className="mb-3"
                >
                  <option value="">Select Match Format</option>

                  {matchFormats.map((format) => (
                    <option key={format} value={format}>
                      {format}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Control
                  placeholder="Team 1 Name"
                  name="team1.name"
                  value={form.team1.name}
                  onChange={handleChange}
                  className="mb-2"
                />
              </Col>

              <Col md={4}>
                <Form.Select
                  name="team1.name"
                  value={form.team1.name}
                  onChange={(e) => {
                    const selectedCountry = e.target.value;

                    setForm({
                      ...form,
                      team1: {
                        ...form.team1,
                        name: selectedCountry,
                        flag: countryFlags[selectedCountry],
                      },
                    });
                  }}
                  className="mb-2"
                >
                  <option value="">Select Team 1</option>

                  {Object.keys(countryFlags).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <Col md={4}>
                <Form.Control
                  placeholder="Team 1 Score"
                  name="team1.score"
                  value={form.team1.score}
                  onChange={handleChange}
                  className="mb-2"
                />
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Control
                  placeholder="Team 2 Name"
                  name="team2.name"
                  value={form.team2.name}
                  onChange={handleChange}
                  className="mb-2"
                />
              </Col>

              <Col md={4}>
                <Form.Select
                  name="team2.name"
                  value={form.team2.name}
                  onChange={(e) => {
                    const selectedCountry = e.target.value;

                    setForm({
                      ...form,
                      team2: {
                        ...form.team2,
                        name: selectedCountry,
                        flag: countryFlags[selectedCountry],
                      },
                    });
                  }}
                  className="mb-2"
                >
                  <option value="">Select Team 1</option>

                  {Object.keys(countryFlags).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <Col md={4}>
                <Form.Control
                  placeholder="Team 2 Score"
                  name="team2.score"
                  value={form.team2.score}
                  onChange={handleChange}
                  className="mb-2"
                />
              </Col>
            </Row>

            <Row>
              <Col md={3}>
                <Form.Control
                  placeholder="Winner"
                  name="winner"
                  value={form.winner}
                  onChange={handleChange}
                  className="mb-2"
                />
              </Col>

              <Col md={3}>
                <Form.Control
                  placeholder="Result"
                  name="result"
                  value={form.result}
                  onChange={handleChange}
                  className="mb-2"
                />
              </Col>

              <Col md={3}>
                <Form.Control
                  placeholder="Venue"
                  name="venue"
                  value={form.venue}
                  onChange={handleChange}
                  className="mb-2"
                />
              </Col>

              <Col md={3}>
                <Form.Control
                  placeholder="Date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="mb-2"
                />
              </Col>
            </Row>

            <div className="d-flex gap-2">
              {editingId ? (
                <Button
                  variant="warning"
                  onClick={() => handleUpdate(editingId)}
                >
                  Update Match
                </Button>
              ) : (
                <Button type="submit" variant="success">
                  Add Match
                </Button>
              )}

              <Button variant="secondary" onClick={resetForm}>
                Reset
              </Button>
            </div>
          </Form>
        </Card>

        {/* ---------------- TABLE ---------------- */}
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Teams</th>
              <th>Score</th>
              <th>Winner</th>
              <th>Result</th>
              <th>Venue</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {matches.map((match) => (
              <tr key={match._id}>
                <td>
                  {match.team1.name} vs {match.team2.name}
                </td>

                <td>
                  <Badge bg="primary">{match.team1.score}</Badge> -{" "}
                  <Badge bg="danger">{match.team2.score}</Badge>
                </td>

                <td>{match.winner}</td>

                <td>{match.result}</td>

                <td>{match.venue}</td>

                <td>
                  <Button
                    size="sm"
                    variant="info"
                    className="me-2"
                    onClick={() => handleEdit(match)}
                  >
                    Edit
                  </Button>

                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleDelete(match._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
