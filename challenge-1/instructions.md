# Challenge 1 Instructions

For this challenge we will focus on using Sass to create a CSS for a series of images in a sprite using the build tool that you constructed in Challenge 0.


## Requirements

1. Use the build tool that you constructed in Challenge 0.
	- Using your build tool compile Sass (SCSS) to CSS within challenge directory (ex. `challenge-1/sass` to `challenge-1/css`).

2. Create a Sass `@for` loop that generates a series of classes and properties for an icon sprite (8 icons total).
	- default icon state is the pink and hovered state is light blue.

3. Icons classes should use `@extend` and `@for` loop to generate the classes and keep duplicate properties to a minimum.

4. `:hover` states should be contained within the `@for` loop for each icon.

3. Using `challenge-1/index.html` construct HTML that shows all six icons on the page inline from 1 to 8.

**Note:** For the default and hover states you will need to change the position dynamically based on icon number and a set number of pixels. Each icon is contained within a 50px square box.


## Assets

The only asset for this challenge is `assets/icons.png`.

Refer to the `assets/interactions.gif` on what the end result will look like.


## Resources

Please check out the resources on [http://sass-lang.com/guide]() for help learning basic Sass syntax.

Review the Sass documentation topics about [@extend](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend) and [@for](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_10) loops for more ideas on how to accomplish the challenge.

Take a look at Sass [Interpolation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_) so that you can use variables in selectors and property names.
