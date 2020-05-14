import { INCREMENT_10, DECREMENT_10 } from "../constants/actions";

const stateInit = {
    count: 0
}

// reducer <=> Algorithmique de votre store
export default (state = stateInit, action = {}) => {

    switch (action.type) {

        case INCREMENT_10:

            return { ...state, count: state.count + 10 }

        case DECREMENT_10:

            return { ...state, count: state.count - 10 }


        default:
            return state;
    }
}