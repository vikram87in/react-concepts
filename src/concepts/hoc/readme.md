
# Intro

There is a basic component **FunctionChildComponent** which takes some text as a prop and displays it. Simple enough! Now there is a requirement that when the user hovers on the text, it should change color. One solution would be to make the changes in the original component itself (FunctionChildComponent).

But if we want such types of changes for cross-cutting concerns, we usually don't want to make changes in the original component. Instead, we create an enhanced component from the original component with the help of HOCs. HOC (Higher order component) is simply a function (pure function to be precise), that takes a component and returns a new enhanced component. A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

So, we create an HOC **withHoverColorChangeHOC** which added the functionality of changing color on hover without changing/updating the original component. In the ParentComponent, we created **HoverableComponent** with the help of the HOC and used it. We can see, that the FunctionChildComponent behaves like earlier and the HoverableComponent behaves just like FunctionChildComponent but have an additional feature of changing color on hover.

# Next steps

- Next step would be to experiment switching between class components and functional components. Tried doing it. Converted the class components to functional components and vice-versa. It worked fine. Currently the switched code is kept in comments

- After that next step would be to see how the hooks have replaced the need of HOCs. Tried using custom hooks in functional components to see how they could be used instead of HOCs. Found that this made code quite easy. Added 2 custom hooks related code *FetchDataFromApiCustomHook* and *MousePositionCustomHook*. Check out the code.