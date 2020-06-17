import { SET_AMOUNT } from '../constants/actions';

const initialState ={
    denominations : [100, 50, 20, 10, 5, 1],
    amount : ''
}

export default (state= initialState, action ={}) => {

    switch(action.type){

        // Champ input control de la saisie
        case SET_AMOUNT:


            return { 
                ...state, 
                amount : action.payload
            }

        default :
            return { ...state }
    }
}