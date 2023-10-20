import React, { useState} from 'react';
import styled from 'styled-components';


function Navbar() {

    const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    background-color: skyblue;
    position: relative;

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
        color: black;
        font-size: 1.2rem;
    }

    button {
        display: none;
    }

    @media (max-width: 768px) {
        flex-directon: column;
        align-items: flex-start;


        ul {
            flex-direction: column;
            align-items: flex-start;
            display: ${({ mobileMenuOpen }) => (mobileMenuOpen ? 'flex' : 'none')};
            position: absolute;
            top: 4rem;
            background-color: skyblue; 
            width: 100%;
            padding: 1rem;
            z-index: 1; 
        }

        li {
            margin: 1rem 0;
        }

        a {
            font-size: 1.5rem;
        }

        button {
            display: block;
            cursor: pointer;
            width: 4rem;
            height: 100%;
            font-size: 2rem;
        }
    }
    `;

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

  return (
    <Header mobileMenuOpen={mobileMenuOpen}>
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
        <button onClick={toggleMobileMenu}>☰</button>
    </Header>
  );
}

export default Navbar;