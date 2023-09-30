import { NavigationContainer } from '@react-navigation/native';
import { themes } from '_constants';
import { RootNavigator } from '_navigations';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Appearance } from 'react-native';
import { Provider } from 'react-redux';

import i18n from './src/locales/i18n';
import { setupStore } from './src/store';

const store = setupStore();

const App = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const theme = store.getState().theme.dark;
    const subscription = store.subscribe(() => {
      const theme = store.getState().theme.dark;
      setDarkTheme(theme);
    });
    setDarkTheme(theme);
    return () => subscription();
  }, []);

  useFonts({
    'Raleway-Regular': require('./src/assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Light': require('./src/assets/fonts/Raleway-Light.ttf'),
    'Raleway-Medium': require('./src/assets/fonts/Raleway-Medium.ttf'),
    'Raleway-SemiBold': require('./src/assets/fonts/Raleway-SemiBold.ttf'),
    'Raleway-Bold': require('./src/assets/fonts/Raleway-Bold.ttf'),
  });

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer
          theme={
            darkTheme
              ? themes.dark
              : Appearance.getColorScheme() === 'dark'
              ? themes.dark
              : themes.light
          }>
          <RootNavigator />
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
