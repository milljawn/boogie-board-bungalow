import React from 'react';
import styled from 'styled-components';
import beachImage from '../assets/images/beach.jpg'; // Replace with actual path
import boardwalkImage from '../assets/images/boardwalk.jpg'; // Replace with actual path
import downtownImage from '../assets/images/downtown.jpg'; // Replace with actual path

const AttractionsContainer = styled.div`
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

const IntroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #424242;
`;

const AttractionSection = styled.section`
  margin-bottom: 60px;
`;

const AttractionCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AttractionImage = styled.img`
  width: 40%;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

const AttractionContent = styled.div`
  padding: 30px;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AttractionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #0d47a1;
`;

const AttractionText = styled.p`
  color: #616161;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const AttractionLink = styled.a`
  color: #1565c0;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  display: inline-block;
  margin-top: 10px;
  &:hover {
    color: #0d47a1;
    text-decoration: underline;
  }
`;

const ListSection = styled.section`
  background-color: #f5f5f5;
  padding: 60px 20px;
  margin: 0 -20px;
`;

const ListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ListCard = styled.div`
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const ListTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #0d47a1;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
  color: #424242;
  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #1565c0;
  }
`;

function Attractions() {
  return (
    <AttractionsContainer>
      <SectionTitle>Local Attractions</SectionTitle>
      <IntroText>
        Ocean City, NJ is a family-friendly beach destination with something for everyone. Explore these attractions and activities just minutes from Boogie Board Bungalow.
      </IntroText>
      <AttractionSection>
        <AttractionCard>
          <AttractionImage src={beachImage} alt="Ocean City Beach" />
          <AttractionContent>
            <AttractionTitle>Beautiful Beaches</AttractionTitle>
            <AttractionText>
              Ocean City is known for its pristine, family-friendly beaches that stretch for 8 miles along the coast. With lifeguards on duty during summer months, clean sand, and refreshing Atlantic waters, these beaches are perfect for swimming, sunbathing, and building sandcastles with the kids.
            </AttractionText>
            <AttractionLink href="https://www.ocnj.us/beach-tags" target="_blank" rel="noopener noreferrer">
              Beach Tag Information
            </AttractionLink>
          </AttractionContent>
        </AttractionCard>
        
        <AttractionCard reverse>
          <AttractionImage src={boardwalkImage} alt="Ocean City Boardwalk" />
          <AttractionContent>
            <AttractionTitle>Famous Boardwalk</AttractionTitle>
            <AttractionText>
              The legendary Ocean City Boardwalk stretches 2.5 miles and features amusement parks, water parks, mini-golf courses, arcades, and various shops and restaurants. Whether you're craving saltwater taffy, fresh fudge, or pizza, the boardwalk has something for everyone in the family.
            </AttractionText>
            <AttractionLink href="https://oceancityvacation.com/boardwalk" target="_blank" rel="noopener noreferrer">
              Learn More About the Boardwalk
            </AttractionLink>
          </AttractionContent>
        </AttractionCard>
        
        <AttractionCard>
          <AttractionImage src={downtownImage} alt="Downtown Ocean City" />
          <AttractionContent>
            <AttractionTitle>Downtown Shopping & Dining</AttractionTitle>
            <AttractionText>
              Explore Ocean City's charming downtown area on Asbury Avenue, featuring unique boutiques, gift shops, art galleries, and delicious restaurants. The downtown district hosts various events throughout the year, including Block Parties, Farmers Markets, and seasonal celebrations.
            </AttractionText>
            <AttractionLink href="https://www.oceancitynj.com/shopping" target="_blank" rel="noopener noreferrer">
              Discover Downtown Ocean City
            </AttractionLink>
          </AttractionContent>
        </AttractionCard>
      </AttractionSection>
      
      <ListSection>
        <ListContainer>
          <SectionTitle>Things To Do</SectionTitle>
          <ListGrid>
            <ListCard>
              <ListTitle>Family Activities</ListTitle>
              <List>
                <ListItem>Playland's Castaway Cove</ListItem>
                <ListItem>Gillian's Wonderland Pier</ListItem>
                <ListItem>OC Waterpark</ListItem>
                <ListItem>Congo Falls Adventure Golf</ListItem>
                <ListItem>Corson's Inlet State Park</ListItem>
                <ListItem>Ocean City Historical Museum</ListItem>
                <ListItem>Bayside Center</ListItem>
              </List>
            </ListCard>
            
            <ListCard>
              <ListTitle>Water Activities</ListTitle>
              <List>
                <ListItem>Surfing lessons</ListItem>
                <ListItem>Kayak rentals</ListItem>
                <ListItem>Paddleboarding</ListItem>
                <ListItem>Fishing charters</ListItem>
                <ListItem>Jet ski rentals</ListItem>
                <ListItem>Parasailing</ListItem>
                <ListItem>Whale & dolphin watching</ListItem>
              </List>
            </ListCard>
            
            <ListCard>
              <ListTitle>Dining Favorites</ListTitle>
              <List>
                <ListItem>Manco & Manco Pizza</ListItem>
                <ListItem>Johnson's Popcorn</ListItem>
                <ListItem>Kohr Brothers Frozen Custard</ListItem>
                <ListItem>Shriver's Salt Water Taffy</ListItem>
                <ListItem>Kessel's Korner</ListItem>
                <ListItem>Yianni's Cafe</ListItem>
                <ListItem>Crab Trap</ListItem>
              </List>
            </ListCard>
            
            <ListCard>
              <ListTitle>Nearby Day Trips</ListTitle>
              <List>
                <ListItem>Cape May (25 min)</ListItem>
                <ListItem>Atlantic City (20 min)</ListItem>
                <ListItem>Wildwood (35 min)</ListItem>
                <ListItem>Edwin B. Forsythe Wildlife Refuge (30 min)</ListItem>
                <ListItem>Cape May County Park & Zoo (25 min)</ListItem>
                <ListItem>Historic Smithville (30 min)</ListItem>
              </List>
            </ListCard>
          </ListGrid>
        </ListContainer>
      </ListSection>
    </AttractionsContainer>
  );
}

export default Attractions;
