import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { setAmount, calculTokens } from '../actions/actions-types';


const Tokens = ({ tokens }) => {

    const { amount } = tokens.shift();

    console.log(amount)

    return (
        <View>
            <Text>Liste des tokens : {amount}</Text>
            {tokens.map((token, i) => <Text style={styles.item} key={i}>{token.denomination} count : {token.count}</Text>)}
        </View>
    );
}

const Denomination = props => {
    const dispatch = useDispatch(); // Redux Hook
    // préparation des propriétés du store Redux denomination
    const { denominations, tokens, amount, message } = useSelector(state => {
        return {
            denominations: state.deno.denominations,
            tokens: state.deno.tokens,
            amount: state.deno.amount,
            message: state.deno.message
        }
    });

    return (
        <View style={styles.header}>
            <View>
                <Text>Liste des tokens :</Text>
                {denominations.map((token, i) => <Text style={styles.item} key={i}>{token}</Text>)}
            </View>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => dispatch(calculTokens())}
            >
                <Text style={styles.btnNav}>Calcul token(s) </Text>
            </TouchableOpacity>
            <TextInput
                keyboardType="number-pad"
                placeholder="Amount"
                style={styles.input}
                onChangeText={text => dispatch(setAmount(text))}
                value={amount.toString()}

            />
            {message !== '' && <Text> {message} </Text>}
            { message === '' && tokens.length > 0 && <Tokens tokens={tokens} />}


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
    item: {
        padding: 2
    }
});

export default Denomination;
