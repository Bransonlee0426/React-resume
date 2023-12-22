'use client'; //this is a client side component

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../redux/api/user/interface';

export interface UserState {
  userData: User;
}

const initialState: UserState = {
  userData: {
    id: '',
    name: '',
    position: '',
    first_name: '',
    experience: [],
    skills: [],
    place: '',
    email: '',
    phone: '',
    profile: '',
    education: '',
  },
};

export const userSlice = createSlice({
  name: 'user_slice',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
