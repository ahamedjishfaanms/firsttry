// Script for Image Slideshow
var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

showSlides();
// JavaScript for updating the notification text
const notificationTextElement = document.getElementById('notificationText');
const notificationBarElement = document.getElementById('notificationBar');

// Function to update notification text
function updateNotification(text) {
    notificationTextElement.innerText = text;
    // Reset animation by removing and adding the element
    notificationBarElement.innerHTML = notificationBarElement.innerHTML;
}

// Example of updating the notification text after 5 seconds
setTimeout(() => {
    updateNotification('New notification message!');
}, 5000);

