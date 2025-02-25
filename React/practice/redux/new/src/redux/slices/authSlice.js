import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: 0,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.user = 0
    },
    loginSuccess: (state) => {
      state.loading = false;
      state.user = 1;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.user = 0;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = 0;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
