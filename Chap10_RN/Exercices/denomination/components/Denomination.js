import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { setAmount, calculTokens, fetchHistory } from '../actions/actions-types';


const Tokens = ({ tokens }) => {
    const { amount } = tokens.shift();

    return (
        <View>
            <Text>Liste des tokens : {amount}</Text>
            {tokens.map((token, i) => <Text key={i} style={styles.item} key={i}>{token.denomination} count : {token.count}</Text>)}
        </View>
    );
}

const History = ({ history }) => {

    return (
        <>
            <Text>History</Text>
            <FlatList
                style={styles.containerHistory}
                keyExtractor={index => Math.random().toString()}
                data={history}
                renderItem={({ item, index }) => {

                    if (item.amount)
                        return (
                            <Text>Amount : {item.amount}</Text>
                        );

                    return (
                        <Text>deno : {item.denomination} count : {item.count}</Text>
                    )
                }}
            />
        </>
    )
}

const Denomination = props => {
    const dispatch = useDispatch(); // Redux Hook
    // préparation des propriétés du store Redux denomination
    const { denominations, tokens, amount, message, history, showHistory } = useSelector(state => {
        return {
            denominations: state.deno.denominations,
            tokens: state.deno.tokens,
            amount: state.deno.amount,
            message: state.deno.message,
            history: state.deno.history,
            showHistory: state.deno.showHistory
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
                value={amount.toString()}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => dispatch(calculTokens())}
            >
                <Text style={styles.btnNav}>Calcul token(s) </Text>
            </TouchableOpacity>
            {message !== '' && <Text> {message} </Text>}
            {message === '' && tokens.length > 0 && <Tokens tokens={tokens} />}

            {history.length > 0 &&
                <>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => dispatch(fetchHistory())}
                    >
                        <Text style={styles.btnNav}>{showHistory ? 'Cacher' : 'Monter'} l'historique</Text>
                    </TouchableOpacity>
                    {showHistory && <History history={history} />}
                </>
            }
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
    },
    btn: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginTop: 10
    },
    containerHistory: {

    }
});

export default Denomination;
