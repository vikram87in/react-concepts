## Differences between useRef and createRef

- The difference is that *createRef* will always create a new ref. In a class-based component, you would typically put the ref in an instance property during construction (e.g. this.input = createRef()) so they can be referenced throughout the component. You don't have this option in a function component. In functional components, *useRef* takes care of returning the same ref each time as on the initial rendering.
- *useRef* is a hook and *createRef* is a function
- *useRef* persists the exiting ref and save it's value across re-renders. *createRef* creates a new ref for every render and doesn't persist the existing ref.
- *useRef* is suitable for functional components. *createRef* is suitable for class components where hooks cannot be used.


## Refs in Class components

Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component. Few points to note:

- When the ref attribute is used on an HTML element, the ref created in the constructor with React.createRef() receives the underlying DOM element as its current property.
- When the ref attribute is used on a custom class component, the ref object receives the mounted instance of the component as its current.
- You may **not** use the ref attribute on function components because they don’t have instances. If there is a need to use the ref attribute on functional component, the F component needs to be exported using **forwardRef** (possibly in conjunction with **useImperativeHandle**)


Ref in class components (using createRef) is more commonly used to interact with DOM elements directly, not to store data across re-renders. If we want some data to persist across re-renders, we can use instance variables instead. Class components maintain the this keyword, which you can use to store variables that can persist across re-renders.

Ref in class component can also be created using callback method which gives more fine-grain control over when refs are set and unset. See **CallbackRefInClass**. (No need to access .current here)


Note: Refs cannot be passed as props to the child components directly.