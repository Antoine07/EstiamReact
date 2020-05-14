import { INCREMENT, DECREMENT } from "../constants/actions";

const stateInit = {
    count: 0
}

// reducer <=> Algorithmique de votre store
export default (state = stateInit, action = {}) => {

    switch (action.type) {

        case INCREMENT:

            return { ...state, count: state.count + 1 }

        case DECREMENT:

            return { ...state, count: state.count - 1 }


        default:
            return state;
    }
}