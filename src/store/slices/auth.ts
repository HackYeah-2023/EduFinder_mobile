import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EduApp } from '_services/index';

interface AuthState {
  authorised: boolean;
  nameId: string;
  email: string;
  labelId: string;
  hasLabel: boolean;
  hasContract: boolean;
  language: string;
}

const initialState: AuthState = {
  authorised: false,
  nameId: '',
  email: '',
  labelId: '',
  hasLabel: false,
  hasContract: false,
  language: '',
};

export interface LoginAction {
  nameId: string;
  email: string;
  labelId: string | undefined;
  hasLabel: boolean;
  hasContract: boolean;
  language: string | undefined;
}

export interface AddLabelAction {
  labelId: string;
  hasLabel: boolean;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState as AuthState,
  reducers: {
    login: (state, action: PayloadAction<LoginAction>) => {
      const { nameId, email, labelId, hasLabel, hasContract, language } =
        action.payload;
      state.authorised = true;
      state.nameId = nameId;
      state.email = email;
      state.labelId = labelId || '';
      state.hasLabel = hasLabel;
      state.hasContract = hasContract;
      state.language = language || '';
    },

    logout: () => {
      console.log('logout');
      EduApp.util.resetApiState();
      return initialState;
    },

    addLabel: (state, action: PayloadAction<AddLabelAction>) => {
      const { labelId, hasLabel } = action.payload;
      state.labelId = labelId;
      state.hasLabel = hasLabel;
    },
  },
});

export const { login, logout, addLabel } = authSlice.actions;
export default authSlice.reducer;
