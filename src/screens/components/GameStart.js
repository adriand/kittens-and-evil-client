import React, { useState, useEffect } from 'react';
import {
  Button,
  Card
} from 'reactstrap';
import Player from './Player';

export default function GameStart(props) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/games.json`)
      .then(res => res.json())
      .then((data) => {
        setGames(data);
      })
      .catch(console.log)
  },[]);

  const gameList = games.map((game) =>
    <Card key={game.id}>
      <div className="card-body">
        <h5 className="card-title">{game.title}</h5>
        <Button>Join</Button>
      </div>
    </Card>
  );
  
  return(
    <>
      <Player currentPlayer={props.currentPlayer} />
      <h5>Join Game</h5>
      {gameList}
      <br />
      <br />
      <Button>Start New Game</Button>
    </>
  );
}
