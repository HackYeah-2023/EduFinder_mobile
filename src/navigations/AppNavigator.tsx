import { createDrawerNavigator } from '@react-navigation/drawer';
import { Account, Home, SchoolsSearch, Settings } from '_screens';
import { AppRoutes } from '_types';
import React from 'react';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={AppRoutes.SchoolsSearch}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Drawer.Screen name={AppRoutes.SchoolsSearch} component={SchoolsSearch} />
      <Drawer.Screen name={AppRoutes.Home} component={Home} />
      <Drawer.Screen name={AppRoutes.Settings} component={Settings} />
      <Drawer.Screen name={AppRoutes.Account} component={Account} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
