import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Logo from "../assets/logo.png";

export default class Navi extends Component {
  render() {
    return (
      <Navbar
        className="bg-dark justify-content-between"
        variant="dark"
        fixed="top"
        style={{ height: "50px" }}
      >
        <Navbar.Brand href="https://gokhankaracay.netlify.app/">
          <img
            src={Logo}
            width="100px"
            height="20px"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            style={{ marginTop: "10px", marginLeft: "20px" }}
          />
        </Navbar.Brand>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        ></Navbar.Collapse>
      </Navbar>
    );
  }
}
