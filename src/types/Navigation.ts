export enum RootRoutes {
  Start = 'Start',
  AuthNavigation = 'AuthNavigation',
  AppNavigation = 'AppNavigation',
}

export enum AppRoutes {
  Home = 'Home',
  Settings = 'Settings',
}

export enum AuthRoutes {
  Login = 'Login',
  Register = 'Register',
}

export type RootNavigatorParamsList = {
  [RootRoutes.Start]: undefined;
  [RootRoutes.AuthNavigation]: undefined;
  [RootRoutes.AppNavigation]: undefined;
};

export type AppNavigatorParamsList = {
  [AppRoutes.Home]: undefined;
  [AppRoutes.Settings]: undefined;
};

export type AuthNavigatorParamsList = {
  [AuthRoutes.Login]: undefined;
  [AuthRoutes.Register]: undefined;
};
