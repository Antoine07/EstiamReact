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

const AbscenceScreen = ({ navigation, route }) => {
  const [state, dispatch] = useContext(SchoolContext);
  const { student } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      TODO ...
    </SafeAreaView>
  );
}

export default AbscenceScreen;