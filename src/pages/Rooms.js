import React from 'react';
import styled from 'styled-components';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import masterBedroomImage from '../assets/images/master-bedroom.jpg';
import guestBedroomImage from '../assets/images/guest-bedroom.jpg';
import kidsBedroomImage from '../assets/images/kids-bedroom.jpg';
import bathroomImage from '../assets/images/bathroom.jpg';
import kitchenImage from '../assets/images/kitchen.jpg';
import livingRoomImage from '../assets/images/living-room.jpg';

// Icons
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TvIcon from '@mui/icons-material/Tv';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const RoomsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: var(--dark-color);
`;

const SubTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: var(--dark-color);
`;

const PropertyHeader = styled.div`
  margin-bottom: 50px;
`;

const PropertyDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
`;

const KeyFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #555;
  
  svg {
    margin-right: 10px;
    color: var(--primary-color);
  }
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div``;

const SideContent = styled.div`
  position: sticky;
  top: 100px;
  height: fit-content;
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
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const RoomImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RoomContent = styled.div`
  padding: 20px;
`;

const RoomTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: var(--dark-color);
`;

const RoomText = styled.p`
  color: #616161;
  margin-bottom: 15px;
  line-height: 1.5;
`;

const AmenitiesSection = styled.section`
  background-color: var(--light-color);
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 60px;
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
  color: var(--dark-color);
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
    color: var(--primary-color);
  }
`;

function Rooms() {
