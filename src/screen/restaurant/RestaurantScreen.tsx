import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import RestaurantInfoCard from '../../components/restaurant/RestaurantInfoCard';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px;`}
`

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

const RestaurantScreen = () => {
  const [searchText, setSearchText] = useState('')

  const onChangeSearch = (text: string) => {
    setSearchText(text)
  }

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder='Search'
          value={searchText}
          onChangeText={onChangeSearch}
        />

      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  )
}

export default RestaurantScreen