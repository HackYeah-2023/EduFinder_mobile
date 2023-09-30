import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigator, AuthNavigator } from '_navigations';
import { Start } from '_screens';
import { RootNavigatorParamsList, RootRoutes } from '_types';
import { useState } from 'react';

const RootStack = createNativeStackNavigator<RootNavigatorParamsList>();

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //   const authorised = useAppSelector(state => state.auth.authorised);
  const authorised = true;

  if (isLoading) {
    return <Start setIsLoading={setIsLoading} />;
  }

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {authorised ? (
        <RootStack.Screen
          name={RootRoutes.AppNavigation}
          component={AppNavigator}
        />
      ) : (
        <RootStack.Screen
          name={RootRoutes.AuthNavigation}
          component={AuthNavigator}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
