import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './App.css';

export default function Header() {
  return (
    <Navbar bg="white" expand="lg" className="border border-bottom-3">
      <Container className="p-3 bg-white">
        <NavLink to="/" className="h2 text-decoration-none text-dark me-5 fw-bold d-flex">
          <img src={logo} alt="logo" className="logo" />
          Space Traveler&apos;s Hub
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-lg-auto m-2 my-lg-0"
            navbarScroll
          >
            <NavLink exact to="/" className="h5 me-4 NavLink text-decoration-none" activeClassName="NavLink-active">Rockets</NavLink>
            <NavLink to="missions" className="h5 me-4 NavLink text-decoration-none" activeClassName="NavLink-active">Missions</NavLink>
            <NavLink to="profile" className="h5 me-4 NavLink text-decoration-none" activeClassName="link-active">My Profile</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
