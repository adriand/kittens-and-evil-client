import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export default function PlayerForm(props) {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== '') {

      fetch(`${process.env.REACT_APP_API_URL}/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "player": {
            "name": value
          }
        })
      })
      .then(resp => resp.json())
      .then(player => {
        console.log(player);
        props.capturePlayer(player);
      });
    } else {
      alert("Please enter your name.");
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">
          Player Name
          <Input type="text" value={value} onChange={e => setValue(e.target.value)} />
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}
