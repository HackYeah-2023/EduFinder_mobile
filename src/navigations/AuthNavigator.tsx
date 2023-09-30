import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingPage } from '_screens';
import { AuthNavigatorParamsList, AuthRoutes } from '_types';

const StackAuth = createNativeStackNavigator<AuthNavigatorParamsList>();

const AuthNavigator = () => {
  return (
    <StackAuth.Navigator
      screenOptions={{
        animation: 'fade_from_bottom',
        headerShown: false,
      }}
      initialRouteName={AuthRoutes.LandingPage}>
      <StackAuth.Screen name={AuthRoutes.LandingPage} component={LandingPage} />
    </StackAuth.Navigator>
  );
};

export default AuthNavigator;
