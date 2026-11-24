
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  // width: 100%;
  min-height: 700px;
  height: auto;
  margin: 0;
  padding: 0;
  overflow: hidden;
  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

// export const Overlay = styled.div`
//   // position: absolute;
//   // inset: 0;

//   background: linear-gradient(
//     to bottom,
//     rgba(3, 15, 48, 0.15),
//     rgba(3, 15, 48, 0.3)
//   );

//   // z-index: 1;
// `;

export const CardsWrapper = styled.div`
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 150px));

  justify-content: center;
  gap: 2rem;

  width: 100%;
  padding: 0 1rem;

  @media (max-width: 576px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.82);

  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 20px;

  aspect-ratio: 1 / 1;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.25),
    inset 0 1px 2px rgba(255, 255, 255, 0.8);

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-7px);
    background: rgba(255, 255, 255, 0.95);

    box-shadow:
      0 18px 40px rgba(0, 0, 0, 0.35),
      0 0 20px rgba(100, 170, 255, 0.3);
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 700;
  text-align: center;
  color: #061b45;

  font-size: clamp(0.85rem, 2vw, 1.5rem);
  line-height: 1.5;
`;
