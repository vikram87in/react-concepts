# About this Higher-Order Component (HOC) pattern in React

A Higher-Order Component (HOC) is a design pattern in React. It is a function that takes a component and returns a new component with additional props or behaviors.

## ConditionalWrapper

In this context, `ConditionalWrapper` is a HOC that conditionally wraps its children in a wrapper component. It accepts three props:

- `condition`: A boolean that determines whether the children should be wrapped.
- `wrapper`: A function that takes the children and returns a new component that wraps the children.
- `children`: The children to be potentially wrapped.

### Behavior

If `condition` is true, `ConditionalWrapper` returns the result of calling `wrapper` with `children` as an argument. This means the children are wrapped in whatever component `wrapper` returns.

If `condition` is false, `ConditionalWrapper` simply returns `children` as is, without any additional wrapping.