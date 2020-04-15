import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle
} from 'reactstrap';

export default function Player(props) {
  return (
    <Card>
      <CardBody>
        <CardTitle>{props.currentPlayer.name}</CardTitle>
        <CardSubtitle>{props.currentPlayer.description}</CardSubtitle>
        <CardText>
          <p>Gender: {props.currentPlayer.gender}</p>
          <p>Health: {props.currentPlayer.health}</p>
          <p>Wealth: {props.currentPlayer.wealth}</p>
          <p>Age: {props.currentPlayer.age}</p>
        </CardText>
      </CardBody>
    </Card>
  )
}
