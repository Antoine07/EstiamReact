import { SET_AMOUNT, CALCUL_TOKENS, RESET } from '../constants/actions';

export const setAmount = payload => {

    return {
        type: SET_AMOUNT, payload
    }
}

export const calculTokens = () => {

    return {
        type: CALCUL_TOKENS
    }
}

export const reset = () => {

    return {
        type: RESET
    }
}

// Asynchrone

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const increment = payload => {
    return {
        type: INCREMENT_COUNTER, payload
    };
}

let interval = null;

export const incrementAsync = payload => {
    return (dispatch) => {

        clearInterval(interval);

        interval = setInterval(() => {

            dispatch(increment(payload));
        }, 2000);
    };
}