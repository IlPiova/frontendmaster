# Frontend Mentor - Frontend quiz app solution

This is a solution to the [Frontend quiz app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Select a quiz subject
- Select a single answer from each question from a choice of four
- See an error message when trying to submit an answer without making a selection
- See if they have made a correct or incorrect choice when they submit an answer
- Move on to the next question after seeing the question result
- See a completed state with the score after the final question
- Play again to choose another subject
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app only using their keyboard
- **Bonus**: Change the app's theme between light and dark

### Screenshot

![](./starter-code/assets/images/2026-09-03%2013.50.48%20fementor-quizappproject.netlify.app%20199304365066.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/IlPiova/frontendmaster/tree/main/frontend-quiz-app)
- Live Site URL: [Add live site URL here](https://fementor-quizappproject.netlify.app/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS modules

### What I learned

I used JS modules for the first time and, after some initial uncertainty about the order of execution and the various imports and exports, I think I’ve grasped the basic logic.

Another important topic I tackled for the first time was session storage, which is essential for projects of this kind to ensure data is always available across the various modules

```js
let theme = sessionStorage.getItem(‘theme’);

sessionStorage.setItem(‘question’, 0);
sessionStorage.setItem(‘score’, 0);
```

I’ve also become more confident with the different types of loops in JavaScript and with manipulating the DOM

Translated with DeepL.com (free version)

### Continued development

I need to get more familiar with error handling and FETCH queries, but I think I’m improving every time I come across these topics. I need to get more familiar with error handling and FETCH requests, but I think I’m improving every time I come across these topics. I also need to work out the best approach to organising CSS and JS files; at the moment, it’s been a bit of a makeshift solution.

### AI Collaboration

Artificial intelligence played a very important role in this project: it guided me through many stages of the debugging process, advised me to use sessionStorage and helped with the styling of the theme chooser. However, apart from the toggle for the website’s theme, it never provided direct solutions, but only explanations and questions that could help me resolve my doubts.

````css

    .theme-chooser #theme-chooser {
        appearance: none;
        position: relative;
        inline-size: 3rem;
        block-size: 1.5rem;
        background-color: var(--clr-accent);
        border-radius: 999px;
        cursor: pointer;
        outline: none;
    }

    .theme-chooser #theme-chooser::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        inline-size: 1.25rem;
        block-size: 1.25rem;
        border-radius: 50%;
        background-color: white;
        transform: translateX(0);
        transition: transform 0.3s ease;
        will-change: transform;
    }

    .theme-chooser #theme-chooser:checked {
        background-color: var(--clr-accent);
    }

    .theme-chooser #theme-chooser:checked::after {
        transform: translateX(1.5rem);
    }```

## Author

- Website - [My portfolio](https://cristian-piovani-portfolio.netlify.app)
- Frontend Mentor - [@IlPiova](https://www.frontendmentor.io/profile/IlPiova)
````
