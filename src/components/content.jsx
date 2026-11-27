import { useNavigate } from "react-router-dom";
import countryFlags from "../utils/countryFlags";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Title } from "../styles/content.style";
import { CardsWrapper, Section } from "../styles/content.style";
import { Card as BootstrapCard, Badge, Spinner } from "react-bootstrap";
import { Calendar2CheckFill, PeopleFill, Receipt } from "react-bootstrap-icons";

const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL ||
  import.meta.env.VITE_BACKEND_URL_3 ||
  import.meta.env.VITE_BACKEND_URL_2 ||
  "";

export default function Content() {
  const navigate = useNavigate();

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMatches = async (signal) => {
    try {
      setLoading(true);
      setError("");

      const url = `${API_BASE_URL}/api/matches`;

      console.log("Fetching matches:", url);

      const res = await fetch(url, { signal });

      if (!res.ok) {
        throw new Error(`Matches API failed: ${res.status}`);
      }

      const response = await res.json();

      console.log("Matches API response:", response);

      // Supports both response formats
      const matchData = Array.isArray(response) ? response : response.data;

      if (!Array.isArray(matchData)) {
        throw new Error("Invalid matches API response");
      }

      setMatches(matchData.slice(0, 3));
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Matches fetching error:", err);
        setError(err.message);
        setMatches([]);
      }
    } finally {
      if (!signal.aborted) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchMatches(controller.signal);

    return () => controller.abort();
  }, []);

  return (
    <Container
      className="p-0"
      style={{
        position: "",
        background: "#fbfbfb",
        // borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(14, 133, 33, 0.1)",
      }}
    >
      <Section>
        <Container
          fluid
          className="position-relative p-3 p-md-4"
          style={{ zIndex: 2 }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="fw-bold mb-0 text-secondary">Latest Matches</h4>

            <Badge bg="secondary" className="px-3 py-2 text-dark">
              {matches.length} Recent Matches
            </Badge>
          </div>

          {loading ? (
            <div className="text-center py-4">
              <Spinner animation="border" />
            </div>
          ) : matches.length === 0 ? (
            <div className="text-center py-4">No recent matches available.</div>
          ) : (
            <Row className="g-3">
              {matches.map((match) => (
                <Col lg={4} md={6} sm={12} key={match._id}>
                  <BootstrapCard
                    className="border-0 h-100"
                    style={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                    }}
                  >
                    <BootstrapCard.Body className="p-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <Badge bg="primary">{match.format}</Badge>
                        <small className="text-muted">{match.date}</small>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <div className="text-center">
                          <img
                            src={countryFlags[match.team1?.name]}
                            alt={match.team1?.name || "Team 1"}
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
                            {match.team1?.name}
                          </h6>

                          <Badge bg="primary">{match.team1?.score}</Badge>
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

                          {/* <small className="text-muted">
                            {match.winner ? `${match.winner} Won` : "Result"}
                          </small> */}
                        </div>

                        {/* TEAM 2 */}

                        <div className="text-center">
                          <img
                            src={countryFlags[match.team2?.name]}
                            alt={match.team2?.name || "Team 2"}
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
                            {match.team2?.name}
                          </h6>

                          <Badge bg="danger">{match.team2?.score}</Badge>
                        </div>
                      </div>

                      <div
                        className="mt-3 text-center rounded p-2"
                        style={{
                          background: "#f5f7fb",
                          fontSize: "13px",
                        }}
                      >
                        <small className="text-muted">
                          {match.winner
                            ? `Winner: ${match.winner} - ${match.result}`
                            : "Match Result Pending"}
                        </small>
                        {/* {match.result} */}
                      </div>
                    </BootstrapCard.Body>
                  </BootstrapCard>
                </Col>
              ))}
            </Row>
          )}

          {/* NAVIGATION - BOTTOM */}

          <div className="mt-4 pt-3">
            <h4 className="fw-bold text-center mb-4 text-secondary">Explore</h4>

            <CardsWrapper>
              <Card onClick={() => navigate("/events")}>
                <Title>
                  <Calendar2CheckFill size={55} color="#000" />
                  <br />
                  Events
                </Title>
              </Card>

              <Card onClick={() => navigate("/teams")}>
                <Title>
                  <PeopleFill size={55} color="#ff0000" />
                  <br />
                  Teams
                </Title>
              </Card>

              <Card onClick={() => navigate("/matches")}>
                <Title>
                  <Receipt size={55} color="#008000" />
                  <br />
                  Matches
                </Title>
              </Card>
            </CardsWrapper>
          </div>
        </Container>
      </Section>
    </Container>
  );
}
