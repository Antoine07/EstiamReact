import { INCREMENT, DECREMENT, INCREMENT_10, DECREMENT_10} from '../constants/actions';

export const increment = () => {

    return {
        type : INCREMENT
    }
}

export const decrement = () => {

    return {
        type : DECREMENT
    }
}

export const increment_10 = () => {

    return {
        type : INCREMENT_10
    }
}

export const decrement_10 = () => {

    return {
        type : DECREMENT_10
    }
}