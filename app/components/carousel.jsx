"use client";
import React from "react";
import { Carousel } from "react-bootstrap";
import Events from "../assets/event.jpg";
import AboutUs from "../assets/aboutus.jpg";
import { image2, image3 } from "../utils/links";
import Image from "next/image";

export default function Carousels({ size }) {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image className="d-block w-100" src={Events} alt="First slide" />
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
        <Image className="d-block w-100" src={AboutUs} alt="Second slide" />
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
        <Image className="d-block w-100" src={AboutUs} alt="Third slide" />
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
  );
}
