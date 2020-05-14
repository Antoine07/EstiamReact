import { ADD_NUMBER, ADDITION, MULTIPLICATION } from '../constants/actions';

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

export const sanitize = value => {

    return isNaN(value) || value == '' ? '' : parseInt(value)
}