import { SET_MEMORY, ADD_MEMORY } from "../constants/actions";

const stateInit = {
    memory: [],
    isMemory : false
}

// reducer <=> Algorithmique de votre store
export default (state = stateInit, action = {}) => {

    switch (action.type) {

        case SET_MEMORY:

            return {
                ...state,
                isMemory : !state.isMemory
            }

        case ADD_MEMORY:

        // concat renvoie un nouveau tableau pas d'effet de bord sur le state stateInit source de vérité
            return {
                ...state,
                memory : state.memory.concat([action.payload])
            }

        default:
            return state;
    }
}