import React, { Component } from 'react';
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
  Button,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

import { Game } from "./screens"

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Player>
        <Card>
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.description}</p>
          </div>
        </Card>
      </Player>
    )
  }
}

class GameStart extends React.Component {
  constructor(props) {
    super(props);

  }
}

class GameSetup extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    alert('in game setup and current player is ' + this.props.currentPlayer);
    if (this.props.currentPlayer) {
      return <GameStart />;
    } else {
      return <PlayerForm recordPlayerName = {(name) => this.props.recordPlayerName} />;
    }
  } 
}

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.props.recordPlayerName(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="name">
            Player Name
            <Input type="text" value={this.state.value} onChange={this.handleChange} />
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="inverse" light expand="md">
          <NavbarBrand href="/">Kittens &amp; Evil</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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
}

export default App;
