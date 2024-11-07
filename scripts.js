class Counter {
    // Constructor initializes the counter with an initial state
    constructor() {
        this.state = { count: 0 };
        this.listeners = [];
    }

    // Get the current state of the counter
    getState() {
        return this.state;
    }

    // Subscribe a listener function to be called whenever the state changes
    subscribe(listener) {
        this.listeners.push(listener);

        // return an unsubscribe function to remove the listener
        return () => {
            if (Array.isArray(this.listeners)) {
                this.listeners = this.listeners.filter(l => l !== listener);
            }
        };
    }

        // Dispatch action to update the state
        dispatch(action) {
            // Check the type of the action and update the state accordingly
            if (action.type === 'ADD') {
                this.state = { count: this.state.count + 1 };
            }
            else if(action.type === 'SUBTRACT'){
                this.state = { count: this.state.count - 1 };
            }
            else if(action.type === 'RESET'){
                this.state = { count: 0 };
            }
            // Call all subscribed listener functions with the updated state
            this.listeners.forEach((listener) => listener());
        }
    }



// Create a new counter instance
const counter = new Counter();

// Subscribe a listener to the counter that will log the state whenever it changes
counter.subscribe(() => console.log(store.getState()));

// Dispatch an 'add' action to the counter, which will increment the count to 1
counter.dispatch({ type: 'ADD' }); // { count: 1 }

// Dispatch another 'add' action to the counter, which will increment the count to 2
counter.dispatch({ type: 'ADD' }); // { count: 2 }

// Dispatch a 'subtract' action to the counter, which will decrement the count to 1
counter.dispatch({ type: 'SUBTRACT' }); // { count: 1 }

// Dispatch a 'reset' action to the counter, which will set the count to 0
counter.dispatch({ type: 'RESET' }); // { count: 0 }
