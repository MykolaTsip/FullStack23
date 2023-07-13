import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {NavLink, Link, Outlet, useLocation, useNavigate} from 'react-router-dom'

function App() {
  const location = useLocation();
  const navigate = useNavigate()

  const goToP = () => {
    // location.push('/post-of-user');
    // navigate('/post-of-user');
    // window.location = '/post-of-user';
  }

  return (
    <div>
      <NavLink className={({isActive}) => isActive ? 'link active' : 'link'} to='/'> Home page </NavLink>
      <NavLink className={({isActive}) => isActive ? 'link active' : 'link'} to="users">Users page</NavLink>
      <NavLink className={({isActive}) => isActive ? 'link active' : 'link'} to="posts">Posts page</NavLink>

      <div className="link active" onClick={goToP}> PostsOfUser </div>


      <div className='content'>
          <Outlet/>
      </div>
    </div>
  );
}

export default App;
