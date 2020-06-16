import React, { useContext } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';

import { SchoolContext, average } from '../store/SchoolProvider';

import styles from '../styles';

const styleStudent = {
  flex: 1,
  flexDirection: "row"
};
const itemStudent = {
  padding: 2,
  marginBottom: 2
}

const StudentsScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(SchoolContext);
  const { students } = state;

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
        onPress={() => dispatch({type : 'RESET'})}
      >
        <Text style={styles.btnNav}>Reset</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.containerStudent}
        keyExtractor={item => item.id.toString()}
        data={students}
        renderItem={({ item, index }) => {
          const { id, name, attendance, lessons, notes } = item;

          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Abscence', { student : item })}
            >
              <View style={[styles.item, styleStudent]}>
                <View style={{ width: 110 }}>
                  <Image
                    source={{ uri: `http://lorempixel.com/100/100/cats/${id}` }}
                    style={{ width: 100, height: 100, padding: 3 }}
                  />
                </View>
                <View style={{ width: 200 }}>
                  <Text style={[itemStudent, { fontWeight: "bold", fontSize: 18 }]}>{name}</Text>
                  <Text style={itemStudent}>Nombre d'abscence(s) : {attendance}</Text>
                  <Text style={itemStudent}>Nombre de cours : {lessons.length} </Text>
                  <Text style={itemStudent}>Moyenne : {average(notes)}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}


      >

      </FlatList>
    </SafeAreaView>
  );
}

export default StudentsScreen;