import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import sidebarIcon from "../../assets/sidebarOpen.svg";

const Header = props => {
  const handleSidebarOpenClick = () => {};
  return (
    <header>
      <div className="sidebarIcon">
        <button onClick={handleSidebarOpenClick}>
          <img src={sidebarIcon} alt="Open Sidebar" />
        </button>
      </div>
      <div className="appTitle">
        <h1>Movie Library</h1>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
