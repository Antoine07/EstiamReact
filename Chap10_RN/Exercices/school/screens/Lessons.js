import React, { useContext } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { SchoolContext } from '../store/SchoolProvider';

import styles from '../styles';
const styleLesson = {
  flex: 1,
  flexDirection: "row"
};
const itemLesson = {
  padding: 2,
  marginBottom: 2
}

const LessonsScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(SchoolContext);
  const { lessons } = state;

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.btnNav}>Home</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.containerStudent}
        keyExtractor={ item => item.id.toString() }
        data={lessons}
        renderItem={({ item }) => {
          const { title } = item;

          return (
            <View style={[styles.item, styleLesson, { backgroundColor: '#f9c2ff'  }]}>
              <View >
                <Text style={[itemLesson, { fontWeight: "bold", fontSize : 18 }]}>{title}</Text>
              </View>
            </View>
          )
        }}
      >
      </FlatList>
    </SafeAreaView>
  );
}

export default LessonsScreen;