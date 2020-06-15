import React, { useReducer } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

const Favorite = ({ choices, reset }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 50 }}>
        <FlatList
          data={choices}
          renderItem={({ item, index }) => <Text style={styles.btn} >{index + 1} - {item}</Text>}
          keyExtractor={ index => index  }
        />
        <TouchableOpacity
          onPress={reset}
        >
          <Text style={styles.btnReset}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const initialState = {
  candidates: [
    { choice_1: "Alan", choice_2: "Juliette" },
    { choice_1: "Phi", choice_2: "Bernard" },
    { choice_1: "Lisa", choice_2: "Elise" },
    { choice_1: "Cecilia", choice_2: "Alice" },
  ],
  choices: [],
  count: 0,
};

const reducer = (state, action) => {

  switch (action.type) {

    case 'CHOICE_1':
    case 'CHOICE_2':

      return {
        ...state,
        choices: [...state.choices, action.choice],
        count: state.count + 1
      }

    case 'RESET':

      return { ...initialState }

    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { candidates, count, choices } = state;
  const { choice_1, choice_2 } = candidates[count];

  console.log(choices, count);

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    textAlign: 'center',
    marginTop: 50
  },
  btn: {
    color: 'black',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    textAlign: 'center',
    backgroundColor: '#f9c2ff'
  },
  btnReset: {
    color: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    textAlign: 'center',
    backgroundColor: '#333'
  }
});
