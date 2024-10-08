import { View, Image, StyleSheet, Dimensions, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import GradientBackground from "../../components/shared/Background";
import loginImg from '../../../assets/imgs/login_img.png';
import { Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/shared/CustomInput";
import Feather from '@expo/vector-icons/Feather';
import PrimaryButton from "../../components/shared/PrimaryButton";
import { useState } from "react";
import OTPComponent from "../../components/shared/OtpComponent";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const {width} = Dimensions.get('screen');

const LoginScreen = ({ navigation }: { navigation: any }) => {
    const {colors} = useTheme();
    const [loading, setLoading] = useState(false);

    return (
      <GradientBackground>
        
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            
          >
            <SafeAreaView>
            <ScrollView style={styles.background}>
        <Image
            source={loginImg} // Correct prop for images in React Native
            style={styles.image} // Pass dimensions in style
            resizeMode="contain" // Optional: to control how the image scales
        />
        <Text variant="displayMedium" style={{color: colors.primary}}>Login</Text>
        
        <View style={{marginTop: 56, gap: 20}}>
          <CustomInput 
            placeholder="Email ID" 
            leftIcon={<Feather name="at-sign" size={16} color={colors.primary} />} 
          />
          
          <CustomInput 
            placeholder="Password" 
            password 
            leftIcon={<EvilIcons name="lock" size={24} color={colors.primary} />}
          />
          
          <TouchableOpacity onPress={() => navigation.navigate('forgot')}> 
            <Text variant="bodyLarge" style={{color: colors.primary, fontWeight: '900', textAlign: 'right'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          
          <View style={{flexDirection: 'column', paddingLeft: 30, marginTop: 20}}>
            <PrimaryButton 
              onPress={() => { 
                setLoading(true);
              }} 
              isLoading={loading} 
              label="Submit"
            />
          </View>
        </View>
        </ScrollView>
        </SafeAreaView>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        
       </GradientBackground>
    );
};

const styles = StyleSheet.create({
    image: {
      width: width * 0.48,
      height: (width * 0.48) * 0.98,
      alignSelf: 'center',
      marginBottom: 50, // Optional: to add space between the image and text
    },
    background: {
        paddingHorizontal: 22,
    },
    resendText: {
      fontFamily: 'Inter',
      fontSize: 12,
      color: '#000000',
      textAlign: 'center',
    },
    
});

export default LoginScreen;
