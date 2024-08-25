import React from 'react';
import { Button, ActivityIndicator, useTheme, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

interface SubmitButtonProps {
  onPress: () => void;  // Function to call when the button is pressed
  isLoading: boolean;   // Whether the button is in the "submitting" state
  disabled?: boolean;   // Whether the button is disabled
  label: string;        // Text to display on the button
}

const PrimaryButton: React.FC<SubmitButtonProps> = ({ onPress, isLoading, disabled, label }) => {
  const { colors } = useTheme();

  return (
    <Button
      mode="contained"
      onPress={onPress}
      disabled={ disabled}
      contentStyle={[styles.buttonContent, disabled && { backgroundColor: colors.surfaceDisabled}]}
      style={styles.button}
      labelStyle={styles.labelStyle}
    >
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.background} size="small" />
          <Text style={styles.loadingText}>Submitting...</Text>
        </View>
      ) : (
        label
      )}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
  },
  buttonContent: {
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  labelStyle: {
    fontSize: 12,
    color: '#EEEEEE',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingText: {
    color: '#EEEEEE',
    marginLeft: 10,
  },
});

export default PrimaryButton;
