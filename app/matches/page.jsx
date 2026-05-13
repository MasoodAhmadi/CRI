"use client";

import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Badge, Spinner } from "react-bootstrap";
import Navbars from "../components/navbars";
import PaginationComponent from "../components/pagination";
import countryFlags from "../utils/countryFlags";
const API_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.NEXT_PUBLIC_BACKEND_URL_3 ||
  process.env.NEXT_PUBLIC_BACKEND_URL_2 ||
  "There is no backend service working!";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const fetchEvents = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/matches`);
      const data = await res.json();

      if (res.ok) {
        setEvents(data.data);
      } else {
        console.error("Failed to fetch events:", data);
      }
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };
  console.log("Fetched Matches:", events);

  useEffect(() => {
    fetchEvents();
  }, []);

  // Afghanistan Wins Count
  const afghanistanWins = events.filter(
    (match) => match.winner === "Afghanistan",
  ).length;

  // Pagination Logic
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedMatches = events.slice(startIndex, startIndex + pageSize);

  return (
    <div style={{ background: "#f5f7fb", minHeight: "100vh" }}>
      <Navbars />

      <Container className="py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <div>
            <h2 className="fw-bold mb-1">Cricket Match History</h2>

            <p className="text-muted mb-0">
              Tampere Afghanistan cricket team journey through the years - wins,
              losses, and unforgettable moments!
            </p>
          </div>

          <div className="d-flex gap-3 flex-wrap">
            <Badge bg="dark" className="px-3 py-2 fs-6">
              Total Matches: {events.length}
            </Badge>

            <div
              style={{
                background: "linear-gradient(135deg, #198754, #20c997)",
                color: "white",
                padding: "12px 20px",
                borderRadius: "14px",
                fontWeight: "bold",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              }}
            >
              <>
                {" "}
                {/* <div style={{ fontSize: "" }}> */}
                {/* {match.team1.flag} */}
                <img
                  src={countryFlags.Afghanistan}
                  alt={countryFlags.Afghanistan}
                  style={{
                    width: "30px",
                    height: "20px",
                    objectFit: "cover",
                    borderRadius: "px",
                  }}
                />
                {/* </div> */}
                Afghanistan Wins: {afghanistanWins}
              </>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <>
            <Row>
              {paginatedMatches.map((match) => (
                <Col lg={4} md={6} className="mb-4" key={match._id}>
                  <Card
                    className="border-0 shadow-sm h-100"
                    style={{
                      borderRadius: "18px",
                      overflow: "hidden",
                    }}
                  >
                    <Card.Header
                      className="d-flex justify-content-between align-items-center"
                      style={{
                        background: "#0d6efd",
                        color: "white",
                        padding: "14px 20px",
                      }}
                    >
                      <strong>{match.format}</strong>

                      <Badge bg="light" text="dark">
                        {match.date}
                      </Badge>
                    </Card.Header>

                    <Card.Body className="p-4">
                      {/* Teams */}
                      <Row className="align-items-center text-center mb-4">
                        <Col>
                          <div style={{ fontSize: "50px" }}>
                            {/* {match.team1.flag} */}
                            <img
                              src={countryFlags[match.team1.name]}
                              alt={match.team1.name}
                              style={{
                                width: "50px",
                                height: "35px",
                                objectFit: "cover",
                                borderRadius: "6px",
                              }}
                            />
                          </div>

                          <h6 className="fw-bold mt-2">{match.team1.name}</h6>

                          <Badge bg="primary" className="px-3 py-2">
                            {match.team1.score}
                          </Badge>
                        </Col>

                        <Col xs="auto">
                          <div
                            className="fw-bold text-muted"
                            style={{ fontSize: "20px" }}
                          >
                            VS
                          </div>
                        </Col>

                        <Col>
                          <div style={{ fontSize: "50px" }}>
                            <img
                              src={countryFlags[match.team2.name]}
                              alt={match.team2.name}
                              style={{
                                width: "50px",
                                height: "35px",
                                objectFit: "cover",
                                borderRadius: "6px",
                              }}
                            />{" "}
                          </div>

                          <h6 className="fw-bold mt-2">{match.team2.name}</h6>

                          <Badge bg="danger" className="px-3 py-2">
                            {match.team2.score}
                          </Badge>
                        </Col>
                      </Row>

                      {/* Result */}
                      <div
                        className="p-3 rounded text-center"
                        style={{
                          background: "#eef4ff",
                        }}
                      >
                        <h6 className="fw-bold text-success mb-2">
                          Winner: {match.winner}
                        </h6>

                        <p className="mb-1 fw-semibold">{match.result}</p>

                        <small className="text-muted">
                          Venue: {match.venue}
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Pagination */}
            <div className="mt-4">
              <PaginationComponent
                itemsCount={events.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
