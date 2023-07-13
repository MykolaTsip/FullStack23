import React from 'react';
import './App.css';

import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <Link to="/" data-testid="home"> HOME </Link>
        <Link to="/posts" data-testid="post"> MY Posts </Link>

      </div>
      <Outlet/>
    </div>
  );
}

export default App;
