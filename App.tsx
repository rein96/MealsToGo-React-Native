import React from 'react';
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure';
import RestaurantScreen from './src/screen/restaurant/RestaurantScreen';


// const isAndroid = Platform.OS === 'android';

// Check OS and its currentHeight
// console.log(Platform.OS, StatusBar.currentHeight);

export default function App() {


  return (
    <ThemeProvider theme={theme}>
      <RestaurantScreen />
    </ThemeProvider>
  );
}


