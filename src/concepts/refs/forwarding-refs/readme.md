## ForwardingRef

By default, each component’s DOM nodes are private. However, sometimes it’s useful to expose a DOM node to the parent—for example, to allow focusing it. Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child. To opt in, wrap your component definition into forwardRef(). You will receive a ref as the second argument after props. Pass it to the DOM node that you want to expose. See **ForwardingRef**

## ImperativeHandle

forwardRef can also be used to expose a set of methods in a functional component to the parent component when used with useImperativeHandle. See **ImperativeHandle**

## ForwardingRefInClass

We also used forwardRef with class child component so that the parent component has direct access to the child's DOM element. This is slightly tricky to implement. See **ForwardingRefInClass**

## ForwardingRefInHOC

We also used forwardRef with HOC component so that the parent component has direct access to the HOC child's DOM element. This is also slightly tricky to implement. See **ForwardingRefInHOC**
