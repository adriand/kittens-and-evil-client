import React, { useState } from 'react';
import {
  Alert
} from 'reactstrap';

export default function NoticeBoard(props) {
  if (props.notice.message) {
    return (
      <div>
        <Alert color={props.notice.color}>
          {props.notice.message}
        </Alert>
      </div>
    );
  } else {
    return(<></>);
  }
}
