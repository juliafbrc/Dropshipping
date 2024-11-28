import React from 'react';
import './index.css';

const Container: React.FC = () => {
  return (

    <div className="container">

        <nav className="navbar">
        <div className="navbar-left">
          <div className="user-avatar"></div>
          <span className="navbar-title">LOREM IPSUM</span>
        </div>
        <div className="navbar-right">
          <div className="icon-rounded"></div>
        </div>
      </nav>
        
      <p>Este é um contêiner com as propriedades fornecidas.</p>
    </div>
  );
};

export default Container;
