import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import exteriorImage from '../assets/images/exterior.jpg'; // Replace with actual path
import livingRoomImage from '../assets/images/living-room.jpg'; // Replace with actual path
import kitchenImage from '../assets/images/kitchen.jpg'; // Replace with actual path

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 60px;
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #0d47a1;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 30px;
  color: #424242;
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: #1565c0;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0d47a1;
  }
`;

const FeaturesSection = styled.section`
  margin-bottom: 60px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const FeatureContent = styled.div`
  padding: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #0d47a1;
`;

const FeatureText = styled.p`
  color: #616161;
  margin-bottom: 15px;
`;

const HighlightsSection = styled.section`
  background-color: #f5f5f5;
  padding: 60px 20px;
  margin: 0 -20px;
`;

const HighlightsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HighlightsTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
  color: #0d47a1;
`;

const HighlightsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
`;

const HighlightItem = styled.li`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const HighlightTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #1565c0;
`;

const HighlightText = styled.p`
  color: #616161;
  flex-grow: 1;
`;

function Home() {
  return (
    <div>
      <HomeContainer>
        <HeroSection>
          <HeroTitle>Welcome to Boogie Board Bungalow</HeroTitle>
          <HeroText>
            Experience the perfect beach getaway in Ocean City, NJ. Our spacious, comfortable beach house offers everything you need for an unforgettable vacation, just steps away from the beach and boardwalk.
          </HeroText>
          <Button to="/rooms">Explore Our Rooms</Button>
        </HeroSection>
        
        <FeaturesSection>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureImage src={exteriorImage} alt="Boogie Board Bungalow Exterior" />
              <FeatureContent>
                <FeatureTitle>Perfect Location</FeatureTitle>
                <FeatureText>
                  Ideally situated in Ocean City, NJ, just a short walk to the beach and boardwalk.
                </FeatureText>
              </FeatureContent>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureImage src={livingRoomImage} alt="Comfortable Living Space" />
              <FeatureContent>
                <FeatureTitle>Comfortable & Spacious</FeatureTitle>
                <FeatureText>
                  Enjoy our open floor plan with plenty of room for the whole family to relax.
                </FeatureText>
              </FeatureContent>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureImage src={kitchenImage} alt="Modern Kitchen" />
              <FeatureContent>
                <FeatureTitle>Modern Amenities</FeatureTitle>
                <FeatureText>
                  Fully equipped kitchen, WiFi, outdoor shower, and everything you need for a perfect stay.
                </FeatureText>
              </FeatureContent>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesSection>
      </HomeContainer>
      
      <HighlightsSection>
        <HighlightsContainer>
          <HighlightsTitle>Property Highlights</HighlightsTitle>
          <HighlightsList>
            <HighlightItem>
              <HighlightTitle>Bedrooms & Space</HighlightTitle>
              <HighlightText>
                4 bedrooms with comfortable sleeping arrangements for up to 10 people.
              </HighlightText>
            </HighlightItem>
            
            <HighlightItem>
              <HighlightTitle>Beach Access</HighlightTitle>
              <HighlightText>
                Just a short walk to the beach and boardwalk with nearby amenities.
              </HighlightText>
            </HighlightItem>
            
            <HighlightItem>
              <HighlightTitle>Outdoor Space</HighlightTitle>
              <HighlightText>
                Enjoy the outdoor shower and deck area for relaxing after a day at the beach.
              </HighlightText>
            </HighlightItem>
            
            <HighlightItem>
              <HighlightTitle>Family Friendly</HighlightTitle>
              <HighlightText>
                Perfect for families with children, with nearby playgrounds and safe beaches.
              </HighlightText>
            </HighlightItem>
            
            <HighlightItem>
              <HighlightTitle>Kitchen & Dining</HighlightTitle>
              <HighlightText>
                Fully equipped modern kitchen with dining area for family meals.
              </HighlightText>
            </HighlightItem>
            
            <HighlightItem>
              <HighlightTitle>Entertainment</HighlightTitle>
              <HighlightText>
                Smart TVs, WiFi, and board games for entertainment during your stay.
              </HighlightText>
            </HighlightItem>
          </HighlightsList>
        </HighlightsContainer>
      </HighlightsSection>
    </div>
  );
}

export default Home;
