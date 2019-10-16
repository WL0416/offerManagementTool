import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = props => {
  return (
    <div id="homepage">
      <Link to="/newton" className="home-button">
        <Button variant="outline-success" size="lg" block>
          Newton
        </Button>
      </Link>
      <Link to="/empire" className="home-button">
        <Button variant="outline-dark" size="lg" block>
          Empire
        </Button>
      </Link>
    </div>
  );
};

export default Home;
