import React, { useEffect, useState } from "react";
import countryFlags from "../utils/countryFlags";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { CardsWrapper, Section } from "../styles/content.style";
import { Card, Title } from "../styles/content.style";
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

  // useEffect(() => {
  //   const fetchLatestMatches = async () => {
  //     try {
  //       if (!API_BASE_URL) {
  //         throw new Error("Backend URL is not configured.");
  //       }
  //       const res = await fetch(`${API_BASE_URL}/api/matches`);
  //       const data = await res.json();

  //       if (!res.ok) {
  //         throw new Error(data.message || "Failed to fetch matches");
  //       }

  //       setMatches((data.data || []).slice(0, 3));
  //     } catch (err) {
  //       console.error("Failed to fetch latest matches:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchLatestMatches();
  // }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchLatestMatches = async () => {
      try {
        if (!API_BASE_URL) {
          throw new Error("Backend URL is not configured.");
        }

        setLoading(true);

        const response = await fetch(`${API_BASE_URL}/api/matches`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const result = await response.json();

        const latestMatches = Array.isArray(result.data)
          ? result.data.slice(0, 3)
          : [];

        setMatches(latestMatches);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch matches:", error);
          setMatches([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchLatestMatches();

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
