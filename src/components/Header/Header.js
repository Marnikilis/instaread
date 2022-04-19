import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`mainContainer ${styles.container}`}>
          <div>
          <NavLink to='/'>
            <img src='https://instaread.co/images/instaread_logo_grey.svg' className={styles.logo} alt='logo'/>
          </NavLink>
            </div>
          <div>
            <NavLink to='/discover'>Discover</NavLink>
            <NavLink to='/search'>Search</NavLink>
            <NavLink to='/try'>Try Instaread</NavLink>
            <NavLink to='/login'>Login</NavLink>
      </div>
      </div>
    </header>
  );
};

export default Header;