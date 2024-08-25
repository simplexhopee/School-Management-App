import React, { useEffect, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AppThemes } from './src/themes/theme';
import { MainStack } from './src/navigation/MainStack';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import {  Pompiere_400Regular } from '@expo-google-fonts/pompiere';
import SplashScreenComponent from './src/components/shared/SplashScreen';
import PrimaryButton from './src/components/shared/PrimaryButton';
import { View } from 'react-native';

export default function App() {
  const [primaryColors, setPrimaryColors] = useState({primary:'#134B70', accent: '#BB224B'}); 
  const theme = AppThemes(primaryColors); 
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Pompiere_400Regular,
  });
  const [isSplashVisible, setSplashVisible] = useState(true);
  useEffect(() => {
    if (fontsLoaded) {
     
      setTimeout(() => {
        setSplashVisible(false);
      }, 7000); // Adjust timing as needed
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // While fonts are loading, return null or a simple fallback
    return null;
  }

  if (isSplashVisible) {
    return <SplashScreenComponent />;
  }


  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
      <PrimaryButton onPress={()=>{}} isLoading label={'Submit'}></PrimaryButton></View>
    </PaperProvider>
  );
}
