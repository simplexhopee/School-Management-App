import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccountScreen from '../screens/auth/CreateAccountScreen';
import BackButton from '../components/shared/BackButton';
import OtpScreen from '../screens/auth/OtpScreen';
import CreatePasswordScreen from '../screens/auth/CreatePasswordScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import { School } from '../interfaces/authTypes';

const AuthStack = createNativeStackNavigator();

interface AuthNavigatorProps {
  schools: School[];
}
const AuthNavigator: React.FC<AuthNavigatorProps> = ({ schools }) => {

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="create" component={CreateAccountScreen} initialParams={{ schools }} options={({ navigation }) => ({
          title: '',
          headerTransparent: true, // Make the header transparent
          headerLeft: () => <BackButton navigation={navigation} />, // Custom back button
          headerStyle: {
            backgroundColor: 'transparent', // Transparent background
          },
          headerShadowVisible: false, // Remove shadow for iOS
          headerTintColor: '#1E3467', // Customize back button color
        })}/>
       <AuthStack.Screen name="otp" component={OtpScreen} options={({ navigation }) => ({
          title: '',
          headerTransparent: true, // Make the header transparent
          headerLeft: () => <BackButton navigation={navigation} />, // Custom back button
          headerStyle: {
            backgroundColor: 'transparent', // Transparent background
          },
          headerShadowVisible: false, // Remove shadow for iOS
          headerTintColor: '#1E3467', // Customize back button color
        })}/>
        <AuthStack.Screen name="password" component={CreatePasswordScreen} options={({ navigation }) => ({
          title: '',
          headerTransparent: true, // Make the header transparent
          headerLeft: () => <BackButton navigation={navigation} />, // Custom back button
          headerStyle: {
            backgroundColor: 'transparent', // Transparent background
          },
          headerShadowVisible: false, // Remove shadow for iOS
          headerTintColor: '#1E3467', // Customize back button color
        })}/>
         <AuthStack.Screen name="login" component={LoginScreen} options={({ navigation }) => ({
          title: '',
          headerTransparent: true, // Make the header transparent
          headerLeft: () => <BackButton navigation={navigation} />, // Custom back button
          headerStyle: {
            backgroundColor: 'transparent', // Transparent background
          },
          headerShadowVisible: false, // Remove shadow for iOS
          headerTintColor: '#1E3467', // Customize back button color
        })}/>
         <AuthStack.Screen name="forgot" component={ForgotPasswordScreen} options={({ navigation }) => ({
          title: '',
          headerTransparent: true, // Make the header transparent
          headerLeft: () => <BackButton navigation={navigation} />, // Custom back button
          headerStyle: {
            backgroundColor: 'transparent', // Transparent background
          },
          headerShadowVisible: false, // Remove shadow for iOS
          headerTintColor: '#1E3467', // Customize back button color
        })}/>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
