import { 
    ADD_NUMBER, 
    ADDITION, 
    MULTIPLICATION, 
    SET_MEMORY,
    ADD_MEMORY
} from '../constants/actions';

export const set = payload => {

    return {
        type : ADD_NUMBER, payload
    }
}

export const addition = () => {

    return {
       type : ADDITION
    }
}


export const multiplication = payload => {

    return {
       type : MULTIPLICATION
    }
}


// reducer memory

export const setMemory = () => {

    return {
       type : SET_MEMORY
    }
}


export const addMemory = payload => {

    return {
       type : ADD_MEMORY, payload
    }
}

// fonctions utiles
export const sanitize = value => {

    return isNaN(value) || value == '' ? '' : parseInt(value)
}