import { combineReducers } from 'redux';
import denomination from './denomination';
import movies from './movies';
import errors from './errors';

export default combineReducers({
    deno : denomination,
    movies : movies,
    errors : errors
});