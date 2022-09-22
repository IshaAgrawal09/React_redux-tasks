import { buy_cake } from "./CakeTypes";

export const initialState = {
  numOfCakes: 10,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case buy_cake:
      if (state.numOfCakes > 0) {
        return {
          ...state,
          numOfCakes: state.numOfCakes - 1,
        };
      } else {
        return {
          ...state,
          error: (state.error = "Can't Buy stock is Over!"),
        };
      }

    default:
      return state;
  }
};
export default reducer;
