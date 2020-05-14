import { combineReducers } from 'redux'; 

import counter from './counter';
import counter_10 from './counter_10';

// pour le store combiné voyez ce qui suit

// vous pouvez nommer vos reducers dans le combineReducer dans ce cas a.count ou b.count pour y accéder
// export default combineReducers({ a : counter, b : counter_10 });

// dans l'exemple suivant counter.count et counter_10.count
export default combineReducers({ counter, counter_10 });