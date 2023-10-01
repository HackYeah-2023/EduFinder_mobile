export enum RootRoutes {
  Start = 'Start',
  AuthNavigation = 'AuthNavigation',
  AppNavigation = 'AppNavigation',
}

export enum AppRoutes {
  Home = 'Home',
  SchoolsSearch = 'SchoolsSearch',
  Settings = 'Settings',
  Account = 'Account',
  Calculator = 'Calculator',
  Details = 'Details',
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
  [AppRoutes.Home]: {
    region?: string;
    city?: string;
    foreignLanguages?: string;
    extendedSubject?: string;
    profile?: string;
  };
  [AppRoutes.SchoolsSearch]: undefined;
  [AppRoutes.Settings]: undefined;
  [AppRoutes.Account]: undefined;
  [AppRoutes.Details]: undefined;
  [AppRoutes.Calculator]: undefined;
};

export type AuthNavigatorParamsList = {
  [AuthRoutes.Login]: undefined;
  [AuthRoutes.Register]: undefined;
  [AuthRoutes.LandingPage]: undefined;
};
