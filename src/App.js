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
  Col,
  Jumbotron
} from 'reactstrap';
import Game from "./screens/Game";
import NoticeBoard from "./components/NoticeBoard";
import DevStatus from "./components/DevStatus";

export default function App() {
  // menu
  const [isOpen, setIsOpen] = useState(false);
  const [notice, setNotice] = useState({message: null, color: null});

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Navbar color="inverse" light expand="md">
        <NavbarBrand href="/">Kittens &amp; Evil</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Who Knows</NavLink>
            </NavItem>
            <NavItem>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <NoticeBoard notice={notice} />
              <Game setNotice={setNotice} />
              <br />
              <DevStatus
                environment={process.env.NODE_ENV}
                api_location={process.env.REACT_APP_API_URL}
                token={localStorage.getItem("token")}
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}
