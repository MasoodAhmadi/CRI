import PlayerCard from "../components/playercard";
import React, { useState, useEffect } from "react";
import PlayerModal from "../components/playermodal";
import { SquadCount, PlayersGrid } from "../styles/players.style";
import { SquadContainer, SquadHeader } from "../styles/players.style";

const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL ||
  import.meta.env.VITE_BACKEND_URL_3 ||
  import.meta.env.VITE_BACKEND_URL_2 ||
  "no backend service working!";

const PlayersPage = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPlayers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_BASE_URL}/api/players`);

      if (!response.ok) {
        throw new Error("Failed to fetch players");
      }

      const result = await response.json();

      if (result.success) {
        const approvedPlayers = (result.data || []).filter(
          (player) => player.status === "Approved",
        );

        setPlayers(approvedPlayers);
      } else {
        throw new Error(result.message || "Could not load players");
      }
    } catch (err) {
      console.error("Player fetch error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <SquadContainer>
      <SquadHeader>
        <div>
          <h1>Our Cricket Squad</h1>
          <p>Meet the players representing our team.</p>
        </div>

        <SquadCount>{players.length} Players</SquadCount>
      </SquadHeader>

      {loading ? (
        <p>Loading players...</p>
      ) : error ? (
        <p>{error}</p>
      ) : players.length === 0 ? (
        <p>No approved players found.</p>
      ) : (
        <PlayersGrid>
          {players.map((player) => (
            <PlayerCard
              key={player._id}
              player={player}
              onClick={() => setSelectedPlayer(player)}
            />
          ))}
        </PlayersGrid>
      )}

      <PlayerModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
      />
    </SquadContainer>
  );
};

export default PlayersPage;
