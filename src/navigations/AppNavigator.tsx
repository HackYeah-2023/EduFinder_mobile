import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import { SchoolsSearch } from '_screens';
=======
import { Home } from '_screens';
>>>>>>> main
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
<<<<<<< HEAD
      <StackApp.Screen
        name={AppRoutes.SchoolsSearch}
        component={SchoolsSearch}
      />
=======
      <StackApp.Screen name={AppRoutes.Home} component={Home} />
>>>>>>> main
    </StackApp.Navigator>
  );
};

export default AppNavigator;
