import { SET_AMOUNT } from '../constants/actions';

export const setAmount = payload => {

    return {
        type : SET_AMOUNT, payload
    }
}