// class Carousel {

// }

// let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/


const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const photos = Array.from(document.querySelectorAll('.photo'));
var photoQueue = 0;

rightButton.addEventListener('click', event => {
    if(photoQueue < photos.length-1) {
     photoQueue +=1;
    } else {
        photoQueue =0;
    }
 });

rightButton.addEventListener('click', event => 
photos.forEach(photo => {
    photo.classList.add('hidden');
}));

rightButton.addEventListener('click', event => {
    photos[photoQueue].classList.remove('hidden');
});

leftButton.addEventListener('click', event => {
    if(photoQueue > 0) {
        photoQueue -=1;
       } else {
           photoQueue = photos.length-1;
       }
});


leftButton.addEventListener('click', event => 
photos.forEach(photo => {
    photo.classList.add('hidden');
}));

leftButton.addEventListener('click', event => {
    photos[photoQueue].classList.remove('hidden');
});
