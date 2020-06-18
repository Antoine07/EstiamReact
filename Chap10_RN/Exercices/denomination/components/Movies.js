import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../actions/actions-types';

const Movies = props => {
    const dispatch = useDispatch(); // Redux Hook

    // préparation des propriétés du store Redux denomination
    const { movies, isLoading, showMovies } = useSelector(state => {
        return {
            movies: state.movies.movies.movies,
            isLoading: state.movies.isLoading,
            showMovies: state.movies.showMovies
        }
    });

    if (showMovies)
        return (
            <View style={{ flex: 1, padding: 24 }}>
                <FlatList
                    data={movies}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.title}, {item.releaseYear}</Text>
                    )}
                />
            </View>
        );

    return (
        <>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => dispatch(fetchMovies())}
            >
                <Text style={{ fontWeight: "bold" }}>films</Text>
            </TouchableOpacity>
            {
                isLoading &&
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    btn: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginTop: 10
    },
});

export default Movies;