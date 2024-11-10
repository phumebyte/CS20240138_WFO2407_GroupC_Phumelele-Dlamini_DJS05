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

/* Store implementation */
const createStore = (reducer, initialState) => {
    let currentState = initialState;
    const subscribers = new Set();
  
    const getState = () => currentState;
    const dispatch = (action) => {
      currentState = reducer(currentState, action);
      subscribers.forEach((subscriber) => subscriber(currentState));
    };
    const subscribe = (subscriber) => {
      subscribers.add(subscriber);
      return () => subscribers.delete(subscriber);
    };
  
    return { getState, dispatch, subscribe };
  };

/* usage */
const store = createStore(reducer, initialState);

/* subscriber function state log */
store.subscribe((state) =>
    console.log("State:", state)
  ); 

/* SCENARIO 1: Initial State Verification */
console.log("SCENARIO 1: Initial State Verification");
console.log("Initial state:", store.getState());

/* SCENARIO 2: Incrementing the Counter */
console.log("SCENARIO 2: Incrementing the Counter");
store.dispatch(add());
store.dispatch(add());

/* SCENARIO 3: Decrementing the Counter */
console.log("SCENARIO 3: Decrementing the Counter");
store.dispatch(subtract());

/* SCENARIO 4: Resetting the Counter */
console.log("SCENARIO 4: Resetting the Counter");
store.dispatch(reset());