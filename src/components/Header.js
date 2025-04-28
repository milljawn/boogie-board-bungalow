import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import beachImage from '../assets/images/header-beach.jpg'; // Make sure you have this image

const HeaderContainer = styled.header`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${beachImage});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 180px 20px 120px;
  text-align: center;
  position: relative;
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 40px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 14px 28px;
  background-color: ${props => props.primary ? 'var(--primary-color)' : 'transparent'};
  color: white;
  border: 2px solid ${props => props.primary ? 'var(--primary-color)' : 'white'};
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.primary ? 'var(--secondary-color)' : 'rgba(255, 255, 255, 0.1)'};
    border-color: ${props => props.primary ? 'var(--secondary-color)' : 'white'};
    transform: translateY(-3px);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>Boogie Board Bungalow</Title>
        <Subtitle>Your perfect luxury beach getaway in Ocean City, NJ</Subtitle>
        <ButtonGroup>
          <Button to="/rooms" primary>Explore Our Rooms</Button>
          <Button to="/attractions">Local Attractions</Button>
        </ButtonGroup>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;