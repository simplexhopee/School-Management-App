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
    displayLarge: {
      fontFamily: string;
    };
    displayMedium: {
      fontFamily: string;
    };
    displaySmall: {
      fontFamily: string;
    };
    headlineLarge: {
      fontFamily: string;
    };
    headlineMedium: {
      fontFamily: string;
    };
    headlineSmall: {
      fontFamily: string;
    };
    titleLarge: {
      fontFamily: string;
    };
    titleMedium: {
      fontFamily: string;
    };
    titleSmall: {
      fontFamily: string;
    };
    bodyLarge: {
      fontFamily: string;
    };
    bodyMedium: {
      fontFamily: string;
    };
    bodySmall: {
      fontFamily: string;
    };
    labelLarge: {
      fontFamily: string;
    };
    labelMedium: {
      fontFamily: string;
    };
    labelSmall: {
      fontFamily: string;
    };
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
        displayLarge: {
          ...DefaultTheme.fonts.displayLarge,
          fontFamily: 'Poppins_400Regular',
        },
        displayMedium: {
          ...DefaultTheme.fonts.displayMedium,
          fontFamily: 'Poppins_400Regular',
        },
        displaySmall: {
          ...DefaultTheme.fonts.displaySmall,
          fontFamily: 'Poppins_400Regular',
        },
        headlineLarge: {
          ...DefaultTheme.fonts.headlineLarge,
          fontFamily: 'Poppins_400Regular',
        },
        headlineMedium: {
          ...DefaultTheme.fonts.headlineMedium,
          fontFamily: 'Poppins_400Regular',
        },
        headlineSmall: {
          ...DefaultTheme.fonts.headlineSmall,
          fontFamily: 'Poppins_400Regular',
        },
        titleLarge: {
          ...DefaultTheme.fonts.titleLarge,
          fontFamily: 'Poppins_500Medium',
        },
        titleMedium: {
          ...DefaultTheme.fonts.titleMedium,
          fontFamily: 'Poppins_500Medium',
        },
        titleSmall: {
          ...DefaultTheme.fonts.titleSmall,
          fontFamily: 'Poppins_500Medium',
        },
        bodyLarge: {
          ...DefaultTheme.fonts.bodyLarge,
          fontFamily: 'Poppins_400Regular',
        },
        bodyMedium: {
          ...DefaultTheme.fonts.bodyMedium,
          fontFamily: 'Poppins_400Regular',
        },
        bodySmall: {
          ...DefaultTheme.fonts.bodySmall,
          fontFamily: 'Poppins_400Regular',
        },
        labelLarge: {
          ...DefaultTheme.fonts.labelLarge,
          fontFamily: 'Poppins_500Medium',
        },
        labelMedium: {
          ...DefaultTheme.fonts.labelMedium,
          fontFamily: 'Poppins_500Medium',
        },
        labelSmall: {
          ...DefaultTheme.fonts.labelSmall,
          fontFamily: 'Poppins_500Medium',
        },
       
      },
  };
};
