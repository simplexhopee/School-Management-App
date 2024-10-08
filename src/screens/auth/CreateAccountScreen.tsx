import { View, Image, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import GradientBackground from "../../components/shared/Background";
import createImg from '../../../assets/imgs/create_img.png';
import { Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/shared/CustomInput";
import Feather from '@expo/vector-icons/Feather';
import PrimaryButton from "../../components/shared/PrimaryButton";
import { useState } from "react";
import apiRequest from "../../utils/api";
import { School } from "../../interfaces/authTypes";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const {width, height} = Dimensions.get('screen');

const CreateAccountScreen = ({ navigation, route }: { navigation: any; route: any; }) => {
  const { schools } = route.params;
  const schoolNames: string[] = schools.map((school: School) => school.name);
  console.log(schoolNames);
    const {colors} = useTheme();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState('');
    const [school, setSchool] = useState('');
    const HandleCheck = async () => {
      setLoading(true);
      const payload = {
        type: 'Parent',
        user: user,
        db: schools.find((s: School)=> s.name = school).alias,
      };
      /*
      apiRequest('profile/Check_User', 'POST', {...payload})
      .then((res)=> {
        console.log(res);
        if (res.status === 200) { // Navigate only if the status is successful
          navigation.navigate('otp', { payload: payload, otp: res.data.otp });
        } else {
          console.log("Error: ", res.data.message);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
      */
      setLoading(false);
      navigation.navigate('otp', { payload: payload, otp: '1234' });
    }
    return (
       <GradientBackground>
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAwareScrollView   extraScrollHeight={100} // Adjust as necessary
                    enableOnAndroid={true}
                >
           
              <SafeAreaView style={{ flex: 1 }}>
             
        <Image
        source={createImg} // Correct prop for images in React Native
        style={styles.image} // Pass dimensions in style
        resizeMode="contain" // Optional: to control how the image scales
      />
        <Text variant="displayMedium" style={{color: colors.primary, width: '60%'}} >Create Account</Text>
        <Text variant="bodySmall" style={{color: colors.primary, opacity: 0.6, width: '60%'}}>Sign up to access all features. 
        It’s quick and easy!</Text>

        <View style={{marginTop: 56, gap:20}}>
            
           <View style={{flexDirection: 'row', paddingLeft: 30}}><CustomInput placeholder="Name of School" setValue={setSchool}  showAutocomplete data={schoolNames} /></View> 
            <CustomInput placeholder="School ID, Email or Phone Number" setValue={setUser}  leftIcon={<Feather name="at-sign" size={16} color={colors.primary} />}/>
            <View style={{flexDirection: 'column', paddingLeft: 40, marginTop:20}}><PrimaryButton onPress={HandleCheck} isLoading={loading} label="Submit"/></View>
            
        </View>
       
        </SafeAreaView>
        {loading && (
            <View style={styles.loadingOverlay}>
              {/* Optional: Add a loading spinner here if needed */}
            </View>
          )}
        </KeyboardAwareScrollView>
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
    },
    loadingOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: width,
      height: height,
      zIndex: 10,
      backgroundColor: 'transparent', // No color overlay
    },
  });
  
export default CreateAccountScreen;