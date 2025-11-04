---
title: "Blog styling guide - Contains all the sections supported"
description: "This is the first default blog - which contains the sections supported in this version on the blog website."
date: "01-10-2025"
author: "Mitesh Adelkar"
categories: ["Next Js", "UI Design", "Frontend"]
image: "/blog-images/post-1.jpg"
---

Welcome to the default post. This post is created to understand the styling and all the necessary elements present in the markdown file.
Lets begin!

## H2 For Blog Sections
### H3 - For Sub-sections
#### H4 - For further nesting

P - This is a paragraph.  
The above are the default provided
styled headings - you can easily change their styles in the globals.css file provided in the app folder.

## Paragraphs and Emphasis

This is a normal paragraph of text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.

You can make **bold text**, *italic text*, or combine both for ***bold italic text***. You can also use inline code block which will look something like `console.log("Hello World!")` like this. You can also add links to outside sources in the markdown file, here’s a [link to Next.js](https://nextjs.org) for reference.

## Blockquotes

> “Any sufficiently advanced technology is indistinguishable from magic.”  
> — Arthur C. Clarke


## Lists Items

### Unordered List
- Learn HTML and CSS First
- Start with JavaScript
  - Solve a Lot of Problems
  - Learn Promises and Async
- Start with React Js foundation

### Ordered List
1. Learn HTML and CSS First
2. Start with JavaScript
    1. Solve a Lot of Problems
    2. Learn Promises and Async
3. Start with React Js foundation


## Code Blocks
You can show syntax-highlighted code using triple backticks.

```js
// JavaScript example
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
```

## Adding Images
You can add images as well in the markdown file which will be rendered on the frontend.

![alt text](/blog-images/post-1.jpg "Image Title Goes Here")