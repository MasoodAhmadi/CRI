// app/page.js
'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { image2 } from './utils/links';
import { image3 } from './utils/links';
import Hewad from './assets/hewad.png';
import logo from './assets/logo.png';
import Footer from './components/footer';
import Navbar from './components/navbars';
import { image1, image4 } from './utils/links';
import ScrollToTop from './components/scroll';
import useWindowSize from './utils/useWindowsSize';
import { ArrowRight } from "react-bootstrap-icons";
import { Card, Button, Nav } from "react-bootstrap";
import { Carousel, Container, Row, Col, ListGroup } from 'react-bootstrap';
import './globals.css';


const dummyEvents = [
  {
    id: 1,
    title: "Shpazeeza Cricket Tournament 2025 in Hervanta, Tampere",
    author: "Masood Ahmadi",
    date: "15.11.2025 13:59",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title:
      "Football Tournament 2025 in Hervanta, Tampere for Afghans comming soon",
    author: "Farhad Sediqi",
    date: "30.10.2025 09:50",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
export default function Home() {

  const size = useWindowSize();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setEvents(dummyEvents);
    }, 500);
  }, []);


  return (
    <div>
      {/* 1. Carousel Section */}
      <Navbar />
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          {size.width > 782 ? (
            <div className="carousel-caption d-none d-md-block">
              <h2>Shpageeza Cricket</h2>
              <strong>Cricket tournament from Afghanis to Afghanis in Hervanta, Tampere - Finland</strong>
            </div>
          ) : (
            <Carousel.Caption>
              <p style={{ fontSize: "0.6rem", marginBottom: "0.5rem" }}>Shpageeza Cricket</p>
              <p style={{ fontSize: "0.5rem", marginBottom: "0.5rem" }}>Cricket tournament from Afghanis to Afghanis in Hervanta, Tampere - Finland</p>
            </Carousel.Caption>
          )}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
          {size.width > 782 ? (
            <div className="carousel-caption d-none d-md-block">
              <h2>Shpageeza Cricket</h2>
              <strong>Cricket tournament from Afghanis to Afghanis in Hervanta, Tampere - Finland</strong>
            </div>
          ) : (
            <Carousel.Caption>
              <p style={{ fontSize: "0.6rem", marginBottom: "0.5rem" }}>Shpageeza Cricket</p>
              <p style={{ fontSize: "0.5rem", marginBottom: "0.5rem" }}>Cricket tournament from Afghanis to Afghanis in Hervanta, Tampere - Finland</p>
            </Carousel.Caption>
          )}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
          {size.width > 782 ? (
            <div className="carousel-caption d-none d-md-block">
              <h2>Shpageeza Cricket</h2>
              <strong>Cricket tournament from Afghanis to Afghanis in Hervanta, Tampere - Finland</strong>
            </div>
          ) : (
            <Carousel.Caption>
              <p style={{ fontSize: "0.6rem", marginBottom: "0.5rem" }}>Shpageeza Cricket</p>
              <p style={{ fontSize: "0.5rem", marginBottom: "0.5rem" }}>Cricket tournament from Afghanis to Afghanis in Hervanta, Tampere - Finland</p>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      </Carousel>

      {/* 2. About Us Section */}
      <Container fluid className="py-5 px-4" id='features'>
        <Row className="align-items-center gx-5 gy-4">
          {/* Left Column - Image */}
          <Col md={6} className="text-center">
            <img
              src={image4}
              alt="About us"
              className="img-fluid rounded-4 shadow-lg"
              style={{
                objectFit: "cover",
                maxHeight: "500px",
                width: "100%",
              }}
            />
          </Col>

          {/* Right Column - Text + List */}
          <Col md={6}>
            <h2 className="mb-4 fw-bold text-dark text-center text-md-start">
              About Us
            </h2>
            <p className="fs-5 text-muted lh-lg mb-4">
              The Afghanistan Cricket Association in Tampere, Finland supports Afghan cricket players and fans living in Finland. It brings people together through games, training, and community events. The association helps young players grow and keeps Afghan culture alive through the love of cricket.
            </p>

            <ListGroup variant="flush" className="fs-6">
              <ListGroup.Item className="bg-transparent border-0 ps-0">
                ✅ Discipline defines the spirit of Afghanistan’s cricket team, both on and off the field.
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 ps-0">
                🚀 With unwavering compassion, players unite the nation through every match they play.
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 ps-0">
                🧠 The team's resilience inspires many, overcoming every challenge with pride.
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 ps-0">
                🌐 GBursting with potential, Afghanistan continues to rise as a powerful force in Finland cricket.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>


      {/* 3. News Section (your provided component) */}
      <div id='events' className="py-5" >

        <div className="position-relative" style={{ minHeight: "700px" }}>
          <img
            fluid
            loading="lazy"
            src={image3}
            alt="a description of the image"
            className="top-0 left-0 w-100 h-100 object-fit-cover position-absolute"
            style={{ opacity: 0.5, zIndex: -1, }}
          />
          <div
            className="position-relative"
            style={{ backgroundColor: "", minHeight: "500px" }}
          >
            <div className="container pt-5 d-flex flex-row justify-content-between align-items-center">
              <h1 className="text-light" style={{ fontWeight: 700 }}>
                Events
              </h1>
              <div
                className="d-flex flex-row justify-content-center align-items-center"
                role="button"
                onClick={() => navigate("/events")}
              >
                <p className="m-0 text-light" style={{ fontWeight: 500 }}>
                  <Nav.Link href="/events">all Events</Nav.Link>
                </p>
                <ArrowRight className="mx-3" size={21} style={{ color: "#fff" }} />

              </div>
            </div>
            <Container className="mb-4">
              <Row className="g-2 justify-content-center">
                {" "}
                {events.map((event) => (
                  <Col
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}
                    className="mt-3 mb-3"
                    key={event.id}
                  >
                    <Card className="h-100 text-center shadow-sm mb-3">
                      <Card.Body>
                        <div
                          style={{
                            // backgroundColor: "#4caf50",
                            width: "80px",
                            height: "80px",
                            margin: "0 auto 20px auto",
                            borderRadius: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image src={logo} alt="Event Icon" width={80} height={80} style={{ objectFit: "contain" }}

                          />
                          {/* <span style={{ fontSize: "36px", color: "#4caf50" }}>
                            🎙️
                          </span> */}
                        </div>
                        <Card.Title className="fw-bold text-dark">
                          {event.title}
                        </Card.Title>
                        <p className="text-muted small mb-2">
                          {event.author} - {event.date}
                        </p>
                        <hr />
                        <Card.Text className="text-muted small">
                          {event.description}
                        </Card.Text>
                        <Button
                          variant="success"
                          className="mt-3 px-4"
                          href={`/events/${event.id}`}
                        >
                          Read More
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </div>

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
          <Col xs={12} md={4} className=''>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
              <div
                className="float-horizontal"

                style={{
                  padding: "20px",
                  borderRadius: "12px",
                  background: "#fff",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Image
                  src={Hewad}
                  alt="Hewad Market"
                  width={190}
                  height={190}
                  fluid
                  className="mb-3"
                  style={{ objectFit: "contain" }}
                />
                <p className="text-muted small mb-0">
                  Sponsor One has been a key supporter of our mission and growth.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
              <div
                className="float-horizontal"
                style={{
                  padding: "20px",
                  borderRadius: "12px",
                  background: "#fff",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Image
                  src={Hewad}
                  alt="Hewad Market"
                  width={190}
                  height={190}
                  fluid
                  className="mb-3"
                  style={{ objectFit: "contain", display: "block", margin: "0 auto" }}
                />
                <p className="text-muted small mb-0 text-center">
                  Sponsor One has been a key supporter of our mission and growth.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <ScrollToTop />
      <Footer />

    </div >
  );
};

