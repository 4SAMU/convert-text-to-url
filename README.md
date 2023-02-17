<!-- @format -->

# Make Text Clickable

This function takes a string of text and returns a React component that wraps URLs, phone numbers, and email addresses in clickable links.

## Usage

To use the `makeTextClickable` function, first import it in your React component:

```javascript
import makeTextClickable from "./index.js";
const text = "Check out this link: https://example.com";
const clickableText = makeTextClickable(text);

return <div>{clickableText}</div>;
```

The resulting component will render the original text with clickable links for any URLs, phone numbers, or email addresses found in the text.

## Supported Formats

The `makeTextClickable` function supports the following formats:

    URLs: any string of text that starts with "http://" or "https://"
    Phone numbers: any string of 10 digits, with or without separators such as "-" or "."
    Email addresses: any string of text in the format "name@example.com"

## Customization

If you'd like to customize the behavior of the `makeTextClickable` function, you can modify the regular expressions used to match URLs, phone numbers, and email addresses. These regular expressions are defined at the top of the makeTextClickable function, and you can modify them to match different formats as needed.

Additionally, you can modify the HTML generated for each type of link by changing the code in the `map` function that returns the `<a>` tags. For example, you might want to add a `target="_blank"` attribute to open URLs in a new tab or window, or change the `href` attribute for phone numbers to use a different protocol.

## License

This code is released under the MIT License. See the `LICENSE` file for more information.
