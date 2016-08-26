# Challenge 5 Instructions

For this challenge, build a site header using the provided composition.


## Requirements

- Use the build tool that you constructed in Challenge 0.
- Create a responsive site header (desktop and mobile) using the composition provided.
- Arrows should change on click to indicate menu open or close
- Navigation items should only have a bottom border.
- Mobile navigation is a click / touch interaction
- Mobile secondary navigation should slide open only when clicking on the parent item.
- Search should change font color to `#50C3EF` when active, but remain defined grey when not active.
- For the arrows utilize an icon sprite similar to the one you build in Challenge 1.

***Note:** All interactions are at your discretion and can be as simple as opening the navigation on click and hover, or can slide open.*


## Assets

- Utilize the design composition `assets/comp.png` and `assets/arrows.png`
- Specs are as follows:
	- Header border is `#E2E2E2`
	- Logo is 36px, Bold, Open Sans, `#50C3EF` on hover change color to `#000`
	- Search is `16px`, Regular, Open Sans, `#939393` with a border of `#939393`
	- Navigation is:
		- Default: `18px`, Regular, Open Sans, `#555`
		- Hover: `18px`, Bold, Open Sans, `#50C3EF`
		- Active: `18px`, Regular, Open Sans, `#555` 
		- Background color: `#C2EEFF` with white borders
	- Mobile Navigation is:
		- Default: `18px`, Regular, Open Sans, `#555`
		- Border is `#DEDEDE` for all items
		- Use opacity to change color of dropdown arrow on secondary navigation


## Resources

You will need to incorporate nesting, `@extend`, icon sprite (Challenge 1) and typography (Challenge 2). 

For this challenge you can write everything in CSS alone, but if you want to ensure that most of your interactions work on all devices you can start utilizing JavaScript. I would recommend having a look at You Might Not Need jQuery for [Add Class](http://youmightnotneedjquery.com/#add_class) and [Has Class](http://youmightnotneedjquery.com/#has_class).
