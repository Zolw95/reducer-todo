import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>{title}</h1>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Todo List",
};

export default Navbar;
