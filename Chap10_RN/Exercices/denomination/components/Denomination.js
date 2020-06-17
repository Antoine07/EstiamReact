import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useStore } from 'react-redux';

const Denomination = props => {

    const dispatch = useDispatch();
    const store = useStore()

    const { denomination } = store.getState();

    console.log(denomination)

    return (
        <View><Text>A vous de jouer ...</Text></View>
    );
}
export default Denomination;