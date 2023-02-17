<!-- @format -->

# MakeClickable Function

This is a JavaScript function that takes a string of text as input and returns an array of React components that represent the same text, with URLs in the text wrapped in HTML anchor tags to make them clickable.

# Usage

To use this function, you can call it with a string of text as the argument, like this:

```js
import React from "react";
import makeClickable from "make-clickable";

const text = "Check out my website: https://www.example.com";
const clickableText = makeClickable(text);

// Render the clickable text
return <div>{clickableText}</div>;
```

This will render the text with the URL wrapped in an HTML anchor tag, allowing the user to click on the link and navigate to the URL.

# How it works

The function uses a regular expression to match URLs in the text, which is stored in the `urlRegex` constant. It then splits the text into an array of parts based on the URLs using the `split` method, and maps over the array to create a new array of components.

For each part in the array, the function checks whether it matches the URL regular expression using the `test` method. If it does, the function creates a new anchor tag component using the part as the `href` attribute, and returns it. If it doesn't match the URL regular expression, the function returns a new span tag component with the part as its content.

The `key` prop is included on each component to help React keep track of them and optimize updates.
