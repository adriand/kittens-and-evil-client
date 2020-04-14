import React, { useState } from 'react';
import {
  Alert
} from 'reactstrap';

export default function DevStatus(props) {
  return (
    <div>
      <small>
        Running in <strong>{props.environment}</strong><br />
        API is at <strong>{props.api_location}</strong><br />
        Token is <strong>{props.token}</strong>
      </small>
    </div>
  )
}
