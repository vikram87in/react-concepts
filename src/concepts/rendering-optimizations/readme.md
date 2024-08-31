There is a parent component 'ReactMemoComponent' and a child class component 'Child'. Normally, when there the state of parent updates, the parent rerenders and so the child rerenders too.
But if we want some optimization so that the child doesn't render when the props don't change, then we can use PureComponent like 'PureChild'. or React.memo for functional component 'PureChildFunction'. React.memo is an alternative of PureComponent for a functional component.


Now, we passed a function 'demoFun' as a prop in the 'BreakingReactMemo'. It broke our optimization and the child component is still rerendering even when the props are not changing. Actually, it looks like the props aren't changing but actually a new function is created in the parent component on every render and so everytime the child receives a different function instance (even though the body is exactly the same). Doesn't matter if the function is called inline like this: 

```js
demoFun={() => { console.log('haha'); }}
```

or if the demoFun is defined like a normal function: 

```js
function demoFun() { ....
```
So, we make a different copy of 'demoFun' by commenting earlier one and in the new copy, we use 'useCallback'. This is a react hook whose purpose is to return the same function (same function instance) if the dependency array is empty, or if the variables mentioned in the dependency array did not change across the rerenders. Now, when we used the useCallback, the child gets the same instance of the function in the props and so it knows that it can avoid rerendering.

Note: this scenario of different function instance is visible in functional component only. When we use the class component 'BreakingReactMemo', we don't get into that scenario and hence useCallback is not needed (infact it isn't even allowed). In class components, instance methods are defined using the class fields syntax instead of functions. These instance methods are created only once when the component is instantiated, and it has the same reference for every render.

Also note that using useCallback (or React.memo, or PureComponent) has a cost, and is not always necessary. In many cases, passing a new function instance as a prop is perfectly fine and will not lead to performance problems. You should only optimize this if you are experiencing actual performance issues that are traced back to unnecessary re-renders. Premature optimization can lead to more complex code and may even reduce performance instead of improving it.