import styled from "styled-components";

export const AboutUsCarouselContainer = styled.section`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  overflow: hidden;

  .about-row {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    margin: 0;
  }

  .about-column {
    flex: 0 0 50%;
    width: 50%;
    max-width: 50%;
    min-width: 0;
    padding: 10px;
  }

  /* Carousel dimensions */
  .about-carousel {
    width: 100%;
    height: 380px;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
  }

  /* Bootstrap carousel */
  .about-carousel .carousel,
  .about-carousel .carousel-inner,
  .about-carousel .carousel-item {
    width: 100% !important;
    height: 100% !important;
  }

  .about-carousel .carousel-item {
    overflow: hidden;
  }

  /* Images fill the entire carousel */
  .about-carousel .carousel-item img {
    display: block;
    width: 100% !important;
    height: 380px !important;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
  }

  /* About text */
  .about-text {
    width: 100%;
    min-width: 0;
    overflow-wrap: break-word;
  }

  .about-text h2 {
    font-size: clamp(1.3rem, 2.2vw, 2rem);
  }

  .about-text p {
    font-size: clamp(0.8rem, 1.1vw, 1rem);
    line-height: 1.6;
  }

  .about-text .list-group-item {
    background: transparent;
    border: none;
    padding: 6px 0;
    font-size: clamp(0.75rem, 1vw, 0.95rem);
    line-height: 1.4;
  }

  /* Mobile */
  @media (max-width: 767px) {
    .about-column {
      padding: 5px;
    }

    .about-carousel {
      height: 220px;
    }

    .about-carousel .carousel-item img {
      height: 220px !important;
    }

    .about-text h2 {
      font-size: 1.1rem;
      margin-bottom: 8px !important;
    }

    .about-text p {
      font-size: 0.72rem;
      line-height: 1.35;
      margin-bottom: 8px !important;
    }

    .about-text .list-group-item {
      font-size: 0.68rem;
      padding: 4px 0;
    }
  }
`;