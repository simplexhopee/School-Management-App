import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'react-native-paper';
import tinycolor from 'tinycolor2';

// Define the types for the props
interface GradientBackgroundProps {
  children: ReactNode;  // The content to display inside the background
  customColors?: string[];  // Optional custom gradient colors
  style?: ViewStyle;  // Optional custom styles for the container
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  customColors,
  style,
}) => {
  const { colors } = useTheme();
  const primaryColor = colors.primary;

  // Generate gradient colors based on the primary color
  const gradientColors = customColors || [
    tinycolor(primaryColor).setAlpha(0).toRgbString(), // Transparent version of the primary color
    tinycolor(primaryColor).setAlpha(0.2).toRgbString(), // Slightly opaque
    tinycolor(primaryColor).lighten(40).toHexString(),  // Lighter version
    tinycolor(primaryColor).lighten(30).toHexString(),
    tinycolor(primaryColor).lighten(20).toHexString(),
    tinycolor(primaryColor).lighten(10).toHexString(),
    tinycolor(primaryColor).lighten(5).toHexString(),
    primaryColor,  // Original primary color
  ];

  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={gradientColors}
        style={styles.gradientBackground}
        start={{ x: 0, y: 0 }} // Start from left
        end={{ x: 1, y: 0 }}   // End at right
      >
        {children}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default GradientBackground;
