import { SET_AMOUNT, CALCUL_TOKENS, RESET, GET_HISTORY } from '../constants/actions';

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

export const getHistory = () => {
    return {
        type: GET_HISTORY
    };
}

export const fetchHistory = () => {

    return dispatch => {
        setTimeout(() => {
            dispatch(getHistory());
        }, 2000);
    };
}