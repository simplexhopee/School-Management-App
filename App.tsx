import React, { useEffect, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AppThemes } from './src/themes/theme';
import AuthNavigator from './src/navigation/AuthStack'; 
import MainNavigator from './src/navigation/MainStack';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { Pompiere_400Regular } from '@expo-google-fonts/pompiere';
import SplashScreenComponent from './src/components/shared/SplashScreen';
import apiRequest from './src/utils/api';
import { School } from './src/interfaces/authTypes';
import { ToastProvider } from 'react-native-toast-notifications';
export default function App() {
  const [primaryColors, setPrimaryColors] = useState({primary:'#134B70', accent: '#BB224B'}); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Handle authentication state
  const [isSplashVisible, setSplashVisible] = useState(true); // Splash screen visibility state
  const [schools, setSchools] = useState<School[]>([]);
  const theme = AppThemes(primaryColors);

  // Load fonts
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Pompiere_400Regular,
  });

  // Check authentication via API request
  const LoadSchools = async () => {
    try {
      if (isAuthenticated === false) {
        apiRequest('profile/get_schools', 'GET')
        .then((res)=> setSchools(res.data) )
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
    } finally {
     
    }
  };

  // UseEffect to handle font loading and API call during splash screen
  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        // Call the authentication API when fonts are loaded
        LoadSchools();
      }, 1000); // Adjust the timing as needed
    }
  }, [fontsLoaded]);

  // Show splash screen while checking auth and fonts are still loading
  if (!fontsLoaded  || schools.length === 0) {
    return <SplashScreenComponent />;
  }

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <ToastProvider>
      <NavigationContainer>
        <MainNavigator /> 
      </NavigationContainer>
      </ToastProvider>
    </PaperProvider>
  );
}
