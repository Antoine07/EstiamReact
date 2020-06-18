import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Denomination from './components/Denomination';
import Movies from './components/Movies';
import thunk from 'redux-thunk';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Denomination />
      <Movies />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10
  }

});

export default App;