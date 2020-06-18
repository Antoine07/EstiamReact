import { ERROR_FETCH_MOVIES } from '../constants/actions';

const initialState = {
    errors: []
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case ERROR_FETCH_MOVIES:

            return {
                ...state,
                errors: state.errors.concat(action.payload)
            }

        default:
            return { ...state }

    }
}