import React, { useState } from 'react';
import {
  Card
} from 'reactstrap';

export default function Player(props) {
  return (
    <Card>
      <div className="card-body">
        <h5 className="card-title">{props.currentPlayer.name}</h5>
        <p className="card-text">{props.currentPlayer.description}</p>
      </div>
    </Card>
  )
}
