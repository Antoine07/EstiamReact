import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StudentsScreen from './screens/Students';
import LessonsScreen from './screens/Lessons';
import AbscencesScreen from './screens/Abscences';

import { SchoolProvider } from './store/SchoolProvider';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Home</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Students')}
        >
          <Text style={styles.btnNav}>Students</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Lessons')}
        >
          <Text style={styles.btnNav}>Lessons</Text>
        </TouchableOpacity>
      </View>
    </>
  )
    ;
}

const Stack = createStackNavigator();

const Nav = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Lessons" component={LessonsScreen} />
        <Stack.Screen name="Abscence" component={AbscencesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => (
  <SchoolProvider>
    <Nav />
  </SchoolProvider>
);

export default App;