import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { setAmount } from '../actions/actions-types';

const Denomination = props => {
    const dispatch = useDispatch(); // Redux Hook
    const deno = useSelector( state => state.deno );
    const { amount } = deno;

    return (
        <View style={{ flex : 1, marginTop : 150}}>
            <TextInput
                keyboardType="number-pad"
                placeholder="Amount"
                style={{borderWidth: 2}}
                onChangeText={ text => dispatch(setAmount(text))}
                value={amount}
            />
           { amount != '' && <Text>{amount}</Text>}
        </View>
    );
}

export default Denomination;