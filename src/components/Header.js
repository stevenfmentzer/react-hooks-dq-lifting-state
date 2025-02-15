import React from "react";
import Menu from "./Menu";

function Header( {darkMode, toggleDarkMode}) {

  return (
    <div onClick={toggleDarkMode} className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu />
      </div>
    </div>
  );
}

export default Header;
