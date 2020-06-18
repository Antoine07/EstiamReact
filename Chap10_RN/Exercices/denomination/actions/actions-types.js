import { 
    ERROR_FETCH_MOVIES,
    SET_AMOUNT, 
    CALCUL_TOKENS, 
    RESET, 
    GET_HISTORY, 
    GET_MOVIES,
    LOADING
} from '../constants/actions';

export const setAmount = payload => {

    return {
        type: SET_AMOUNT, payload
    }
}

export const calculTokens = () => {

    return {
        type: CALCUL_TOKENS
    }
}

export const reset = () => {

    return {
        type: RESET
    }
}

// Asynchrone
export const getHistory = () => {
    return {
        type: GET_HISTORY
    };
}

export const fetchHistory = () => {

    return dispatch => {
        setTimeout(() => {
            dispatch(getHistory());
        }, 2000);
    };
}

export const getMovies = payload => {
    return {
        type: GET_MOVIES, payload
    };
}

// Une promesse avec un délais 2secondes
const promiseLoading = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(false)
    }, 2000);
})

// async/await
export const fetchMovies = () => {

    return async dispatch => {
        try {
            // synchrone 
            // On simule une attente
            dispatch({type : LOADING, isLoading : true });
            const isLoading = await promiseLoading(); // renvoie false au bout de 2 secondes
            
            const response = await fetch('https://reactnative.dev/movies.json');
            const movies = await response.json();

            dispatch( {type : LOADING, isLoading : isLoading });
            dispatch(getMovies(movies));

        } catch (error) {
            dispatch({
                type : ERROR_FETCH_MOVIES, error : error
            })
        }
    };
}