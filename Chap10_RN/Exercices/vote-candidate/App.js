import React, { useReducer } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import Favorite  from './Favorite';

import { reducer, initialState } from './reducer';

import styles from './styles';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { candidates, count, choices } = state;
  const { choice_1, choice_2 } = candidates[count];

  if (count === (candidates.length - 1))
    return <Favorite
      choices={choices}
      reset={() => dispatch({ type: 'RESET' })}
    />;

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => dispatch({ type: 'CHOICE_1', 'choice': choice_1 })}
        >
          <Text style={styles.btn}>{choice_1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch({ type: 'CHOICE_2', 'choice': choice_2 })}
        >
          <Text style={styles.btn} >{choice_2}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default App;