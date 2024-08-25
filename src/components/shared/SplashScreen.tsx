import React, { useEffect } from 'react';
import { View,  Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import dsLogo from '../../../assets/imgs/ds-logo.png';
import splash from '../../../assets/imgs/splash.png';
import {Text} from 'react-native-paper';

interface SplashScreenProps {
  onFinish?: () => void;
}

SplashScreen.preventAutoHideAsync();

const SplashScreenComponent: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(async () => {
      await SplashScreen.hideAsync();
      if (onFinish) {
        onFinish();
      }
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
        <Image
        source={splash}
        style={styles.image}
      />
      <View style={{flexDirection: 'row',  justifyContent: 'center', gap: 5}}>
      <Image
        source={dsLogo}
        style={styles.logo}
        />
        <View>
      <Text variant="titleLarge" style={styles.tagline}>
        A Simple User <Text variant="titleLarge" style={[styles.tagline, {fontWeight:'bold'}]}> Friendly </Text> 
      </Text>
      <Text variant="titleLarge" style={[styles.tagline, {fontWeight:'bold'}]}>Educational
      <Text variant="titleLarge"  style={styles.tagline}>
      {' '} App
      </Text>
      </Text>
      </View>
      </View>
     <Text style={styles.intro}>Instant, Accurate Communication between 
school management, staff, parents and students 
with Digital School Educational Suit</Text>
    </View>
  );
};

export default SplashScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#134B70',
    justifyContent: 'center',
   alignItems: 'center',
  },
  image: {
    width: '37%', 
    height: '15%', 
    resizeMode: 'contain',
  },
  logo: {
width: 50,
height: 50,
  },
  tagline: {
    color: '#fff',
    
    
    textAlign: 'left',
  },
  intro: {
    fontFamily: 'Pompiere_400Regular',
   width: '43%',
    color: '#fff',
    position: 'absolute',
    left: '52%',
    top: '17%',
  }
});
