\import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import exteriorImage from '../assets/images/exterior.jpg'; // Replace with actual path
import livingRoomImage from '../assets/images/living-room.jpg'; // Replace with actual path
import kitchenImage from '../assets/images/kitchen.jpg'; // Replace with actual path
import beachImage from '../assets/images/beach.jpg'; // Replace with actual path

const HomeContainer = styled.div``;

const Section = styled.section`
  padding: 5rem 0;
  ${props => props.backgroundColor && `background-color: ${props.backgroundColor};`}
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Featured Properties Section
const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 3rem;
`;

const PropertyCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const PropertyImage = styled.div`
  height: 250px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const PropertyTag = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: var(--primary-color);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.9rem;
`;

const PropertyContent = styled.div`
  padding: 25px;
`;

const PropertyTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--dark-color);
`;

const PropertyFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  color: #555;
`;

const PropertyFeature = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  
  svg {
    margin-right: 5px;
    font-size: 1.1rem;
  }
`;

const PropertyPrice = styled.div`
  margin-bottom: 20px;
  
  span {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary-color);
  }
`;

const PropertyDescription = styled.p`
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const PropertyButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 12px 20px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
    color: white;
  }
`;

// About Section
const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
  position: relative;
  
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 3px solid var(--primary-color);
    border-radius: 10px;
    z-index: -1;
  }
  
  @media (max-width: 992px) {
    margin-bottom: 30px;
  }
`;

const AboutContent = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--dark-color);
`;

const AboutText = styled.p`
  color: #555;
  margin-bottom: 20px;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const AboutList = styled.ul`
  list-style: none;
  margin-bottom: 30px;
`;

const AboutItem = styled.li`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  color: #555;
  
  &::before {
    content: '✓';
    display: inline-block;
    color: var(--primary-color);
    font-weight: bold;
    margin-right: 10px;
  }
`;

// Features Section
const FeaturesContainer = styled.div`
  text-align: center;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: 40px 30px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 25px;
  background-color: var(--light-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 2rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--dark-color);
`;

const FeatureDescription = styled.p`
  color: #555;
  line-height: 1.6;
`;

// Testimonials Section
const TestimonialsContainer = styled.div`
  text-align: center;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 3rem;
`;

const TestimonialCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

const QuoteIcon = styled.div`
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 20px;
`;

const TestimonialText = styled.p`
  color: #555;
  line-height: 1.7;
  margin-bottom: 20px;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  margin: 0;
  color: var(--dark-color);
`;

const AuthorDate = styled.p`
  margin: 0;
  color: #888;
  font-size: 0.9rem;
`;

// CTA Section
const CTASection = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${beachImage});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 0;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.7;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 14px 30px;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  
  &.primary {
    background-color: var(--primary-color);
    color: white;
    
    &:hover {
      background-color: #1565c0;
    }
  }
  
  &.secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      {/* Featured Property Section */}
      <Section>
        <Container>
          <SectionTitle style={{ textAlign: 'center' }}>Welcome to Your Dream Vacation</SectionTitle>
          <FeaturedGrid>
            <PropertyCard>
              <PropertyImage>
                <img src={exteriorImage} alt="Boogie Board Bungalow Exterior" />
                <PropertyTag>Featured</PropertyTag>
              </PropertyImage>
              <PropertyContent>
                <PropertyTitle>Beachfront Paradise</PropertyTitle>
                <PropertyFeatures>
                  <PropertyFeature>4 Bedrooms</PropertyFeature>
                  <PropertyFeature>2 Bathrooms</PropertyFeature>
                  <PropertyFeature>Sleeps 10</PropertyFeature>
                </PropertyFeatures>
                <PropertyPrice>
                  From <span>$350</span> / night
                </PropertyPrice>
                <PropertyDescription>
                  Experience the perfect beach getaway in our spacious, comfortable beach house with everything you need for an unforgettable vacation.
                </PropertyDescription>
                <PropertyButton to="/rooms">View Details</PropertyButton>
              </PropertyContent>
            </PropertyCard>
            
            <PropertyCard>
              <PropertyImage>
                <img src={livingRoomImage} alt="Comfortable Living Space" />
              </PropertyImage>
              <PropertyContent>
                <PropertyTitle>Luxurious Living Areas</PropertyTitle>
                <PropertyDescription>
                  Relax in our beautifully designed living spaces with comfortable furniture, modern amenities, and plenty of room for the whole family.
                </PropertyDescription>
                <PropertyButton to="/rooms">See More</PropertyButton>
              </PropertyContent>
            </PropertyCard>
            
            <PropertyCard>
              <PropertyImage>
                <img src={kitchenImage} alt="Modern Kitchen" />
              </PropertyImage>
              <PropertyContent>
                <PropertyTitle>Fully Equipped Kitchen</PropertyTitle>
                <PropertyDescription>
                  Prepare delicious meals in our modern kitchen with all the appliances and utensils you need for cooking during your stay.
                </PropertyDescription>
                <PropertyButton to="/rooms">Explore</PropertyButton>
              </PropertyContent>
            </PropertyCard>
          </FeaturedGrid>
        </Container>
      </Section>
      
      {/* About Section */}
      <Section backgroundColor="var(--light-color)">
        <Container>
          <AboutContainer>
            <AboutImage>
              <img src={exteriorImage} alt="Boogie Board Bungalow" />
            </AboutImage>
            <AboutContent>
              <SectionTitle>Your Perfect Beach Getaway</SectionTitle>
              <AboutText>
                Boogie Board Bungalow offers a luxurious and comfortable stay just minutes from the beautiful beaches of Ocean City, NJ. Our spacious beach house is designed to provide the ultimate vacation experience for families and groups.
              </AboutText>
              <AboutList>
                <AboutItem>Prime location near beach and boardwalk</AboutItem>
                <AboutItem>Spacious accommodations for up to 10 guests</AboutItem>
                <AboutItem>Modern amenities and fully equipped kitchen</AboutItem>
                <AboutItem>Outdoor space for relaxation after beach days</AboutItem>
                <AboutItem>Family-friendly environment with nearby attractions</AboutItem>
              </AboutList>
              <PropertyButton to="/rooms">Discover More</PropertyButton>
            </AboutContent>
          </AboutContainer>
        </Container>
      </Section>
      
      {/* Features Section */}
      <Section>
        <Container>
          <FeaturesContainer>
            <SectionTitle>Why Choose Our Beach House</SectionTitle>
            <FeaturesGrid>
              <FeatureCard>
                <FeatureIcon>🏖️</FeatureIcon>
                <FeatureTitle>Prime Location</FeatureTitle>
                <FeatureDescription>
                  Just minutes from the beach and boardwalk, our location offers the perfect balance of accessibility and tranquility.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>🏠</FeatureIcon>
                <FeatureTitle>Spacious Comfort</FeatureTitle>
                <FeatureDescription>
                  Enjoy our open floor plan with plenty of room for everyone to relax, dine, and create lasting memories together.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>✨</FeatureIcon>
                <FeatureTitle>Modern Amenities</FeatureTitle>
                <FeatureDescription>
                  From WiFi and smart TVs to a fully equipped kitchen, we provide all the conveniences of home during your stay.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>👪</FeatureIcon>
                <FeatureTitle>Family Friendly</FeatureTitle>
                <FeatureDescription>
                  Our property is ideal for families with children, with nearby playgrounds and safe, clean beaches.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>🚿</FeatureIcon>
                <FeatureTitle>Outdoor Space</FeatureTitle>
                <FeatureDescription>
                  Enjoy our outdoor shower and deck area for relaxing after a day of sun, sand, and surf.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>🔒</FeatureIcon>
                <FeatureTitle>Peace of Mind</FeatureTitle>
                <FeatureDescription>
                  Our property is well-maintained, professionally cleaned, and equipped with safety features for your peace of mind.
                </FeatureDescription>
              </FeatureCard>
            </FeaturesGrid>
          </FeaturesContainer>
        </Container>
      </Section>
      
      {/* Testimonials Section */}
      <Section backgroundColor="var(--light-color)">
        <Container>
          <TestimonialsContainer>
            <SectionTitle>What Our Guests Say</SectionTitle>
            <TestimonialsGrid>
              <TestimonialCard>
                <QuoteIcon>❝</QuoteIcon>
                <TestimonialText>
                  We loved it here! We felt right at home! Bed in master bedroom was super comfy! Thank you for your hospitality! We plan on visiting next summer for sure!
                </TestimonialText>
                <TestimonialAuthor>
                  <AuthorInfo>
                    <AuthorName>Betty</AuthorName>
                    <AuthorDate>July 2024</AuthorDate>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
              
              <TestimonialCard>
                <QuoteIcon>❝</QuoteIcon>
                <TestimonialText>
                  This home was amazingly spacious with a large kitchen area with an open floor plan to the dining and living area. Our stay in this home was two thumbs up, indeed!!!
                </TestimonialText>
                <TestimonialAuthor>
                  <AuthorInfo>
                    <AuthorName>M. Ottmers</AuthorName>
                    <AuthorDate>June 2024</AuthorDate>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
              
              <TestimonialCard>
                <QuoteIcon>❝</QuoteIcon>
                <TestimonialText>
                  We try to come to Ocean City every year with our grown boys and their wives. This house was a fantastic place for our family gathering. We would certainly rent this place again!
                </TestimonialText>
                <TestimonialAuthor>
                  <AuthorInfo>
<AuthorName>Kathy W</AuthorName>
                    <AuthorDate>May 2024</AuthorDate>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            </TestimonialsGrid>
          </TestimonialsContainer>
        </Container>
      </Section>
      
      {/* CTA Section */}
      <CTASection>
        <Container>
          <CTATitle>Book Your Dream Vacation Today</CTATitle>
          <CTAText>
            Don't miss out on the perfect beach getaway. Reserve your stay at Boogie Board Bungalow and create unforgettable memories with your loved ones.
          </CTAText>
          <CTAButtons>
            <CTAButton to="/rooms" className="primary">View Rooms & Amenities</CTAButton>
            <CTAButton to="/attractions" className="secondary">Explore Local Attractions</CTAButton>
          </CTAButtons>
        </Container>
      </CTASection>
    </HomeContainer>
  );
}

export default Home;