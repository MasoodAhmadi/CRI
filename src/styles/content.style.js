import styled from "styled-components";
import { bamyanImg } from "../utils/links";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;
  max-height: 700px;
  background-image: url(${bamyanImg});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1;
`;

export const CardsWrapper = styled.div`
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: repeat(3, 1fr); /* ✅ ALWAYS 3 IN A ROW */

  width: 100%;
  max-width: 1100px;

  gap: clamp(1rem, 5vw, 4.5rem); /* responsive gap */
  padding: 0 1rem;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.7); /* make it more transparent */
  border-radius: 20px;

  aspect-ratio: 1 / 1;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px); /* optional: adds nice frosted glass effect */
`;


export const Title = styled.h2`
  margin: 0;
  font-weight: 700;
  text-align: center;
  color: #000000ff;

  font-size: clamp(1rem, 4.5vw, 2.2rem); /* responsive text */
  line-height: 1.2;
`;