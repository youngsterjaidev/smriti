import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Help</li>
      </ul>
      <form>
        <input type="search" placeholder="Search" />
        <button type="button">Search</button>
      </form>
    </nav>
  );
};
