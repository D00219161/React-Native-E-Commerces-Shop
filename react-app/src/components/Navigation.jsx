import React, { Component } from 'react';
import { Nav, Navbar, FormControl, Form, Button} from 'react-bootstrap';
import ViewCart from './ViewCart';
import StripeCheckout from './Stripe';

class NavMenu extends Component {

  render() {
    return (
      <Navbar>
    <Navbar.Brand><img src="http://icons.iconarchive.com/icons/icondrawer/winter-holiday/128/xmas-tree-icon.png"/>
    The Christmas Shop<img src="https://st2.cannypic.com/thumbs/19/197041_352_canny_pic.png"/></Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="index.js">Home</Nav.Link>
      <Nav.Link href="#features">Videos</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <ViewCart cart={this.props.cart} />
    </Form>
    <StripeCheckout />
  </Navbar>

    );
    
  }

}

export default NavMenu;