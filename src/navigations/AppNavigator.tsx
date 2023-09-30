import { createStackNavigator } from '@react-navigation/stack';
import { Home, SchoolsSearch } from '_screens';
import { AppNavigatorParamsList, AppRoutes } from '_types';
import React from 'react';

const StackApp = createStackNavigator<AppNavigatorParamsList>();

const AppNavigator = () => {
  return (
    <StackApp.Navigator
      initialRouteName={AppRoutes.SchoolsSearch}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <StackApp.Screen
        name={AppRoutes.SchoolsSearch}
        component={SchoolsSearch}
      />
      <StackApp.Screen name={AppRoutes.Home} component={Home} />
    </StackApp.Navigator>
  );
};

export default AppNavigator;
