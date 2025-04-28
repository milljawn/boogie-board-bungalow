import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Nav = styled.nav`
  background-color: ${props => props.scrolled ? 'white' : 'transparent'};
  color: ${props => props.scrolled ? 'var(--dark-color)' : 'white'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  height: 80px;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${props => props.scrolled ? 'var(--primary-color)' : 'white'};
  text-decoration: none;
  font-family: 'Playfair Display', serif;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.scrolled ? 'var(--dark-color)' : 'white'};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: ${props => props.isOpen ? 'flex' : 'none'};
    padding: 20px 0;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.scrolled ? 'var(--dark-color)' : 'white'};
  text-decoration: none;
  margin: 0 15px;
  padding: 10px 0;
  font-weight: 500;
  position: relative;
  transition: color 0.3s;
  
  &:hover {
    color: ${props => props.scrolled ? 'var(--primary-color)' : 'var(--light-color)'};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => props.scrolled ? 'var(--primary-color)' : 'white'};
    transition: width 0.3s;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    color: var(--dark-color);
    padding: 15px 20px;
    width: 100%;
    text-align: center;
    margin: 0;
    
    &::after {
      display: none;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  color: ${props => props.scrolled ? 'var(--dark-color)' : 'white'};
  margin-left: 20px;
  font-weight: 500;
  
  svg {
    margin-right: 5px;
  }
  
  &:hover {
    color: ${props => props.scrolled ? 'var(--primary-color)' : 'var(--light-color)'};
  }
  
  @media (max-width: 768px) {
    color: var(--dark-color);
    margin: 10px 0;
    justify-content: center;
    width: 100%;
  }
`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo to="/" scrolled={scrolled}>BBB</Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)} scrolled={scrolled}>
          <MenuIcon />
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" scrolled={scrolled}>Home</NavLink>
          <NavLink to="/rooms" scrolled={scrolled}>Rooms & Amenities</NavLink>
          <NavLink to="/attractions" scrolled={scrolled}>Local Attractions</NavLink>
          <ContactInfo>
            <ContactLink href="tel:+1234567890" scrolled={scrolled}>
              <PhoneIcon fontSize="small" /> (123) 456-7890
            </ContactLink>
            <ContactLink href="mailto:info@boogieboardbungalow.com" scrolled={scrolled}>
              <EmailIcon fontSize="small" /> Book Now
            </ContactLink>
          </ContactInfo>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navigation;