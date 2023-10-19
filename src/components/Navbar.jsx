import React from 'react';
import styled from 'styled-components';


function Navbar() {

    const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    background-color: skyblue;

    ul {
        display: flex;
        justify-content: space-between;
        aline-item: center;
        list-style: none;
    }
    
    li {
        margin: 0 1rem; 
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
    }

    `

  return (
    <Header>
        <div>
            <a href='#'>Home</a>
        </div>
        <nav>
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
        </nav>
    </Header>
  );
}

export default Navbar;