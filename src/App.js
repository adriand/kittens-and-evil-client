import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col
} from 'reactstrap';
import Game from "./screens/Game";
import NoticeBoard from "./components/NoticeBoard";
import DevStatus from "./components/DevStatus";
import "./App.css";

export default function App() {
  const [notice, setNotice] = useState({message: null, color: null});

  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <NoticeBoard notice={notice} setNotice={setNotice} />
            <Game setNotice={setNotice} />
          </Col>
        </Row>
        <Row>
          <Col>
            <DevStatus
              environment={process.env.NODE_ENV}
              api_location={process.env.REACT_APP_API_URL}
              token={localStorage.getItem("token")}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
