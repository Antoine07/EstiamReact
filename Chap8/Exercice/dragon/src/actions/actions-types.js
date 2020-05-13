import { REVERSE, DELETE } from '../constants/actions';

export const reverse = () => {

    return {
        type : REVERSE
    }
}

export const destroy = dragon => {

    return {
        type : DELETE, dragon : dragon 
    }
}

// export const destroy = payload => {

//     return {
//         type : DELETE, payload
//     }
// }