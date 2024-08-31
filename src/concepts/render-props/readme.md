We started with MouseTracker.jsx. It's job was to show the current mouse position. Then a similar requirement came in where we wanted a component that would show the a box wherever the mouse current position is. We created a new component for that 'BoxOnMouse.jsx'. 


# Optimization

We wanted to create a component like Mouse (in Tracker.jsx file). This would keep all logic of updating the mouse coordinates. And what to show (either the current mouse position in first option or the box on mouse in the second option) would be sent by a parent component 'Tracker' (in Tracker.jsx) as children. The Mouse component would just show what was passed as children prop. We created 2 more components for this purpose: 'Para' and 'RenderBoxOnMouse'.

# Problem

The above solution looked great but there was a problem. These 2 components 'Para' and 'RenderBoxOnMouse' needed some data (x & y coordinates) that only Mouse component had. So, basically Mouse component needs to send this data to the parent component and then the parent component (Tracker) would decide what jsx the Mouse component would show. So, we had to resort to the render props method, instead of the children props. The code related to the children props has been commented. Later on, the 'Tracker' component added a button to switch the state and on that basis it sent 'Para' or 'RenderBoxOnMouse' to the Mouse component.

# Next Steps

- After that next step would be to see how the hooks have replaced the need of render-prod. Tried using custom hooks in functional components to see how they could be used instead of render-prop. Found that this made code quite easy. Added 2 custom hooks related code *FetchDataFromApiCustomHook* and *MousePositionCustomHook*. Check out the code.