# css-codemod-demo

An example CSS codemod built with [PostCSS](https://postcss.org) and a few other packages.

## Setup

1. Clone the repository and change into the directory
1. Install dependencies: `yarn install`
1. Run the transform: `yarn transform`
1. The CSS files in `src` (`a.css` and `b.css`) should have their `color` properties set to `red` (the transform)

## Extending

This demo can be extended to solve a wide variety of CSS codemod needs. The PostCSS plugin can be updated to make any desired transform to the underlying CSS nodes.
