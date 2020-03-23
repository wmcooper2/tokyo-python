import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return <img id="logo" src="placeholder.jpeg" alt="Logo"></img>;
};

const Header = () => {
  return (
    <header>
      <Logo />
      <ol>
        <Link to="/">Home</Link>
      </ol>
      <ol>
        <Link to="/regexes">Regexes</Link>
      </ol>
      <ol>
        <Link to="/javascript">Javascript</Link>
      </ol>
    </header>
  );
};

export default Header;
