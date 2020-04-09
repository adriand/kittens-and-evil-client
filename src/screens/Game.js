import React, { useState } from 'react';
import GameSetup from './components/GameSetup';

export default function Game() {
  const [otherPlayers, setOtherPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const recordPlayerName = (name) => {
    alert('in game and name is ' + name);
    setCurrentPlayer(name);
  }

  if (gameStarted) {
    return <div>render the game board</div>
  } else {
    console.log('rendering GameSetup with currentPlayer ' + currentPlayer);
    return(
      <GameSetup
        currentPlayer={currentPlayer}
        recordPlayerName={recordPlayerName}>
      </GameSetup>
    );
  }
}
