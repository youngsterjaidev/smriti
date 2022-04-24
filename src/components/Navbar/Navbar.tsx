import React from 'react';
import { useLocation } from '@reach/router';
import './Navbar.css';

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <a href="/home" className={location.pathname === '' ? '' : 'active'}>
            Home
          </a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/help">Help</a>
        </li>
      </ul>
      <form>
        <input type="search" placeholder="Search" />
        <button type="button">Search</button>
      </form>
    </nav>
  );
};
