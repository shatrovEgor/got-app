import { combineReducers } from 'redux';
import dataCard from './slices/dataCard';
import filters from './slices/filters';

const reducer = combineReducers({
  filters: filters,
  dataCards: dataCard,
});

export default reducer;
