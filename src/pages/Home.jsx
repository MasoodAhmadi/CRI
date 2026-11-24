import React from "react";
import Footer from "../components/footer";
import Events from "../components/events";
import Navbar from "../components/navbars";
import { Row, Col } from "react-bootstrap";
import Contents from "../components/content";
import ScrollToTop from "../components/scroll";
import AboutUsCarousel from "../components/aboutuscarousel";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Contents />
      <AboutUsCarousel />
      <Events />

      {/* 3. Sponser Section */}
      <div
        style={{
          width: "100%",
          background: "#fdfdfd",
          padding: "60px 20px",
          borderRadius: "0",
          boxShadow: "inset 0 -1px 5px rgba(93, 93, 93, 0.05)",
        }}
      >
        <h2 className="text-center mb-5 fw-bold text-dark">Our Sponsors</h2>
        <Row className="g-4 d-flex text-center justify-content-center mx-0">
          <Col xs={12} md={4} className="">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <div
                className="float-horizontal"
                style={{
                  padding: "20px",
                  borderRadius: "12px",
                  background: "#fff",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src="/insaf.png"
                  alt="Insaf Market"
                  width={190}
                  height={190}
                  className="mb-3"
                  style={{ objectFit: "contain" }}
                  onClick={() => {
                    window.open("https://insafmarket.fi/", "_blank");
                  }}
                />
                <p className="text-muted small mb-0">
                  Sponsor One has been a key supporter of our mission and
                  growth.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <div
                className="float-horizontal"
                style={{
                  padding: "20px",
                  borderRadius: "12px",
                  background: "#fff",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src="/nupelda.png"
                  alt="nupelda"
                  width={190}
                  height={190}
                  className="mb-3"
                  style={{ objectFit: "contain" }}
                  onClick={() => {
                    window.open("https://nupelda.fi/", "_blank");
                  }}
                />
                <p className="text-muted small mb-0">
                  Sponsor One has been a key supporter of our mission and
                  growth.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <div
                className="float-horizontal"
                style={{
                  padding: "20px",
                  borderRadius: "12px",
                  background: "#fff",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src="/hewad.png"
                  alt="Hewad Market"
                  width={190}
                  height={190}
                  className="mb-3"
                  style={{
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto",
                  }}
                  onClick={() => {
                    window.open("https://www.hewadmarket.fi/", "_blank");
                  }}
                />
                <p className="text-muted small mb-0 text-center">
                  Sponsor One has been a key supporter of our mission and
                  growth.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
