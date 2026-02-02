import React from 'react';
import './Header.css'

const Header = ({data}) => {
  return (
    <div>
      {data.map((item,index)=>
    <div key={index} className="header">
        <div className="logo">
        <h1>{item.title}</h1>
        </div>
        <nav>
            <ul>
                <li>{item.link}</li>
            </ul>
        </nav>
        <button>{item.btn}</button>
    </div>
    
    )}
    </div>
  );
}

export default Header;
