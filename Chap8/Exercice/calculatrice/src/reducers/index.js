import { combineReducers } from 'redux'; 

import calculatrice from './calculatrice';
import memory from './memory';

export default combineReducers({ calculatrice, memory });