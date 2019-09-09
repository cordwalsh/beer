import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Keg List</h1>
      <Link to="/">Home</Link> | <Link to="/newkeg">Add a keg</Link>
    </div>
  );
}

export default Header;
