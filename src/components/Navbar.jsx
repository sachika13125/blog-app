import React from 'react';

function Navbar() {
  return (
    <div>

        <ul>
            <li>
                <a href='/'>Feeds</a>
            </li>
            <li>
                <a href='/favorites'>Favorites</a>
            </li>
            <li>
                <a href='/login'>LogIn</a>
            </li>
        </ul>
    </div>
  );
}

export default Navbar;