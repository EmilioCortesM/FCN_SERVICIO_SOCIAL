import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { animate, inView } from "motion";

import "./Navigation.css";
function Navigation() {
  return (
    <Navbar sticky="top" className="main_Navbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand
          id="logo"
          href="#home"
          onMouseEnter={() => {
            animate("#logo", { scale: 0.8 });
          }}
          onMouseLeave={() => {
            animate("#logo", { scale: 1 });
          }}
        >
          <img className="logo_img" src="logo_circulo.png" alt="Not found" />{" "}
          Ciencia UAQ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="links" className="ms-auto">
            <Nav.Link
              id="Inicio"
              onMouseEnter={() => {
                animate("#Inicio", { scale: 0.8 });
              }}
              onMouseLeave={() => {
                animate("#Inicio", { scale: 1 });
              }}
              href="#home"
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              id="About_us"
              onMouseEnter={() => {
                animate("#About_us", { scale: 0.8 });
              }}
              onMouseLeave={() => {
                animate("#About_us", { scale: 1 });
              }}
              href="#link"
            >
              ¿Quiénes Somos?
            </Nav.Link>
            <NavDropdown
              title="Nuestro Trabajo"
              id="basic-nav-dropdown"
              className="our_work"
              onMouseEnter={() => {
                animate(".our_work", { scale: 0.8 });
              }}
              onMouseLeave={() => {
                animate(".our_work", { scale: 1 });
              }}
            >
              <NavDropdown.Item href="#action/3.1">
                {" "}
                Realidad Aumentada
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Realidad Mixta
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Realidad Virtual
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">
                Fotografía y video 360°
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Modelaje e impresion 3D
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Charlas y talleres
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="Projects"
              onMouseEnter={() => {
                animate(".Projects", { scale: 0.8 });
              }}
              onMouseLeave={() => {
                animate(".Projects", { scale: 1 });
              }}
              title="Proyectos"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#">Programa De Radio</NavDropdown.Item>
              <NavDropdown.Item href="#">Noche de estrellas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
