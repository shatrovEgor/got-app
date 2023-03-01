import { combineReducers } from 'redux';
import filters from './slices/filters';

const reducer = combineReducers({
  filters: filters,
});

export default reducer;
