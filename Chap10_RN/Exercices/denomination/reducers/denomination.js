import { ADD_AMOUNT } from '../constants/actions';

const initialState ={
    denominations : [100, 50, 20, 10, 5, 1]
}

export default (state= initialState, action ={}) => {

    switch(action.type){

        case ADD_AMOUNT:

            return { ...state }

        default :
            return { ...state }
    }
}