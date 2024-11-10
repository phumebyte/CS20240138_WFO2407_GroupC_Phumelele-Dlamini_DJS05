# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App
## Objective
I created a basic framework for managing a simple counter state in purely Javascript as the task did not involve UI rendering, only the console. In this challenge, the program allows state management and updates through actions and notifying subscribers of any changes. It encapsulates the core principles of a state management system.

## User Stories (Gherkin Syntax)
I implemented the scenarious by subscribing to state changes and logging the state. It is important to understand the behaviour of the application and be able to monitor it, hence the importance of state logging to the console.

## Scenarios (Store Usage)
- Initial state Verification - Logs the intial state
- Incrementing - Dispatches the two 'ADD' actions to increment the count
- Decrementing - Dispatches a 'SUBTRACT' action to decrement the count
- Resetting the Counter - Dispatches a 'RESET' action to reset the count to '0'

## Role of Functional Programming principles
- Pure Functions: The reducer function is a pure function, meaning it produces the same output for the same input without side effects. This reinforces the idea of writing predictable and testable code.
- Higher-Order Functions: The createStore function is a higher-order function that returns an object with methods for interacting with the state. This illustrates how functions can be used to encapsulate behavior and manage complexity.

## Reflection
- Throughout this challenge, I faced several hurdles. Initially, I struggled with the concept of immutability and how to implement it correctly in the reducer. It took me some time to grasp that returning a new state object is essential to ensure that the previous state remains unchanged. Additionally, managing subscribers and ensuring they were notified of state changes required careful thought and implementation.
- Another challenge was ensuring that I understood the flow of data from actions to state updates. I had to keep track of how each action impacted the state and how the reducer processed these actions. This required a lot of practice and attention to detail. <br>

In conclusion, this challenge was a valuable stepping stone in understanding foundational skills in functional programming and state management, although still a bit foggy, I am excited to build upon these foundations and apply these concepts confidently in the future.
