# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./images/Desktop-screenshot.png)

### Links

- [Github repository](https://github.com/IlPiova/frontendmaster/tree/main/article-preview-component-master)
- [Live site](https://fementor-articlecomponentproject.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JS

### What I learned

This was the first time I’d used relative and absolute positioning correctly. I’d used JavaScript before this exercise, but it made me go over the basics of how it works.

### Continued development

I need to improve a lot when it comes to managing the positioning of elements in CSS.

### Useful resources

- [javascript.info](https://javascript.info/coordinates) - To undestand how to obtain elemnt's coordinates

### AI Collaboration

I used Claude Chat because, once the work was complete and the site had fully loaded, the card would shift to the other side. After testing a few theories (fonts and images), we came to the conclusion that it was a scroll restoration issue, which did not occur when the project was opened in an incognito window. Claude’s approach, following my instructions, was that of a teacher who guided me towards the solution rather than simply giving me the finished code.

### Helpufull feedbacks

I received a really good feedback from [Vladislav](https://www.frontendmentor.io/profile/lowkkid), a user from front-en mentor abuout the first version of the site.

> Hi, Cristian! Unfortunately on your live site share button is not working, so I can't test it's behaviour :( but I have something to say regarding code. Starting from JS file, you don't need to touch the author's section at all - just make the share panel an overlay on top of the footer, then it covers the author itself when showing and opens when hiding, and you don't have to synchronize the two elements. Also this will help you to get rid of redundant check window.innerWidth < 720 which is bad practice - it is more correct for JS to be responsible only for the "open/closed" state, and where and how it looks on different screens - described by CSS: e.g. the tooltip above the button is put in pure CSS through position: absolute; bottom: ...; left: ...; transform: ... without a single pixel in the script. It's also better to select the button by id via getElementById: it's the only one here, and you take it by class and get a whole NodeList, which you then iterate over - extra work (plus id sampling is a little faster). I also see small differences with design - text color in header is lighter than in design, share button icon is too big. Also it's better to set fixed width and height for the picture with furniture - check how it looks for example with screen width 720. it's acceptable for images to have fixed values. Regarding HTML - better cover all this card with <artice>, not with <main>. this is more semantically right way. Hope that my advices were helpful. Good luck in learning :)

## Author

- Website - [My portfolio](https://cristian-piovani-portfolio.netlify.app)
- Frontend Mentor - [@IlPiova](https://www.frontendmentor.io/profile/IlPiova)
- GitHub Profile - [here](https://github.com/IlPiova/)
