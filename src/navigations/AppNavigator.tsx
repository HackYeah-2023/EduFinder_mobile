
import { createStackNavigator } from '@react-navigation/stack';
import { Calculator, Details, Home, SchoolsSearch } from '_screens';
import { AppNavigatorParamsList, AppRoutes } from '_types';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={AppRoutes.Calculator}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Drawer.Screen
        name={AppRoutes.SchoolsSearch}
        component={SchoolsSearch}
      />
      <Drawer.Screen name={AppRoutes.Home} component={Home} />
      <Drawer.Screen name={AppRoutes.Details} component={Details} />
      <Drawer.Screen name={AppRoutes.Calculator} component={Calculator} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
