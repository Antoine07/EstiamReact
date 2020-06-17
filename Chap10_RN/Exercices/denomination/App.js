import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Denomination from './components/Denomination';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/index';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Denomination />
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;