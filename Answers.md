1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 

map, filter, concat are three array/obj methods. Object.assign() is used to created a new object. 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are like events. Reducers generally use switch statements which take Actions and return a new state. Store is where data is saved - like a database. It is known as a single source of truth because every component has access to the store directly. It doesn't need to be passed down.  


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other? 

A component state is usually store locally and passed via props to sub-components. Application state maintains state for an entire application and should be used for bigger projects .

1.  What is middleware?

Middleware gives us a way to 
interact with actions that have been dispatched to the store before they reach the store's reducer like for making async requests. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is  middleware that allows you to call action creators that return a function. The function gets the store's dispatch method which is used to dispatch actions once the ansync operations are done. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect().
