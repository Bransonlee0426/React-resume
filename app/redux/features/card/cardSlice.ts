'use client'; //this is a client side component

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Type_api_card } from '../../../redux/api/card/interface';

export interface CardState {
  cardData: Type_api_card;
}

const initialState: CardState = {
  cardData: {
    message: '',
    people: [],
  },
};

export const cardSlice = createSlice({
  name: 'card_slice',
  initialState,
  reducers: {
    setCardData: (state, action: PayloadAction<Type_api_card>) => {
      state.cardData = action.payload;
    },
  },
});

export const { setCardData } = cardSlice.actions;
export default cardSlice.reducer;
