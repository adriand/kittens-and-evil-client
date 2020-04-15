import React from 'react';
import PlayerForm from "./components/PlayerForm"
import GameStart from "./components/GameStart"

export default function GameSetup(props) {
  if (props.currentPlayer) {
    return <GameStart currentPlayer={props.currentPlayer}></GameStart>
  } else {
    return <PlayerForm capturePlayer={props.capturePlayer} setNotice={props.setNotice} />;
  }
}
