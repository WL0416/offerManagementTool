import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding, weekday } = props;

  return (
    <Navbar bg="dark" variant="dark" justify-content-between>
      <>
        <Navbar.Brand>
          <span className="brand">{branding}</span>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">HOME</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/newton">Newton</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/empire">Empire</Link>
          </Nav.Link>
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
