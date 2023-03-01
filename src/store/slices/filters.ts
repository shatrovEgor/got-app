// third-party
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// project imports
import { dispatch } from '../index';

const initialState = {
  currentFilter: 'characters' as 'characters' | 'books' | 'houses',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    selectFilter(state, action: PayloadAction<'characters' | 'books' | 'houses'>) {
      state.currentFilter = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function selectFilter(filter: 'characters' | 'books' | 'houses') {
  return () => {
    dispatch(slice.actions.selectFilter(filter));
  };
}
