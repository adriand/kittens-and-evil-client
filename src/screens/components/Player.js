import React, { useState } from 'react';
import {
  Card
} from 'reactstrap';

export default function Player(props) {
  return (
    <Card>
      <div className="card-body">
        <h5 className="card-title">{props.currentPlayer}</h5>
        <p className="card-text">A dirty, weather-beaten man with scraggly dark hair.</p>
      </div>
    </Card>
  )
}
