import { GET_MOVIES, LOADING } from '../constants/actions';

const initialState = {
    movies: [],
    showMovies: false,
    isLoading: null
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case GET_MOVIES:

            return {
                ...state,
                movies: action.payload,
                showMovies: true,
                isLoading : false
            }

        case LOADING:

            return { 
                ...state,
                isLoading : action.isLoading
            }

        default:
            return { ...state }

    }
}