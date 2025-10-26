"use client";
import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Events from "../assets/event.jpg";
import AboutUs from "../assets/aboutus.jpg";
import FunctionImage from "../assets/_DSC5074.JPG";
import { image2, image3 } from "../utils/links";
import Image from "next/image";

export default function Carousels({ size }) {
  const slideHeight = size.width > 782 ? "1000px" : "280px";

  return (
    // <Container fluid>
    <Carousel>
      <Carousel.Item>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: slideHeight,
          }}
        >
          <Image
            src={FunctionImage}
            alt="Second slide"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
        </div>
        {size.width > 782 ? (
          <div className="carousel-caption d-none d-md-block">
            <h2>Shpageeza Cricket</h2>
            <strong>
              Cricket tournament from Afghanis to Afghanis in Hervanta, Tampere
              - Finland
            </strong>
          </div>
        ) : (
          <Carousel.Caption>
            <p style={{ fontSize: "0.6rem", marginBottom: "0.5rem" }}>
              Shpageeza Cricket
            </p>
            <p style={{ fontSize: "0.5rem", marginBottom: "0.5rem" }}>
              Cricket tournament from Afghanis to Afghanis in Hervanta, Tampere
              - Finland
            </p>
          </Carousel.Caption>
        )}
      </Carousel.Item>

      <Carousel.Item>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: slideHeight,
          }}
        >
          <Image
            src={AboutUs}
            alt="Third slide"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
        </div>
        {size.width > 782 ? (
          <div className="carousel-caption d-none d-md-block">
            <h2>Shpageeza Cricket</h2>
            <strong>
              Cricket tournament from Afghanis to Afghanis in Hervanta, Tampere
              - Finland
            </strong>
          </div>
        ) : (
          <Carousel.Caption>
            <p style={{ fontSize: "0.6rem", marginBottom: "0.5rem" }}>
              Shpageeza Cricket
            </p>
            <p style={{ fontSize: "0.5rem", marginBottom: "0.5rem" }}>
              Cricket tournament from Afghanis to Afghanis in Hervanta, Tampere
              - Finland
            </p>
          </Carousel.Caption>
        )}
      </Carousel.Item>
    </Carousel>
    // </Container>
  );
}
