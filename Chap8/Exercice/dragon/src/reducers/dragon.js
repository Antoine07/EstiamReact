import { ADD_DRAGON, DRAGON, REVERSE, DELETE } from "../constants/actions";

const stateInit = {
    dragons: ["Apalala", "Balaur", "Bolla"],
    count: 0,
    dragon: '',
    message : ''
}

// reducer <=> Algorithmique de votre store
export default (state = stateInit, action = {}) => {

    console.log('source de verite', stateInit); // pour vérifier que le stateInit ne change pas
    let dragons ;

    switch (action.type) {

        case DRAGON:
            return {
                ...state,
                dragon: action.dragon,
                message : ''
            }

        case ADD_DRAGON:

            if( state.dragons.find( dragon => dragon == state.dragon)  ){

                return { ...state, message : 'désolé mais ce dragon existe déjà' }
            }

            dragons = [...state.dragons, state.dragon];
            const count = dragons.length;
            // state.dragons.push(state.dragon) // Ne faites pas ça car cela modifie le state initial source de vérité

            return {
                ...state,
                count: count,
                dragons: dragons,
                dragon: '', // mise à jour du champ de saisi
                message : 'success add dragon'
            }

        case REVERSE:
            dragons = [ ...state.dragons ];
            dragons.reverse();

            return { ...state, dragons: dragons }

        case DELETE:

            // console.log(action.dragon);
            dragons = state.dragons.filter( dragon => dragon != action.dragon ) ;

            return { ...state, dragons : dragons, count : dragons.length  }

        default:
            return state;
    }
}