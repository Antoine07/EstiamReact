const initialState = {
    candidates: [
      { choice_1: "Alan", choice_2: "Juliette" },
      { choice_1: "Phi", choice_2: "Bernard" },
      { choice_1: "Lisa", choice_2: "Elise" },
      { choice_1: "Cecilia", choice_2: "Alice" },
    ],
    choices: [],
    count: 0,
  };
  
const reducer = (state, action) => {

    switch (action.type) {
  
      case 'CHOICE_1':
      case 'CHOICE_2':
  
        return {
          ...state,
          choices: [...state.choices, action.choice],
          count: state.count + 1
        }
  
      case 'RESET':
  
        return { ...initialState }
  
      default:
        return state;
    }
  }

export { reducer, initialState };