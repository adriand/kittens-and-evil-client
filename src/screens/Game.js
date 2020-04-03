import React, { useState } from 'react';

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
    alert('rendering GameSetup with currentPlayer ' + this.state.currentPlayer);
    return(
      <GameSetup
        currentPlayer={currentPlayer}
        recordPlayerName={recordPlayerName}>
      </GameSetup>
    );
  }
}
