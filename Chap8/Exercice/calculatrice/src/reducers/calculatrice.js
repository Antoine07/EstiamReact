import { ADD_NUMBER, MULTIPLICATION, ADDITION } from "../constants/actions";
import { sanitize } from '../actions/actions-types';

const stateInit = {
    number1: '',
    number2: '',
    result: ''
}

export default (state = stateInit, action = {}) => {

    switch (action.type) {

        case ADD_NUMBER:

            const { name, value } = action.payload;

            return {
                ...state,
                [name]: sanitize(value)
            }

        case ADDITION:

            return {
                ...state,
                result: state.number1 + state.number2,
                number1: '',
                number2: ''
            }

        case MULTIPLICATION:

            return {
                ...state,
                result: state.number1 * state.number2,
                number1: '',
                number2: ''
            }


        default:
            return state;
    }
}