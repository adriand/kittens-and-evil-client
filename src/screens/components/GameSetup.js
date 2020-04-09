import React, { useState } from 'react';
import PlayerForm from "./PlayerForm"
import GameStart from "./GameStart"

export default function GameSetup(props) {
  console.log('in game setup and current player is ' + props.currentPlayer);
  if (props.currentPlayer) {
    return <GameStart currentPlayer={props.currentPlayer}></GameStart>
  } else {
    return <PlayerForm recordPlayerName={props.recordPlayerName} />;
  }
}
