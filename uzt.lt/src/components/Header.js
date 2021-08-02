import React from 'react'

const Header = () => {
    let logo = "";	
    return(<div className="Header-container">
      <header className="Header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Header-logo">
       		 Logo  
        </div>
        <a
          className="App-link"
          href="https://uzt.lt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Uzt.lt
        </a>
      </header>
    </div>);
};		

export default Header;

