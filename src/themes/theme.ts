import { MD3LightTheme as DefaultTheme, MD3Theme } from 'react-native-paper';

export type CustomTheme = MD3Theme & {
  colors: {
    primary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    error: string;
    surfaceDisabled: string;
    
  };
  fonts: {
    regular: {
      fontFamily: string;
      fontWeight: string;
    };
    medium: {
      fontFamily: string;
      fontWeight: string;
    };
    // Add other font types as needed
  };
};

type PrimaryColors = {
  primary: string;
  accent: string;
};

export const AppThemes = (primaryColors: PrimaryColors): CustomTheme => {
  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: primaryColors.primary,
      accent: primaryColors.accent,
      background: '#f6f6f6',
      surface: DefaultTheme.colors.surface, // keep the same surface color
      text: '#000000',
      error: DefaultTheme.colors.error, // keep the same error color
      surfaceDisabled: '#606061',
    },
    fonts: {
      ...DefaultTheme.fonts,
      regular: {
        fontFamily: 'Poppins_400Regular',
        fontWeight: '400', // or 'normal'
      },
      medium: {
        fontFamily: 'Poppins_500Medium',
        fontWeight: '500', // or 'medium'
      },
    },
  };
};
