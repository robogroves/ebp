// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

//import styles from '../css/home.css';

import { Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron,Button} from 'react-bootstrap';
import {Header as NavbarHeader, Brand as NavbarBrand, Toggle as NavbarToggle, Collapse as NavbarCollapse, Text as NavbarText } from 'react-bootstrap/lib/Navbar'


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
     // loading: false
    };
  }

  render() {

  var jumboTronTxt;
  jumboTronTxt=
    jumboTronTxt=
      <Row >
        <Col >
          <Jumbotron style={{marginLeft:0,marginRight:0}} >
            <h1 style={{textAlign: 'center',marginTop:15,marginBottom:0}}>Busche Production Software</h1>
            <p style={{textAlign: 'center'}}><strong>Description:{" "}</strong>Please choose from one of the activities listed below.</p>
            <br/>
          </Jumbotron>
        </Col>
      </Row>
  //className="text-success"

  var gridMenu;
  gridMenu =
  <div>
    <Row>
      <Col xs={1}>&nbsp;</Col>
    </Row>
    <Row>
      <Col xs={1}>&nbsp;</Col>
    </Row>
    <Row>
      <Col xs={3}></Col>
      <Col xs={6}>
        <table className="tg">
        <tbody>
          <tr>
              <td className="btnPrimary" onClick={()=>{this.props.port();}}>PO Request Transfer</td>
              <td className="btnSuccess"onClick={()=>{this.props.gr();}}>Generate Receivers</td>
              <td className="btnWarning" onClick={()=>{this.props.counter();}}>Reports</td>
          </tr>
          </tbody>
        </table>
      </Col>
      <Col xs={3}></Col>
    </Row>
  </div>;

  var navbar;
  navbar=
  <Navbar inverse  fixedBottom>
    <NavbarHeader>
      <NavbarBrand>
        <div style={{color: '#33ccff'}}>Busche CNC</div>
      </NavbarBrand>
      <NavbarToggle />
    </NavbarHeader>
    <NavbarCollapse>
      <Nav>
        <LinkContainer to="/POReqTrans">
          <NavItem eventKey={2}>PO Request Transfer</NavItem>
        </LinkContainer>      
        <LinkContainer to="/GenReceivers">
          <NavItem eventKey={1}>Generate Receivers</NavItem>
        </LinkContainer>      
        <LinkContainer to="/counter">
          <NavItem eventKey={1}>Reports</NavItem>
        </LinkContainer>      

      </Nav>
    </NavbarCollapse>
  </Navbar>

    return (
      <div>
        <Grid>
        {jumboTronTxt}
        {gridMenu}
        </Grid>
        {navbar}
      </div>
    );
  }
}
/* new dev
    "dev": "npm run hot-server -- --start-hot",
    "dev": "concurrently --kill-others \"npm run hot-server\" \"npm run start-hot\"",

*/