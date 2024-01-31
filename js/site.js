console.log("js loaded...");

// We need to dynamically update the DOM
// to get our slideshow to work
// Every 5 seconds, chane the picture to the next image
// If we get to the last image, go back to the first

// DOM Elements
const slideShowIMG = document.getElementById("slideShowImg");

// all the images to show in our slideshow
let imgUrls = [
    "https://sm.ign.com/ign_nordic/review/p/palworld-e/palworld-early-access-review-in-progress_3pz3.jpg",
    "https://assetsio.reedpopcdn.com/palworld.jpg?width=1200&height=600&fit=crop&enable=upscale&auto=webp",
    "./images/pokemon3.jpg",
    "https://static.wikia.nocookie.net/palworld/images/3/3e/Screen_%281%29.jpg/revision/latest/scale-to-width-down/1200?cb=20210911235311"
];

// Will keep track of which img we're on
let currentImageIndex = 0;

// Keep track of what the current image is
// Move to the next image
// Update the Slideshow IMG with the next image url
function updateSlideShow(){
    currentImageIndex++;

    // If our index goes outside the bounds of our array
    // Start back at 0?
    if(currentImageIndex >= imgUrls.length){
        currentImageIndex = 0;
    }

    let nextImageUrl = imgUrls[currentImageIndex];
    slideShowIMG.src = nextImageUrl;
}

setInterval(updateSlideShow, 2000);