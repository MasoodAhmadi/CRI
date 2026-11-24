import React from "react";
import { Carousel } from "react-bootstrap";

export default function Carousels({ size }) {
  const slideHeight = size.width > 782 ? "1000px" : "280px";

  return (
    <Carousel>
      <Carousel.Item>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: slideHeight,
          }}
        >
          <img
            src="/football.jpg"
            alt="Second slide"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        {size.width > 782 ? (
          <div className="carousel-caption d-none d-md-block">
            <p>Shpageeza Cricket</p>
          </div>
        ) : (
          <Carousel.Caption>
            <p style={{ fontSize: "0.1rem", marginBottom: "0.1rem" }}>
              Shpageeza Cricket
            </p>
            <p style={{ fontSize: "0.1rem", marginBottom: "0.1rem" }}>
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
          <img
            src="/aboutus.jpg"
            alt="Third slide"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        {size.width > 782 ? (
          <div className="carousel-caption d-none d-md-block">
            <p>Shpageeza Cricket</p>
            {/* <strong>
              Cricket tournament from Afghanis to Afghanis in Hervanta, Tampere
              - Finland
            </strong> */}
          </div>
        ) : (
          <Carousel.Caption>
            <p style={{ fontSize: "0.1rem", marginBottom: "0.1rem" }}>
              Shpageeza Cricket
            </p>
            {/* <p style={{ fontSize: "0.1rem", marginBottom: "0.1rem" }}>
              Cricket tournament from Afghanis to Afghanis in Hervanta, Tampere
              - Finland
            </p> */}
          </Carousel.Caption>
        )}
      </Carousel.Item>
    </Carousel>
  );
}
