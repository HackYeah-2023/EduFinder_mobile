import { createDrawerNavigator } from '@react-navigation/drawer';
import { Calculator, Details, Home, SchoolsSearch } from '_screens';
import { AppRoutes } from '_types';

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
      <Drawer.Screen name={AppRoutes.Details} component={Details} />
      <Drawer.Screen name={AppRoutes.Calculator} component={Calculator} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
