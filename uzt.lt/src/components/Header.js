import React from "react";

const Header = () => {
  let logo = "";
  return (
    <div classNameName="Header-container">
      <header classNameName="Header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <div classNameName="Header-logo">Logo</div>
        <a
          classNameName="App-link"
          href="https://uzt.lt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Uzt.lt
        </a>
      </header>
    </div>
  );
};

export default Header;
