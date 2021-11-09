import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import './App.css';

export default function Header() {
  return (
    <Navbar bg="white" expand="lg" className="border border-bottom-3">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
        rel="stylesheet"
      />
      <Container className="p-3 bg-white">
        <NavLink to="/" className="h2 text-decoration-none text-dark me-5 fw-bold">
          <img src={logo} alt="logo" className="logo" />
          Space Traveler&apos;s Hub
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto m-2 my-lg-0"
            navbarScroll
          >
            <NavLink to="/" className="h5 me-4 link text-decoration-none">Rockets</NavLink>
            <NavLink to="missions" className="h5 me-4 link text-decoration-none">Missions</NavLink>
            <NavLink to="profile" className="h5 me-4 link text-decoration-none">My Profile</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
