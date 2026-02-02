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
                {data.map((item,index)=>
                <li key={index}>{item.link}</li>
                )}
            </ul>
        </nav>
        <button>{item.btn}</button>
    </div>
    
    )}
    </div>
  );
}

export default Header;
