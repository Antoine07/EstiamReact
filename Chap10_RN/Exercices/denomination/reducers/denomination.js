import { SET_AMOUNT } from '../constants/actions';

const initialState ={
    denominations : [100, 50, 20, 10, 5, 1],
    tokens : [],
    amount : ''
}

export default (state= initialState, action ={}) => {

    switch(action.type){

        // Champ input control de la saisie
        case SET_AMOUNT:
            const amount = action.payload;

            if( Number.isNaN(amount) === true ) amount = '';

            return { 
                ...state, 
                amount : amount
            }

        default :
            return { ...state }
    }
}