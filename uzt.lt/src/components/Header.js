import React from "react";

const Header = () => {
  let logo = "";
  return (
    <header className="App-header">
    <div className="Header-container">
 
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Header-logo">Logo [ ] </div>
        <a
          className="App-link"
          href="https://uzt.lt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Uzt.lt
        </a>
 

    </div>
    </header>
  );
};

export default Header;
