import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import Player from './Player';

export default function GameStart(props) {
  return(
    <Player currentPlayer={props.currentPlayer} />
  );
}
