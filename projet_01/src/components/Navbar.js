import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
`;

const Logo = styled.h1`
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 1.5rem;
`;

const NavLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
        color: #4CAF50;
    }
`;

function Navbar() {
    return (
        <Nav>
            <Logo>MEULogo</Logo>
            <NavLinks>
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">Sobre</NavLink>
                <NavLink href="#services">Serviços</NavLink>
                <NavLink href="#contact">Contato</NavLink>
            </NavLinks>
        </Nav>
    );
}

export default Navbar;
