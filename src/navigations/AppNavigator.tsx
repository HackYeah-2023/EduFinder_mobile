import { createStackNavigator } from '@react-navigation/stack';
import { Calculator, Details, Home, SchoolsSearch } from '_screens';
import { AppNavigatorParamsList, AppRoutes } from '_types';
import React from 'react';

const StackApp = createStackNavigator<AppNavigatorParamsList>();

const AppNavigator = () => {
  return (
    <StackApp.Navigator
      initialRouteName={AppRoutes.Calculator}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <StackApp.Screen
        name={AppRoutes.SchoolsSearch}
        component={SchoolsSearch}
      />
      <StackApp.Screen name={AppRoutes.Home} component={Home} />
      <StackApp.Screen name={AppRoutes.Details} component={Details} />
      <StackApp.Screen name={AppRoutes.Calculator} component={Calculator} />
    </StackApp.Navigator>
  );
};

export default AppNavigator;
