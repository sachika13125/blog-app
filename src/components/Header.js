import React from 'react';

function Header() {
    return (
        <header>
            <div className='logo'>
                <a href='/'>Logo</a>
            </div>
            <nav>
                <ul>
                    <li><a href='/favorites'>Favorites</a></li>
                    <li><a href='/login'>LogIn</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;