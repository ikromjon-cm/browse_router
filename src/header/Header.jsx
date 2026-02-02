import React from 'react';

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
    </div>
    
    )}
    </div>
  );
}

export default Header;
