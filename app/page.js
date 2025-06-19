// app/page.js
'use client';

import React from 'react';
import Image from "next/image";
import { image2 } from './utils/links';
import { image3 } from './utils/links';
import Hewad from './assets/hewad.png';
import Footer from './components/footer';
import Navbar from './components/navbars';
import { image1, image4 } from './utils/links';
import EventSection from './components/eventsection';
import { Carousel, Container, Row, Col, ListGroup } from 'react-bootstrap';
import useWindowSize from './utils/useWindowsSize';
import ScrollToTop from './components/scroll';
import './globals.css'; // Ensure you have a global CSS file for styles


export default function Home() {
    const size = useWindowSize();



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

                <EventSection />
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
                                    alt="Sponsor"
                                    width={160}
                                    height={160}
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

