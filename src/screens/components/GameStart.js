import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export default function GameStart(props) {
  return(
    <>
      Hello, {props.currentPlayer}!
    </>
  );
}
