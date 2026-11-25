import React from "react";

import {
  PlayerCardWrapper,
  PlayerImage,
  JerseyNumber,
  PlayerInfo,
  PlayerRole,
} from "../styles/players.style";

const PlayerCard = ({ player, onClick }) => {
  return (
    <PlayerCardWrapper onClick={onClick}>
      <PlayerImage>
        <img src={player.photo} alt={player.name} />

        <JerseyNumber>#{player.jerseyNumber}</JerseyNumber>
      </PlayerImage>

      <PlayerInfo>
        <h3>{player.name}</h3>
        <p>📍 {player.city}</p>

        <PlayerRole>{player.role}</PlayerRole>
      </PlayerInfo>
    </PlayerCardWrapper>
  );
};

export default PlayerCard;
