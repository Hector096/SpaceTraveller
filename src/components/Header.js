import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './App.css';

export default function Header() {
  return (
    <Navbar bg="white" expand="lg" className="border border-bottom-3">
      <Container className="p-3 bg-white">
        <NavLink to="/" className="h2 text-decoration-none text-dark me-5 fw-bold">Space Traveler&apos;s Hub</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto m-2 my-lg-0"
            navbarScroll
          >
            <NavLink to="/" className="h5 me-4 link text-decoration-none" activeClassName="link-active">Rockets</NavLink>
            <NavLink to="missions" className="h5 me-4 link text-decoration-none" activeClassName="link-active">Missions</NavLink>
            <NavLink to="profile" className="h5 me-4 link text-decoration-none" activeClassName="link-active">My Profile</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}