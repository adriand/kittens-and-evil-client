import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export default function PlayerForm(props) {
  const [nameValue, setNameValue] = useState('');
  const [genderValue, setGenderValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameValue !== '' && genderValue !== '') {

      fetch(`${process.env.REACT_APP_API_URL}/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "player": {
            "name": nameValue,
            "gender": genderValue
          }
        })
      })
      .then(resp => resp.json())
      .then(player => {
        props.capturePlayer(player);
      })
      .catch((err) => {props.setNotice({message: `${err}`, color: "danger"})});
    } else {
      alert("Please enter a name and gender.");
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">
          Enter your name
          <Input type="text" value={nameValue} onChange={e => setNameValue(e.target.value)} />
        </Label>
      </FormGroup>
      <FormGroup tag="fieldset">
        <Label>
          Choose your gender
        </Label>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="gender" onChange={e => setGenderValue("f")} />
            Female
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="gender" onChange={e => setGenderValue("m")} />
            Male
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="gender" onChange={e => setGenderValue("x")} />
            X
          </Label>
        </FormGroup>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}
