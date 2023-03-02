// third-party
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardInfo } from '../../types/cardType';

// project imports
import { dispatch } from '../index';

const initialState = {
  dataCards: [] as CardInfo[],
  currentCard: null as CardInfo | null,
};

const slice = createSlice({
  name: 'cardsData',
  initialState,
  reducers: {
    fillCardData(state, action: PayloadAction<CardInfo[]>) {
      state.dataCards = action.payload;
    },
    deleteCard(state, action: PayloadAction<string>) {
      const newArr = state.dataCards.filter((elem) => elem.url !== action.payload);
      state.dataCards = newArr;
    },
    selectCard(state, action: PayloadAction<string>) {
      const currentCard = state.dataCards.find((elem) => elem.url === action.payload);
      if (currentCard) {
        state.currentCard = currentCard;
      }
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function fillCardData(data: CardInfo[]) {
  return () => {
    dispatch(slice.actions.fillCardData(data));
  };
}

export function deleteCard(data: string) {
  return () => {
    dispatch(slice.actions.deleteCard(data));
  };
}

export function selectCard(data: string) {
  return () => {
    dispatch(slice.actions.selectCard(data));
  };
}
