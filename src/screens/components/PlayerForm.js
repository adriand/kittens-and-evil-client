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
      props.recordPlayerName(value);
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
