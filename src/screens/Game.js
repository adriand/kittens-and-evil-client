import React, { useState } from 'react';
import GameSetup from './GameSetup';
import Board from './Board';

export default function Game() {
  const [otherPlayers, setOtherPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const recordPlayerName = (name) => {
    setCurrentPlayer(name);
  }

  if (gameStarted) {
    return(
      <Board currentPlayer={currentPlayer}></Board>
    );
  } else {
    return(
      <GameSetup
        currentPlayer={currentPlayer}
        recordPlayerName={recordPlayerName}>
      </GameSetup>
    );
  }
}
