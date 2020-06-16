import React, { useContext } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { SchoolContext, findStudent } from '../store/SchoolProvider';

import styles from '../styles';

const AbscenceScreen = ({ navigation, route }) => {
  const [state, dispatch] = useContext(SchoolContext);
  const { id, name } = route.params.student;
  const { attendance } = findStudent(id, state.students);

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
    </SafeAreaView>
  );
}

export default AbscenceScreen;