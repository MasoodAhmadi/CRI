// app/page.js
'use client';

import React from 'react';

import { Carousel, Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Image from "next/image";

import Navbar from './components/navbars';
import EventSection from './components/eventsection';
import logo from "./assets/logo.png"; // Adjust the path as necessary
import { image1, image4 } from './utils/links';
import { image2 } from './utils/links';
import { image3 } from './utils/links';
import Hewad from './assets/hewad.png'; // Adjust the path as necessary
import Footer from './components/footer';

export default function Home() {



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
                    <Carousel.Caption>
                        <h2>Shpageeza Cricket</h2>
                        <strong>Cricket tournament from Afghanis to Afghanis in Hervanta, Tampere - Finland</strong>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2>Shpageeza Cricket</h2>
                        <strong>Cricket tournament from Afghanis to Afghanis in Hervanta, Tampere - Finland</strong>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>Shpageeza Cricket</h2>
                        <strong>Cricket tournament from Afghanis to Afghanis in Hervanta, Tampere - Finland</strong>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* 2. About Us Section */}
            <Container fluid className="py-5 px-4 bg-light" id='features'>
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
                        <h2 className="mb-4 fw-bold text-primary text-center text-md-start">
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
            <EventSection />

            {/* 3. Sponser Section */}
            <style jsx>{`
    .float-horizontal {
    animation: floatX 4s ease-in-out infinite;
    display: inline-block;
    margin: 0 auto;}

     @keyframes floatX {
     0% {
       transform: translateX(0px);
     }
     50% {
       transform: translateX(15px);
      }
        100% {
       transform: translateX(0px);
       }
     }
        `}</style>

            <div
                style={{
                    width: "100%",
                    background: "linear-gradient(135deg, #e0f7e9, #cce5ff)",
                    padding: "60px 20px",
                    borderRadius: "0",
                    boxShadow: "inset 0 -1px 5px rgba(0,0,0,0.05)",
                }}
            >
                <h2 className="text-center mb-5 fw-bold text-primary">Our Sponsors</h2>
                <Row className="g-4 text-center justify-content-center mx-0">
                    <Col xs={12} md={4}>
                        <div className="float-horizontal">
                            <div
                                style={{
                                    padding: "20px",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
                                }}
                            >
                                <Image
                                    src={Hewad}
                                    alt="Sponsor 1"
                                    width={160}
                                    height={160}
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
                        <div className="float-horizontal">
                            <div
                                style={{
                                    padding: "20px",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
                                }}
                            >
                                <Image
                                    src={Hewad}
                                    alt="Sponsor 2"
                                    width={160}
                                    height={160}
                                    fluid
                                    className="mb-3"
                                    style={{ objectFit: "contain" }}
                                />
                                <p className="text-muted small mb-0">
                                    Sponsor Two has generously contributed to our events and outreach.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div >
    );
};

