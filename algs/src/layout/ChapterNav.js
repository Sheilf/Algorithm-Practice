

import React, { Component } from 'react';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import '../bootstrap/bootstrap.css'
import './Nav.css';
import {Link} from 'react-router-dom';

class ChapterNav extends Component {

  constructor(props){
    super(props);
    this.state={
     
    }

  }

  componentDidMount(){


    // Collapse on Select
  }



  render() {
    return (

        <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Algorithm UI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About LearnUI</Nav.Link>
            <NavDropdown title="Chapters" id="basic-nav-dropdown">

                <span>Data Structures</span>
                <Nav.Link as={Link} to="/chapters/chapter-1"> I - Arrays &amp; Strings</Nav.Link>
                <Nav.Link as={Link} to="/chapters/chapter-2">II - Linked Lists</Nav.Link>
                <Nav.Link as={Link} to="/chapters/chapter-3">III - Stacks &amp; Queues</Nav.Link>
                <Nav.Link as={Link} to="/chapters/chapter-4">IV - Trees &amp; Graphs</Nav.Link>
                <NavDropdown.Divider />

                <span>Algorithms</span>
                <Nav.Link as={Link} to="/chapters/chapter-5">V - Bit Manipulation</Nav.Link>
                <Nav.Link as={Link} to="/chapters/chapter-6">VI - Math &amp; Logic Puzzles</Nav.Link>
                <Nav.Link as={Link} to="/chapters/chapter-7">VII - OOP</Nav.Link>
                <Nav.Link as={Link} to="/chapters/chapter-8">VIII - Recursion &amp; Dynamic Programming</Nav.Link>
                <Nav.Link as={Link} to="/chapters/chapter-9">IX - System Design &amp; Scalability</Nav.Link>
                <Nav.Link as={Link} to="/chapters/chapter-10">X - Sorting &amp; Searching</Nav.Link>
                <Nav.Link as={Link} to="/chapters/chapter-11">XI - Testing</Nav.Link>
                <NavDropdown.Divider />

                <span>Programming</span>
                <Nav.Link as={Link} to="/chapters/chapter-12">XII - Java</Nav.Link>
                <Nav.Link as={Link} to="/chapters/chapter-13">XIII - Relational Databases</Nav.Link>
                <Nav.Link as={Link} to="/chapters/chapter-14">XIV - Threads &amp; Locks</Nav.Link>
                <NavDropdown.Divider />
                
                <span>Deep Knowledge</span>
                <Nav.Link as={Link} to="/chapters/chapter-15">XV - Advanced Topics</Nav.Link> 


             
            </NavDropdown>
            </Nav>
 
        </Navbar.Collapse>
        </Navbar>
   
    );
  }
}

export default ChapterNav;

