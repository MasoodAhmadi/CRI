"use client";

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge, Spinner } from "react-bootstrap";

import countryFlags from "../utils/countryFlags";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.NEXT_PUBLIC_BACKEND_URL_3 ||
  process.env.NEXT_PUBLIC_BACKEND_URL_2 ||
  "There is no backend service working!";

export default function LatestMatches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLatestMatches = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/matches`);
      const data = await res.json();

      if (res.ok) {
        // Get latest 3 matches only
        setMatches(data.data.slice(0, 3));
      }
    } catch (err) {
      console.error("Failed to fetch latest matches:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestMatches();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-4">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container fluid className="py-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold mb-0">Latest Matches</h4>

        <Badge bg="dark" className="px-3 py-2">
          {matches.length} Recent Matches
        </Badge>
      </div>

      <Row className="g-3">
        {matches.map((match) => (
          <Col lg={4} md={6} sm={12} key={match._id}>
            {" "}
            <Card
              className="border-0 h-100"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
              }}
            >
              <Card.Body className="p-3">
                {/* Match Header */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Badge bg="primary">{match.format}</Badge>

                  <small className="text-muted">{match.date}</small>
                </div>

                {/* Teams */}
                <div className="d-flex justify-content-between align-items-center">
                  {/* Team 1 */}
                  <div className="text-center">
                    <img
                      src={countryFlags[match.team1.name]}
                      alt={match.team1.name}
                      style={{
                        width: "45px",
                        height: "30px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />

                    <h6
                      className="mt-2 mb-1 fw-bold"
                      style={{ fontSize: "14px" }}
                    >
                      {match.team1.name}
                    </h6>

                    <Badge bg="primary">{match.team1.score}</Badge>
                  </div>

                  {/* VS */}
                  <div className="text-center">
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: "#6c757d",
                      }}
                    >
                      VS
                    </div>

                    <small className="text-muted">{match.winner} Won</small>
                  </div>

                  {/* Team 2 */}
                  <div className="text-center">
                    <img
                      src={countryFlags[match.team2.name]}
                      alt={match.team2.name}
                      style={{
                        width: "45px",
                        height: "30px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />

                    <h6
                      className="mt-2 mb-1 fw-bold"
                      style={{ fontSize: "14px" }}
                    >
                      {match.team2.name}
                    </h6>

                    <Badge bg="danger">{match.team2.score}</Badge>
                  </div>
                </div>

                {/* Result */}
                <div
                  className="mt-3 text-center rounded p-2"
                  style={{
                    background: "#f5f7fb",
                    fontSize: "13px",
                  }}
                >
                  {match.result}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
