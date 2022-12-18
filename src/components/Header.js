import React from "react";

function Header({ isDarkMode, setIsDarkMode}) {
    function onDarkModeClick() {
        setIsDarkMode((isDarkMode) => !isDarkMode);
      }

    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </header>
    )
};

export default Header;