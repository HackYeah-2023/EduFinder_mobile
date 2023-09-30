import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Colors } from '_styles';

export const themes = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.LIGHTBLUE,
      background: Colors.FULLWHITE,
      card: Colors.BLUE,
      text: Colors.FULLBLACK,
      border: Colors.FULLBLACK,
      notification: Colors.RED,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      primary: Colors.DARKBLUE,
      background: Colors.FULLBLACK,
      card: Colors.BLUE,
      text: Colors.FULLWHITE,
      border: Colors.FULLWHITE,
      notification: Colors.RED,
    },
  },
};
