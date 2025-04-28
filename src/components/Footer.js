\import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const FooterContainer = styled.footer`
  background-color: var(--dark-color);
  color: white;
  padding: 80px 0 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const FooterSection = styled.div`
  margin-bottom: 30px;
`;

const LogoSection = styled(FooterSection)``;

const Logo = styled.h3`
  font-size: 1.8rem;
  font-family: 'Playfair Display', serif;
  margin-bottom: 20px;
`;

const FooterDescription = styled.p`
  color: #bbb;
  line-height: 1.7;
  margin-bottom: 25px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const FooterHeading = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 15px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--primary-color);
  }
`;

const FooterLink = styled(Link)`
  color: #bbb;
  text-decoration: none;
  display: block;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    transform: translateX(5px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: flex-start;
`;

const ContactIcon = styled.div`
  margin-right: 15px;
  color: var(--primary-color);
`;

const ContactText = styled.p`
  color: #bbb;
  line-height: 1.6;
`;

const NewsletterForm = styled.form`
  margin-top: 20px;
`;

const NewsletterInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  color: white;
  margin-bottom: 15px;
  
  &::placeholder {
    color: #bbb;
  }
`;

const NewsletterButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding: 25px 0;
  margin-top: 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #bbb;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <Logo>Boogie Board Bungalow</Logo>
          <FooterDescription>
            Your perfect luxury beach house rental in Ocean City, NJ. Experience comfort, convenience, and unforgettable moments with family and friends.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </SocialLink>
          </SocialLinks>
        </LogoSection>
        
        <FooterSection>
          <FooterHeading>Useful Links</FooterHeading>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/rooms">Rooms & Amenities</FooterLink>
          <FooterLink to="/attractions">Local Attractions</FooterLink>
          <FooterLink to="/">Booking Information</FooterLink>
          <FooterLink to="/">Reviews</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Contact Us</FooterHeading>
          <ContactItem>
            <ContactIcon>
              <LocationOnIcon />
            </ContactIcon>
            <ContactText>
              Ocean City, New Jersey, USA
            </ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <PhoneIcon />
            </ContactIcon>
            <ContactText>
              +1 (123) 456-7890
            </ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <EmailIcon />
            </ContactIcon>
            <ContactText>
              info@boogieboardbungalow.com
            </ContactText>
          </ContactItem>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Newsletter</FooterHeading>
          <FooterDescription>
            Subscribe to our newsletter to receive special offers and updates on our beach house rental.
          </FooterDescription>
          <NewsletterForm>
            <NewsletterInput type="email" placeholder="Your Email Address" />
            <NewsletterButton type="submit">Subscribe</NewsletterButton>
          </NewsletterForm>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Boogie Board Bungalow. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;