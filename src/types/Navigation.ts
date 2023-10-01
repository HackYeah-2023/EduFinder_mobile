export enum RootRoutes {
  Start = 'Start',
  AuthNavigation = 'AuthNavigation',
  AppNavigation = 'AppNavigation',
}


export enum AppRoutes {
  Home = 'Home',
  Settings = 'Settings',
  SchoolsSearch = 'SchoolsSearch',
  Details = 'Details',
  Calculator = "Calculator"
}

export enum AuthRoutes {
  Login = 'Login',
  Register = 'Register',
  LandingPage = 'LandingPage',
}

export type RootNavigatorParamsList = {
  [RootRoutes.Start]: undefined;
  [RootRoutes.AuthNavigation]: undefined;
  [RootRoutes.AppNavigation]: undefined;
};

export type AppNavigatorParamsList = {
  [AppRoutes.Home]: undefined;
  [AppRoutes.Settings]: undefined;
  [AppRoutes.SchoolsSearch]: undefined;
  [AppRoutes.Details]: undefined;
  [AppRoutes.Calculator]: undefined;
};

export type AuthNavigatorParamsList = {
  [AuthRoutes.Login]: undefined;
  [AuthRoutes.Register]: undefined;
  [AuthRoutes.LandingPage]: undefined;
};
