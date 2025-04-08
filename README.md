# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information


### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Space-tourism-website/blob/main/screenshot/Space%20tourism%20website-mobile.png).
![screenshot mobile-planets](https://github.com/Lo-Deck/Space-tourism-website/blob/main/screenshot/Space%20tourism%20website%20destination%20page-mobile.png).
![screenshot mobile-crews](https://github.com/Lo-Deck/Space-tourism-website/blob/main/screenshot/Space%20tourism%20website%20crew%20page-mobile.png).
![screenshot mobile-technology](https://github.com/Lo-Deck/Space-tourism-website/blob/main/screenshot/Space%20tourism%20website%20technology%20page-mobile.png).

![screenshot tablet](https://github.com/Lo-Deck/Space-tourism-website/blob/main/screenshot/Space%20tourism%20website-tablet.png).
![screenshot tablet-crews](https://github.com/Lo-Deck/Space-tourism-website/blob/main/screenshot/Space%20tourism%20website%20crew%20page-tablet.png).

![screenshot desktop](https://github.com/Lo-Deck/Space-tourism-website/blob/main/screenshot/Space%20tourism%20website-desktop.png).
![screenshot desktop-planets](https://github.com/Lo-Deck/Space-tourism-website/blob/main/screenshot/Space%20tourism%20website%20destination%20page-desktop.png).



### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Space-tourism-website).
- Live Site URL: [Website](https://lo-deck.github.io/Space-tourism-website/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned to make a website with 4 four different pages and using different stylesheet and import them with

```css
@import "styles-destination.css";
@import "styles-crew.css";
@import "styles-technology.css";

```
Extract data data form JSON 

```js
async function fetchData () {

    try{

        response = await fetch('./data.json', {
            method: 'GET',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok){
            throw(`Error loading data : ${response.status}`);
        }

        const data = await response.json();

        return data;

    }
    catch(error){
        console.error('Error: ', error);
    }

}

```

and display them when you click on a `button`

```js

setTimeout(() => {

    switch(index){

       case 0:
    
           document.querySelector('.crew .sub-title span:nth-of-type(1)').textContent = `${data.crew[index].role}`;
           document.querySelector('.crew .sub-title span:nth-of-type(2)').textContent = `${data.crew[index].name}`;
           document.querySelector('.crew .container-text .text').textContent = `${data.crew[index].bio}`;
    
           picture.innerHTML = `
               <source srcset="${data.crew[index].images.webp}" type="image/webp">
               <img class="crew-image" src="${data.crew[index].images.png}" alt="hero">                
           `;
    
           break;


	...

```

### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.
- [FreeCodeCamp](https://www.freecodecamp.org/) - I've been learning a lot.
- [Utopia](https://utopia.fyi/) - To have a better responsive design.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.

