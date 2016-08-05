# Challenge 2 Instructions

For this challenge, you will be constructing typography and classes to adjust font-sizes.


## Requirements

- Use the build tool that you constructed in Challenge 0.
- Grab a cool font from [Google Fonts](https://www.google.com/fonts). (I recommend [Roboto](https://www.google.com/fonts/specimen/Roboto), but you can use anything.)
- Set a base font size using a variable of `16px` and apply the variable to the body element.
- For headings (h1 to h6) generate font-sizes from `16px` incrementing by `8px` for each size.
- Set font size for all other text elements: `p`, `li`, and `a`.
- Create a `@for` loop that generates custom classes for adjusting font-sizes from 1 to 6.
    - Font size should go from smallest (1) to largest (6) font size.
    - Classes should increment by `16px`.
    - Classes should be human readable and explain what is being adjusted. (ex. `font-size-1`, `text-size-1`, or something equivalent)
- Create classes for bold and italics.
- Using `index.html` add text that shows all modifier classes for typography (h1-h6, p , li, a, sizing, bold, italics, etc.)


## Assets

No assets required for this challenge.


## Resources

Take a look at Sass [Interpolation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_) so that you can use variables in selectors and property names.

Also, it is good to take a look at the various [Number Operators](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#number_operations) that can be performed when working with numbers and doing validation checks.
