import React from "react";

import {
  ModalOverlay,
  PlayerModalWrapper,
  CloseButton,
  ModalHeader,
  DetailsGrid,
  StatsGrid,
  SectionTitle,
  PlayerDescription,
} from "../styles/players.style";

const PlayerModal = ({ player, onClose }) => {
  if (!player) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <PlayerModalWrapper
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <CloseButton onClick={onClose}>×</CloseButton>

        <ModalHeader>
          <img src={player.photo} alt={player.name} />

          <div>
            <h2>{player.name}</h2>
            <p>Jersey #{player.jerseyNumber}</p>
            <span>{player.role}</span>
          </div>
        </ModalHeader>

        <SectionTitle>Player Information</SectionTitle>

        <DetailsGrid>
          <p>
            <b>City:</b> {player.city}
          </p>
          <p>
            <b>Country:</b> {player.country}
          </p>
          <p>
            <b>Age:</b> {player.age}
          </p>
          <p>
            <b>Batting:</b> {player.battingStyle}
          </p>
          <p>
            <b>Bowling:</b> {player.bowlingStyle}
          </p>
        </DetailsGrid>

        <SectionTitle>Career Records in Tampere</SectionTitle>

        <StatsGrid>
          <div>
            <strong>{player.matches}</strong>
            <span>Matches</span>
          </div>

          <div>
            <strong>{player.runs}</strong>
            <span>Runs</span>
          </div>

          <div>
            <strong>{player.wickets}</strong>
            <span>Wickets</span>
          </div>

          <div>
            <strong>{player.centuries}</strong>
            <span>Centuries</span>
          </div>
        </StatsGrid>

        <SectionTitle>About Player</SectionTitle>
        <PlayerDescription>{player.description}</PlayerDescription>
      </PlayerModalWrapper>
    </ModalOverlay>
  );
};

export default PlayerModal;
