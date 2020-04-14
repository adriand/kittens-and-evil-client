import React, { useState } from 'react';
import {
  Alert
} from 'reactstrap';

export default function DevStatus(props) {
  const clearToken = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
  }

  return (
    <div id="dev_status">
      Running in <strong>{props.environment}</strong><br />
      API is at <strong>{props.api_location}</strong><br />
      Token is <strong>{props.token || "EMPTY"}</strong>
      &nbsp;
      <a href="#" onClick={clearToken}>Clear</a>
    </div>
  )
}
