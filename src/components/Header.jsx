import React from 'react';

function Header() {
  return (
    <header>
      <h1 className='logo'>inspace</h1>
      <ul className='header-list'>
        <li>About</li>
        <li>Events</li>
        <li>Contact Us</li>
      </ul>
      <button className='login-btn'>LOG IN</button>
    </header>
  )
}

export default Header;
