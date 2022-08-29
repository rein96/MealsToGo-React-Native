import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { Card } from 'react-native-paper';

interface RestaurantInfoCardProps {
  restaurant?: any
}

const RestaurantCard = styled(Card)`
  backgroundColor: white;
`

const RestaurantCover = styled(Card.Cover)`
  padding: 20px;
  backgroundColor: 'white';
`

const Title = styled(Text)`
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary}
`

const RestaurantInfoCard: React.FC<RestaurantInfoCardProps> = ({ restaurant = {} }) => {

  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  )
}

export default RestaurantInfoCard