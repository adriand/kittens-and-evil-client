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
  Jumbotron,
  Card
} from 'reactstrap';
import Game from "./screens/Game";

export default function App() {
  // menu
  const [isOpen, setIsOpen] = useState(false);

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
              <Game />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}
