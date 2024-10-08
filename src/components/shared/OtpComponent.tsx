import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

interface OTPComponentProps {
  timer: number;
  onTimerEnd: () => void;
  setTimer: (value: number) => void;
  setEnteredOTP: (otp: string) => void; // Add this prop to pass OTP to parent
}

const OTPComponent: React.FC<OTPComponentProps> = ({ timer, setTimer, onTimerEnd, setEnteredOTP }) => {
  const otpInput = useRef<OTPTextInput>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTime: number) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(interval);
          onTimerEnd();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimerEnd]);

  const handleOTPChange = (otp: string) => {
    setEnteredOTP(otp); // Update the OTP value in the parent component
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <View style={styles.container}>
      <OTPTextInput
        ref={otpInput}
        inputCount={4}
        containerStyle={styles.otpContainer}
        textInputStyle={styles.otpInput}
        tintColor={'#1E3467'}
        handleTextChange={handleOTPChange} // This captures the OTP input changes
      />
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>Time Remaining: {formatTime(timer)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#1E3467',
    borderRadius: 50,
    width: 37,
    height: 37,
    textAlign: 'center',
    backgroundColor: '#D0D8DF',
    borderStyle: 'solid',
  },
  timerContainer: {
    marginTop: 16,
    width: 200,
    alignItems: 'center',
  },
  timerText: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: '#000000',
  },
});

export default OTPComponent;
