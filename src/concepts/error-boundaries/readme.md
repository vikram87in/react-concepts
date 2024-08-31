# Error Boundary as class component

The ErrorBoundary catch errors in their child component(s), during the rendering phase, and in lifecycle methods. Errors thrown in any of the child components of an error boundary will be delegated to the closest error boundary in the component tree.

In contrast, error boundaries do not catch errors for, or that occur in:

* Event handlers: Unlike the render method and lifecycle methods, the event handlers don’t happen during rendering. So if they throw, React still knows what to display on the screen.
* Asynchronous code
* Server-side rendering
* Errors thrown in the error boundary itself

There are a few rules to follow for a component to act as an error boundary:

* It must be a class component
* It must define one or both of the lifecycle methods static getDerivedStateFromError() or componentDidCatch()
* The rule of thumb is that static getDerivedStateFromError() should be used to render a fallback UI after an error has been thrown, while componentDidCatch() should be used to log those error(s).


# Functional Components:

## Premise:

For Functional components, we create **FunctionalComponent**. We call Greeting and Farewell components inside FunctionalComponent. **Farewell** and **Greeting** has code that will throw an error. To handle that gracefully, we wrap the code of both these components inside try-catch. It worked. But it's not feasible to wrap the code of every component inside a try-catch. Instead we would want to wrap the parent component itself in the try-catch so that all the errors that are thrown in the descendant components are also handled at one place. So, we wrapped the code of **FunctionalComponent** in the try-catch and removed try-catch from Greeting and Farewell.

## Problem:

Unfortunately, this solution doesn't work. The reason is that we are not calling the Greeting and Farewell components from the FunctionalComponent. It's react that does that. In normal javascript, we call other functions from a function and that's why the concept of wrapping just the calling function handles all the errors thrown in the called functions (imperative way of code). In react, it's more of declarative way of code where we just tell react to render those components whenever the parent component is rendered. How to do that is on react. So, try-catch solution doesn't work here as it only works with imperative code. We need some declarative way to handle errors.

## react-error-boundary package:

We used react-error-boundary npm package to use ErrorBoundaries in functional component. In **ReactErrorBoundary** we wrapped the Greeting and Farewell components inside an ErrorBoundary. Whenever user entered 'bomb' in the text field, an error would get thrown in the Farewell component and the error would be propogated to the nearest error boundary. **ErrorBoundary** uses props: *FallbackComponent* and *onReset*. The ErrorFallback uses props: *error* and *resetErrorBoundary*. I suppose all the prop names afore-mentioned have to be called with these names only other wise they might not work

### Meaning of props:

**FallbackComponent:** The component to load as a fallback when any error occurs
**onReset:** The function that needs to be called to reset the error state. This is the function that gets called when *resetErrorBoundary* prop function is called inside *ErrorFallback*
**error:** This prop is automatically retrieved by the fallback component when any error is thrown.
**resetErrorBoundary:** This props is also automatically retrieved by the fallback component and behind the scenes calls the *onReset* function that was set on the *ErrorBoundary*.

## ReactErrorBoundaryAdvanced

ReactErrorBoundaryAdvanced is a more advanced usecase where we try to catch errors in async functions and show the errorboundary. One approach uses *showBoundary* from *useErrorBoundary* hook provided by react-error-boundary. Another approach is setting error (with useState) and whenever there is an error, throw that error so that error boundary is called. 