import { createStackNavigator } from '@react-navigation/stack';
import { AppNavigatorParamsList, AppRoutes } from '_types';
import React from 'react';

const StackApp = createStackNavigator<AppNavigatorParamsList>();

const AppNavigator = () => {
  return (
    <StackApp.Navigator
      initialRouteName={AppRoutes.Home}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <></>
    </StackApp.Navigator>
  );
};

export default AppNavigator;
