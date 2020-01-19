import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding, weekday } = props;

  return (
    <Navbar bg="dark" variant="dark" justify-content-between="true">
      <>
        <Navbar.Brand>
          <span className="brand">{branding}</span>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            HOME
          </Link>
          <Link to="/newton" className="nav-link">
            Newton
          </Link>
          <Link to="/empire" className="nav-link">
            Empire
          </Link>
        </Nav>
      </>
      <>
        <Navbar.Text>{weekday}</Navbar.Text>
      </>
    </Navbar>
  );
};

Header.defaultProps = {
  branding: "Offer Management Tool"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
