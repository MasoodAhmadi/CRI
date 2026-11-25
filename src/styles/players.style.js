
import styled from "styled-components";

export const SquadContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
`;

export const SquadHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 32px;
    margin: 8px 0;
  }

  p {
    color: #64748b;
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 24px;
    }
  }
`;

export const SquadCount = styled.div`
  background: #dbeafe;
  color: #1d4ed8;
  padding: 12px 20px;
  border-radius: 25px;
  font-weight: bold;
`;

export const PlayersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`;

export const PlayerCardWrapper = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  }
`;

export const PlayerImage = styled.div`
  height: 250px;
  position: relative;
  background: #dbeafe;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 650px) {
    height: 180px;
  }
`;

export const JerseyNumber = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  background: #1d4ed8;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: bold;
`;

export const PlayerInfo = styled.div`
  padding: 18px;

  h3 {
    margin: 0 0 8px;
    font-size: 18px;
  }

  p {
    color: #64748b;
    font-size: 14px;
  }
`;

export const PlayerRole = styled.span`
  display: inline-block;
  background: #eff6ff;
  color: #1d4ed8;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 1000;
`;

export const PlayerModalWrapper = styled.div`
  background: white;
  width: 100%;
  max-width: 650px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 30px;
  border-radius: 20px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  border: none;
  background: #f1f5f9;
  font-size: 28px;
  cursor: pointer;
  border-radius: 50%;
  width: 38px;
  height: 38px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;

  img {
    width: 120px;
    height: 140px;
    object-fit: cover;
    border-radius: 12px;
  }

  h2 {
    margin: 0 0 10px;
  }

  p {
    color: #64748b;
  }

  span {
    color: #2563eb;
    font-weight: bold;
  }
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 20px 0;

  div {
    background: #eff6ff;
    padding: 16px 8px;
    text-align: center;
    border-radius: 12px;
  }

  strong {
    display: block;
    font-size: 22px;
    color: #1d4ed8;
  }

  span {
    font-size: 12px;
    color: #64748b;
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SectionTitle = styled.h3`
  margin-top: 24px;
`;

export const PlayerDescription = styled.p`
  color: #475569;
`;
