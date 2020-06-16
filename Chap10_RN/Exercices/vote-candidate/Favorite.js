import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';

const Favorite = ({ choices, reset }) => {

    return (
      <SafeAreaView style={styles.container}>
        <View style={{ marginTop: 50 }}>
          <FlatList
            data={choices}
            renderItem={({ item, index }) => <Text style={styles.btn} >{index + 1} - {item}</Text>}
            keyExtractor={index => index }
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

export default Favorite;