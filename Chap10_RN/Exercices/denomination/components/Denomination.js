import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { setAmount } from '../actions/actions-types';

const Denomination = props => {
    const dispatch = useDispatch(); // Redux Hook
    // préparation des propriétés du store Redux denomination
    const { denominations, tokens, amount } = useSelector( state => {
        return {
            denominations : state.deno.denominations, 
            tokens : state.deno.tokens,
            amount : state.deno.amount
        }
    });

    return (
        <View style={styles.header}>
            <View>
                <Text>Liste des tokens :</Text>
                {denominations.map((token, i) => <Text style={styles.item} key={i}>{token}</Text>)}
            </View>
            <TextInput
                keyboardType="number-pad"
                placeholder="Amount"
                style={styles.input}
                onChangeText={text => dispatch(setAmount(text))}
                value={amount}
            />
            {amount != '' && <Text> Your amount : {amount}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 100
    },
    input: {
        height: 40, borderColor: 'gray', borderWidth: 1 
    },
    item : {
        padding : 2
    }
});

export default Denomination;
