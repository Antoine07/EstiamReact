import React, { useContext } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Picker
} from 'react-native';

import { SchoolContext, findStudent, selectedMention } from '../store/SchoolProvider';

import styles from '../styles';

const AbscenceScreen = ({ navigation, route }) => {
  const [state, dispatch] = useContext(SchoolContext);
  const { id, name } = route.params.student;

  
  // refresh 
  const { attendance } = findStudent(id, state.students);
  const mention = selectedMention(id, state.behaviours);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.btnNav}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => dispatch({ type: 'INCREMENT_ATTENDANCE', id: id, count: 1 })}
      >
        <Text style={styles.btnNav}>Incrémente abscence + 1 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => dispatch({ type: 'DECREMENT_ATTENDANCE', id: id, count: -1 })}
      >
        <Text style={styles.btnNav}>Incrémente abscence - 1 </Text>
      </TouchableOpacity>
      <View>
        <Text>Abscence de  : {name}, nombre d'abscence : {attendance} </Text>
      </View>
      <Picker
        selectedValue={ `${mention}` }
        style={{ width: 150, height: 50 }}
        onValueChange={(itemValue, itemIndex) => dispatch({
          type : 'MENTION', id : id , mention : itemValue })}
      >
        <Picker.Item label="Aucune" value="Aucune" />
        <Picker.Item label="A" value="A" />
        <Picker.Item label="B" value="B" />
      </Picker>
    </SafeAreaView>
  );
}

export default AbscenceScreen;