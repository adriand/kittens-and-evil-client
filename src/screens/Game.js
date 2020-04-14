import React, { useState, useEffect } from 'react';
import GameSetup from './GameSetup';
import Board from './Board';

export default function Game(props) {
  const [otherPlayers, setOtherPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const capturePlayer = (player) => {
    setCurrentPlayer(player);
    localStorage.setItem("token", player.token);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!currentPlayer && token) {
      fetch(`${process.env.REACT_APP_API_URL}/players/fetch_with_token.json?token=${token}`)
        .then(res => res.json())
        .then((data) => {
          setCurrentPlayer(data);
        })
        .catch((err) => {props.setNotice({message: `${err}`, color: "danger"})})
    }
  },[]);

  if (gameStarted) {
    return(
      <Board currentPlayer={currentPlayer}></Board>
    );
  } else {
    return(
      <GameSetup
        currentPlayer={currentPlayer}
        capturePlayer={capturePlayer}>
      </GameSetup>
    );
  }
}
