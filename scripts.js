/* Initial state */
const initialState = { count: 0 };

/* Action creators */
const add = () => ({ type: "ADD" });
const subtract = () => ({ type: "SUBTRACT" });
const reset = () => ({ type: "RESET" });

/* Reducer function */
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD":
        return { count: state.count + 1 };
      case "SUBTRACT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        return state;
    }
};
  