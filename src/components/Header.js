import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import beachImage from '../assets/images/header-beach.jpg'; // Replace with actual image path

const HeaderContainer = styled.header`
  background-image: url(${beachImage});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 60px 20px;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 10px;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 20px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>Boogie Board Bungalow</Title>
        <Subtitle>Your perfect Ocean City, NJ getaway</Subtitle>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
