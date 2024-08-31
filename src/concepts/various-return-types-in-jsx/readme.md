# What we noticed:

- We saw that returning *true*, *false*, *null*, *undefined* renders nothing on the screen and don't even throw an error.
- Returning *NaN* renders NaN on the screen
- also saw few variations with 0 & '0'. 

## Possible explanation for 0 related results: 

I think, when checking the condition like the following, 0 is assumed to be falsy value and therefore the expression after && is never checked. And react while rendering, converts this 0 to be a string ('0') and renders on the screen. So, to summarize, *0* or *-0* would render 0 on the screen.
```js
{0 && ...}
```