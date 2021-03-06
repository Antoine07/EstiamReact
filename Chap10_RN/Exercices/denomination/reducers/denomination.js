import { SET_AMOUNT, CALCUL_TOKENS, RESET, GET_HISTORY } from '../constants/actions';

const initialState = {
    denominations: [100, 50, 20, 10, 5, 1],
    tokens: [],
    amount: '',
    message: '',
    history: [],
    showHistory : false
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        // Champ input control de la saisie
        case SET_AMOUNT:
            const amount = action.payload;

            if (Number.isNaN(amount) === true) amount = '';

            return {
                ...state,
                amount: amount,
                tokens: [],
                message: ''
            }

        case CALCUL_TOKENS:

            if (!state.amount)
                return {
                    ...state,
                    message: "Attention le champ est vide "
                }

            let count = 0;
            state.tokens = [
                { 'amount': state.amount }
            ];

            for (const d of state.denominations) {

                if (parseInt(state.amount) === 0) break;

                while (state.amount >= d) {
                    state.amount -= d;
                    count++;
                }

                if (count > 0) state.tokens.push({ denomination: d, count: count });

                count = 0;
            }

            const history = state.history.concat(state.tokens);

            return {
                ...state,
                tokens: state.tokens,
                amount: '',
                history: history,
                showHistory : false
            }

        case GET_HISTORY:

            return {
                ...state,
                tokens: [],
                message: '',
                showHistory : !state.showHistory
            }

        case RESET:

            return { ...state, message: '', tokens: [] }

        default:
            return { ...state }
    }
}