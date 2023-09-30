import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '_navigations';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import i18n from './src/locales/i18n';
import { setupStore } from './src/store';

const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
