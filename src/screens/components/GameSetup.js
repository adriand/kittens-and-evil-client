import React, { useState } from 'react';
import PlayerForm from "./PlayerForm"

export default function GameSetup(props) {

  console.log('in game setup and current player is ' + props.currentPlayer);
  if (props.currentPlayer) {
    // return <GameStart />;
  } else {
    return <PlayerForm recordPlayerName = {(name) => props.recordPlayerName} />;
  }
}
