import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #0d47a1;
  color: white;
  padding: 40px 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const FooterSection = styled.div`
  margin-bottom: 20px;
`;

const FooterHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
`;

const FooterLink = styled(Link)`
  color: #bbdefb;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Boogie Board Bungalow</FooterHeading>
          <p>Your perfect beach getaway in Ocean City, NJ</p>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/rooms">Rooms & Amenities</FooterLink>
          <FooterLink to="/attractions">Local Attractions</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Contact</FooterHeading>
          <p>Ocean City, NJ</p>
          <p>For booking inquiries, please contact our rental agents.</p>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Boogie Board Bungalow. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
