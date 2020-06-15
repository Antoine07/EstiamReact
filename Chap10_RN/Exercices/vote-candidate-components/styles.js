import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        textAlign: 'center',
        marginTop: 50
    },
    btn: {
        color: 'black',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        textAlign: 'center',
        backgroundColor: '#f9c2ff'
    },
    btnReset: {
        color: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        textAlign: 'center',
        backgroundColor: '#333'
    }
});

export default styles;