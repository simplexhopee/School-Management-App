import { View, Image, StyleSheet, Dimensions, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard, ScrollView } from "react-native"
import GradientBackground from "../../components/shared/Background";
import passwordImg from '../../../assets/imgs/password_img.png';
import { Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/shared/CustomInput";
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import PrimaryButton from "../../components/shared/PrimaryButton";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import apiRequest from "../../utils/api";
import { useToast } from "react-native-toast-notifications";

const {width, height} = Dimensions.get('screen');

const CreatePasswordScreen = ({ navigation, route }: { navigation: any; route: any; }) => {
    const {colors} = useTheme();
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [comfirmPassword, setComfirmPassword] = useState('');
    const {payload } = route.params;
    const toast = useToast()
    const ChangePassword = async () => {
      if (password !== comfirmPassword) {
        toast.show('Password does not match', {type: 'danger'});
        return;
      }
      console.log({...payload , password: password});
      setLoading(true);
      apiRequest('profile/Change_Password', 'PATCH', {
        ...payload, password: password 
      })
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          navigation.navigate('login', {payload: payload});
        }
        else {
          toast.show('Error ' + res.data, {type: 'danger'});
        }
       })
      .catch((err) => toast.show(err, {type: 'danger'}))
      .finally(()=> setLoading(false))
    }
    return (
      <GradientBackground>
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView extraScrollHeight={100} enableOnAndroid={true}>
           
          <SafeAreaView style={{ flex: 1 }}>
        <Image
        source={passwordImg} // Correct prop for images in React Native
        style={styles.image} // Pass dimensions in style
        resizeMode="contain" // Optional: to control how the image scales
      />
        <Text variant="displayMedium" style={{color: colors.primary}} >Create Password?</Text>
        

        <View style={{marginTop: 56, gap:20}}>
            
           <CustomInput placeholder="Create Password" setValue={setPassword} password leftIcon={<EvilIcons name="lock" size={24} color={colors.primary} />}/>
           <CustomInput placeholder="Confirm Password" setValue={setComfirmPassword} password leftIcon={<EvilIcons name="lock" size={24} color={colors.primary} />}/>
            <View style={{flexDirection: 'column', paddingLeft: 40, marginTop:20}}><PrimaryButton onPress={ChangePassword} isLoading={loading} label="Submit"/></View>
            
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
  
export default CreatePasswordScreen;