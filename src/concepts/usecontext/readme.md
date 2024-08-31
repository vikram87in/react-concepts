# Explanation:

## Concept for Functional Component

We create a 'MainFunctionComponent' functional component that makes use of the ThemeContext and enables the 'theme' and 'setTheme' for child components down the hierarchy.
Deep down, the 'GrandChildComponent' component makes use of these props. The problem here is that if we need to use the Provider at 2 different places (like shown in the example), the states are not mutually exclusive. Clicking on one button updates the state of MainFunctionComponent and hence both the Providers are impacted.

### Improvement

We can improve this code by creating a Provider that also has the state and the function to update the state. So we created 'ThemeProvider'. Creating a separate file for the provider is a good coding practice. In the **ImprovedFunctionComponent**, we imported the default and the named export. Now we just need to wrap the components (that require the state and setState) with ThemeProvider (as shown in the ImprovedFunctionComponent). Now, clicking the button only updates the state of the corresponding Provider.

### Note

One thing to note is that when the data set in the context is updated, only those components that use the context gets rerendered, and not every child component of the Provider. For example, when the 'name' in the ThemeProvider changes, only the GrandChildComponent will re-render, and not the ChildComponent. ImprovedFunctionComponent will also not re-render as it is not the child component (infact, it is the parent of ThemeProvider)
## Concept for Class component

For class component (in **ContextInClassChild**), we have to use **ThemeContext.Consumer** and make use of render props to get the context objects (which is quite tricky as compared to functional components). **ThemeProvider** has been created like a class component too to show how it would work (currently the class component 'ThemeProvider' has been commented and the functional component is uncommented).  Note that, when the context object changes, only the DOM inside the consumer re-renders and not even the **GrandChildComponent** (unlike the case in functional component). 

Then context is used in a different way in the **ContextInClassChild** component which uses context as a static property. The advantage is that the context object can be received not only in the render method, but other life cycle methods like componentDidMount and componentDidUpdate. The downside is that with this way the component can subscribe to only one context.

## Conclusion

using context in functional components is very straightforward as compared to using in class component

