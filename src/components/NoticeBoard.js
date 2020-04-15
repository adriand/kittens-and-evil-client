import React from 'react';
import {
  Alert,
  Fade
} from 'reactstrap';

export default function NoticeBoard(props) {
  if (props.notice.message) {

    setTimeout(() => {
      // clear self by calling parent's setNotice
      props.setNotice({ message: null, color: null });
    }, 3000);

    return (
      <Fade in={true}>
        <Alert color={props.notice.color}>
          {props.notice.message}
        </Alert>
      </Fade>
    );
  } else {
    return(<></>);
  }
}
