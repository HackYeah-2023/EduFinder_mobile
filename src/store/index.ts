import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { EduApp } from '_services/index';

import authReducer from './slices/auth';
import themeReducer from './slices/theme';

const rootReducer = combineReducers({
  [EduApp.reducerPath]: EduApp.reducer,
  auth: authReducer,
  theme: themeReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(EduApp.middleware),
    preloadedState,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
