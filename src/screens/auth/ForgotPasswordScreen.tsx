import { View, Image, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import GradientBackground from "../../components/shared/Background";
import forgotImg from '../../../assets/imgs/forgot_img.png';
import { Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/shared/CustomInput";
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import PrimaryButton from "../../components/shared/PrimaryButton";
import { useState } from "react";

const {width} = Dimensions.get('screen');

const ForgotPasswordScreen = ({ navigation }: { navigation: any }) => {
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
        source={forgotImg} // Correct prop for images in React Native
        style={styles.image} // Pass dimensions in style
        resizeMode="contain" // Optional: to control how the image scales
      />
        <Text variant="displayMedium" style={{color: colors.primary}} >Forgot Password?</Text>
        <Text variant="bodySmall" style={{color: colors.primary, opacity: 0.6, width: '60%'}}>Don’t worry! it happens. Please enter the
        address associated with your account.</Text>

        <View style={{marginTop: 56, gap:20}}>
            
        <CustomInput placeholder="Email ID" leftIcon={<Feather name="at-sign" size={16} color={colors.primary} />} />
            <View style={{flexDirection: 'column', paddingLeft: 40, marginTop:20}}><PrimaryButton onPress={()=> {setLoading(true);
              navigation.navigate('login');
            }} isLoading={loading} label="Submit"/></View>
            
        </View>
        </ScrollView>
        </SafeAreaView>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        
       </GradientBackground>
    )
}
const styles = StyleSheet.create({
    image: {
     width: width * 0.48,
     height: (width * 0.48) * 0.98,
     alignSelf: 'center',
     marginBottom: 50, // Optional: to add space between the image and text
    },
    background: {
        paddingHorizontal: 22,
    }
  });
  
export default ForgotPasswordScreen;