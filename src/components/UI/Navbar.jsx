import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from './MyButton';
import { AuthContext } from '../../context';


const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }

    return (
      <div className="navbar">
        <MyButton onClick={logout} >
          LOG OUT
        </MyButton>
        <div className="navbar__links">
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>   
          <Link to="/bonus">ProgressBar</Link> 
        </div>
      </div>
  );
};

export default Navbar;
