import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import tinycolor from 'tinycolor2';

interface GradientBackgroundProps {
  children: ReactNode;
  style?: ViewStyle;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children, style }) => {
  const { colors } = useTheme();
  const primaryColor = colors.primary;

  // Generate the first gradient layer colors
  const firstGradientColors = [
    tinycolor('#000000').setAlpha(0).toRgbString(),   // Transparent
    tinycolor(primaryColor).lighten(54).setAlpha(1).toRgbString(), // Slightly opaque
  ];

  // Generate the second gradient layer colors
  const secondGradientColors = [
    '#FFFFFF',
    tinycolor(primaryColor).lighten(75).setAlpha(1).toRgbString(),
    tinycolor(primaryColor).lighten(70).setAlpha(1).toRgbString(),
    tinycolor(primaryColor).lighten(65).setAlpha(1).toRgbString(),
    tinycolor(primaryColor).lighten(55).setAlpha(1).toRgbString(),
     // Transition to white
  ];

  const locations = [0, 0.18, 0.35, 0.68, 1];
  return (
    <View style={[styles.container, style]}>
      {/* First Gradient Layer (Transparent to light) */}
      <LinearGradient
        colors={firstGradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientOverlay}
      />

      {/* Second Gradient Layer (Lighter to original primary) */}
      <LinearGradient
      locations={locations}
        colors={secondGradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientBackground}
      >
        <View style={[styles.childrenStyle, { flex: 1 }]}>
        {children}
        </View>
        </LinearGradient>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
   
  },
  childrenStyle: {
    fontFamily: 'Poppins_400Regular',
    paddingHorizontal:22, 
    paddingTop: 50
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,  // First layer should cover the entire container
    zIndex: 1,                         // Ensure this is rendered first
    opacity: 0.2,  
  },
  gradientBackground: {
    ...StyleSheet.absoluteFillObject,  // Second layer should cover the entire container
    zIndex: 2,                         // Ensure this is rendered on top
  },
});

export default GradientBackground;
