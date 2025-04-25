import React from 'react';
import styled from 'styled-components';
import masterBedroomImage from '../assets/images/master-bedroom.jpg'; // Replace with actual path
import guestBedroomImage from '../assets/images/guest-bedroom.jpg'; // Replace with actual path
import kidsBedroomImage from '../assets/images/kids-bedroom.jpg'; // Replace with actual path
import bathroomImage from '../assets/images/bathroom.jpg'; // Replace with actual path
import kitchenImage from '../assets/images/kitchen.jpg'; // Replace with actual path
import livingRoomImage from '../assets/images/living-room.jpg'; // Replace with actual path

const RoomsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
  color: #0d47a1;
`;

const RoomSection = styled.section`
  margin-bottom: 60px;
`;

const RoomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const RoomCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const RoomImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const RoomContent = styled.div`
  padding: 20px;
`;

const RoomTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #0d47a1;
`;

const RoomText = styled.p`
  color: #616161;
  margin-bottom: 15px;
  line-height: 1.5;
`;

const AmenitiesSection = styled.section`
  background-color: #f5f5f5;
  padding: 60px 20px;
  margin: 0 -20px;
  margin-bottom: 60px;
`;

const AmenitiesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const AmenitiesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

const AmenityCategory = styled.div``;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #1565c0;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AmenityItem = styled.li`
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  color: #424242;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #1565c0;
  }
`;

function Rooms() {
  return (
    <RoomsContainer>
      <SectionTitle>Rooms & Spaces</SectionTitle>
      
      <RoomSection>
        <RoomGrid>
          <RoomCard>
            <RoomImage src={masterBedroomImage} alt="Master Bedroom" />
            <RoomContent>
              <RoomTitle>Master Bedroom</RoomTitle>
              <RoomText>
                Spacious master bedroom with a comfortable queen-sized bed, plenty of storage, and natural light. Perfect for a relaxing retreat after a day at the beach.
              </RoomText>
            </RoomContent>
          </RoomCard>
          
          <RoomCard>
            <RoomImage src={guestBedroomImage} alt="Guest Bedroom" />
            <RoomContent>
              <RoomTitle>Guest Bedroom</RoomTitle>
              <RoomText>
                Comfortable guest bedroom with a full-sized bed and all the necessities for a good night's sleep. Includes closet space and bedside tables.
              </RoomText>
            </RoomContent>
          </RoomCard>
          
          <RoomCard>
            <RoomImage src={kidsBedroomImage} alt="Kids Bedroom" />
            <RoomContent>
              <RoomTitle>Kids Bedroom</RoomTitle>
              <RoomText>
                Fun and functional kids' room with bunk beds, perfect for children or additional guests. Includes storage for toys and clothes.
              </RoomText>
            </RoomContent>
          </RoomCard>
          
          <RoomCard>
            <RoomImage src={livingRoomImage} alt="Living Room" />
            <RoomContent>
              <RoomTitle>Living Room</RoomTitle>
              <RoomText>
                Open and airy living room with comfortable seating, smart TV, and plenty of space for the whole family to relax together after a day of beach activities.
              </RoomText>
            </RoomContent>
          </RoomCard>
          
          <RoomCard>
            <RoomImage src={kitchenImage} alt="Kitchen" />
            <RoomContent>
              <RoomTitle>Kitchen & Dining</RoomTitle>
              <RoomText>
                Modern, fully-equipped kitchen with all appliances and utensils needed for preparing family meals. Adjacent dining area with seating for everyone.
              </RoomText>
            </RoomContent>
          </RoomCard>
          
          <RoomCard>
            <RoomImage src={bathroomImage} alt="Bathroom" />
            <RoomContent>
              <RoomTitle>Bathrooms</RoomTitle>
              <RoomText>
                Clean, updated bathrooms with all the necessities. Indoor bathroom with shower/tub combo and convenient outdoor shower for rinsing off after the beach.
              </RoomText>
            </RoomContent>
          </RoomCard>
        </RoomGrid>
      </RoomSection>
      
      <AmenitiesSection>
        <AmenitiesContainer>
          <SectionTitle>Amenities</SectionTitle>
          <AmenitiesList>
            <AmenityCategory>
              <CategoryTitle>General</CategoryTitle>
              <CategoryList>
                <AmenityItem>WiFi throughout property</AmenityItem>
                <AmenityItem>Central air conditioning</AmenityItem>
                <AmenityItem>Heating system</AmenityItem>
                <AmenityItem>Smoke detectors</AmenityItem>
                <AmenityItem>Carbon monoxide detectors</AmenityItem>
                <AmenityItem>Fire extinguisher</AmenityItem>
              </CategoryList>
            </AmenityCategory>
            
            <AmenityCategory>
              <CategoryTitle>Kitchen</CategoryTitle>
              <CategoryList>
                <AmenityItem>Full-sized refrigerator</AmenityItem>
                <AmenityItem>Stove and oven</AmenityItem>
                <AmenityItem>Microwave</AmenityItem>
                <AmenityItem>Dishwasher</AmenityItem>
                <AmenityItem>Coffee maker</AmenityItem>
                <AmenityItem>Toaster</AmenityItem>
                <AmenityItem>Cookware and utensils</AmenityItem>
                <AmenityItem>Dishes and glassware</AmenityItem>
              </CategoryList>
            </AmenityCategory>
            
            <AmenityCategory>
              <CategoryTitle>Living Areas</CategoryTitle>
              <CategoryList>
                <AmenityItem>Smart TV</AmenityItem>
                <AmenityItem>Comfortable seating</AmenityItem>
                <AmenityItem>Dining table and chairs</AmenityItem>
                <AmenityItem>Board games</AmenityItem>
              </CategoryList>
            </AmenityCategory>
            
            <AmenityCategory>
              <CategoryTitle>Bedrooms</CategoryTitle>
              <CategoryList>
                <AmenityItem>Fresh linens provided</AmenityItem>
                <AmenityItem>Extra pillows and blankets</AmenityItem>
                <AmenityItem>Closet space</AmenityItem>
                <AmenityItem>Ceiling fans</AmenityItem>
              </CategoryList>
            </AmenityCategory>
            
            <AmenityCategory>
              <CategoryTitle>Bathrooms</CategoryTitle>
              <CategoryList>
                <AmenityItem>Bath towels provided</AmenityItem>
                <AmenityItem>Outdoor shower</AmenityItem>
                <AmenityItem>Hair dryer</AmenityItem>
              </CategoryList>
            </AmenityCategory>
            
            <AmenityCategory>
              <CategoryTitle>Outdoor</CategoryTitle>
              <CategoryList>
                <AmenityItem>Deck area</AmenityItem>
                <AmenityItem>Outdoor furniture</AmenityItem>
                <AmenityItem>Beach gear available</AmenityItem>
                <AmenityItem>Parking space</AmenityItem>
              </CategoryList>
            </AmenityCategory>
          </AmenitiesList>
        </AmenitiesContainer>
      </AmenitiesSection>
    </RoomsContainer>
  );
}

export default Rooms;
