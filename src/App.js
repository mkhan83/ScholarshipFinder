import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { Navbar, Nav, NavItem, Jumbotron, NavDropdown, Button, ListGroupItem, ListGroup, MenuItem, FormGroup, FormControl } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      scholarships: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.search(this.state.value);
    event.preventDefault();
  }

  search(text) {
    var ref = firebase.database().ref(text);
    ref.once('value', snapshot => {
      this.setState({
        scholarships: snapshot.val()
      })
    })
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {

    const results = this.state.scholarships;
    var listItems = [];
    if (results) {
      listItems = results.map((scholarship) =>
        <ListGroupItem>
          {scholarship.title}
          <div>
            {scholarship.amount}
          </div>
          <div>
            {scholarship.description}
          </div>
          <div>
            <a href={scholarship.link}>{scholarship.link}</a>
          </div>
        </ListGroupItem>

      );
    }
    return (
      <div className="App">
        <Navbar>
          <Nav bsStyle="tabs">
            <NavItem eventKey={1} href="#">About</NavItem>
            <NavItem eventKey={2} href="#">Services</NavItem>
            <NavItem eventKey={3} href="#">Portfolio</NavItem>
          </Nav>
        </Navbar>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Scholarship Finder</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft >
              <form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <FormControl type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
                </FormGroup>
                {' '}
                <Button type="submit" value="Submit">Submit</Button>
              </form>
            </Navbar.Form>

          </Navbar.Collapse>
        </Navbar>
        <ListGroup>{listItems}</ListGroup>
      </div >
    );
  }
}

export default App;