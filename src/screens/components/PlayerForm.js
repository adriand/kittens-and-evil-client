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
  const recordPlayerName = props.recordPlayerName;

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('A name was submitted: ' + value);
    recordPlayerName(value);
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
