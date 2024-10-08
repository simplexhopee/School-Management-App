import { View, Image, StyleSheet, Dimensions, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard, ScrollView, ActivityIndicator } from "react-native";
import GradientBackground from "../../components/shared/Background";
import otpImg from '../../../assets/imgs/otp_img.png';
import { Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../../components/shared/PrimaryButton";
import { useState } from "react";
import OTPComponent from "../../components/shared/OtpComponent";
import apiRequest from "../../utils/api";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useToast } from "react-native-toast-notifications";

const { width, height } = Dimensions.get('screen');

const OtpScreen = ({ navigation, route }: { navigation: any; route: any; }) => {
    const { colors } = useTheme();
    const [loading, setLoading] = useState(false);
    const [otpLoading, setOTPLoading] = useState(false);
    const [timer, setTimer] = useState<number>(30);
    const { payload, otp } = route.params;
    const [currentOTP, setCurrentOTP] = useState(otp);
    const [enteredOTP, setEnteredOTP] = useState(''); // State to hold the entered OTP
    const [refreshKey, setRefreshKey] = useState(0);
const toast = useToast();
    const ResendOTP = async () => {
      
/*
setOTPLoading(true);
      apiRequest('profile/Check_User', 'POST', { ...payload })
      .then((res) => {
        console.log(res);
        setCurrentOTP(res.data.otp);
        setTimer(30); 
      })
      .catch((err) => console.log(err))
      .finally(() => setOTPLoading(false));
    }
*/
setCurrentOTP('2345');
setTimer(30); 
    }
    const handleTimerEnd = () => {
      setRefreshKey(prevKey => prevKey + 1);
    }

    const handleSubmit = () => {
      console.log(enteredOTP);
      if (!enteredOTP || enteredOTP !== currentOTP) {
        toast.show('Wrong OTP', {type: 'danger'});
      }
      else {
        navigation.navigate('password', {payload: payload});
      }
      
    
    }

    return (
      <GradientBackground>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView extraScrollHeight={100} enableOnAndroid={true}>
           
          <SafeAreaView style={{ flex: 1 }}>
            <Image
              source={otpImg}
              style={styles.image}
              resizeMode="contain"
            />
            <Text variant="displayMedium" style={{ color: colors.primary }}>Enter OTP</Text>
            <Text variant="bodySmall" style={{ color: colors.primary, opacity: 0.6, width: '60%' }}>
              A 4 digit code has been sent to your email
            </Text>

            <View style={{ marginTop: 56, gap: 7 }}>
              <OTPComponent
                timer={timer}
                setTimer={setTimer}
                onTimerEnd={handleTimerEnd}
                setEnteredOTP={setEnteredOTP} // Passing the function to set OTP value
              />
              <Text style={styles.resendText}>
                Didn't receive OTP? <Text onPress={timer === 0 ? ResendOTP : () => {}} style={{ color: timer === 0 ? colors.primary : 'black', opacity: timer === 0 ? 0.6 : 1 }}>Resend OTP</Text>
              </Text>

              <View style={{ flexDirection: 'column', paddingLeft: 40, marginTop: 20 }}>
                <PrimaryButton onPress={handleSubmit} isLoading={loading} label="Submit" />
              </View>
            </View>
          </SafeAreaView>
          {otpLoading && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator style={{ alignSelf: 'center' }} size="large" color="#1E3467" />
            </View>
          )}
        </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
      </GradientBackground>
    );
}

const styles = StyleSheet.create({
  image: {
    width: width * 0.48,
    height: (width * 0.48) * 0.98,
    alignSelf: 'center',
    marginBottom: 50,
  },
  resendText: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: '#000000',
    textAlign: 'center',
  },
  loadingOverlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: width,
    height: height,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
});

export default OtpScreen;
