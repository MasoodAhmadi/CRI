import React, { useState } from "react";

import players from "../data/players";
import PlayerCard from "./playercard";
import PlayerModal from "./playermodal";

import {
  SquadContainer,
  SquadHeader,
  SquadCount,
  PlayersGrid,
} from "../styles/players.style";

const CricketSquad = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <SquadContainer>
      <SquadHeader>
        <div>
          <h1>Our Cricket Squad</h1>
          <p>Meet the players representing our team.</p>
        </div>

        <SquadCount>{players.length} Players</SquadCount>
      </SquadHeader>

      <PlayersGrid>
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onClick={() => setSelectedPlayer(player)}
          />
        ))}
      </PlayersGrid>

      <PlayerModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
      />
    </SquadContainer>
  );
};

export default CricketSquad;
