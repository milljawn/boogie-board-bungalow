import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = styled.nav`
  background-color: #1565c0;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  height: 60px;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: #1565c0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: ${props => props.isOpen ? 'flex' : 'none'};
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  padding: 20px 0;
  font-weight: 500;
  transition: color 0.3s;
  
  &:hover {
    color: #bbdefb;
  }
  
  @media (max-width: 768px) {
    padding: 15px 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">BBB</Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/rooms">Rooms & Amenities</NavLink>
          <NavLink to="/attractions">Local Attractions</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navigation;
