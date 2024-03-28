document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("home");
    container.classList.add("zoom-effect");
    

    
    function redirectToHome() {
        document.body.classList.add('zoom-in'); // Add the zoom-in class
        window.location.href = 'home.html';
    }
    
    function redirectToBid() {
        document.body.classList.add('zoom-in'); // Add the zoom-in class
        window.location.href = 'bid.html';
    }

    function redirectToAuction() {
        document.body.classList.add('zoom-in'); // Add the zoom-in class
        window.location.href = 'auction.html';
    }
    
    function redirectToArtist() {
        document.body.classList.add('zoom-in'); // Add the zoom-in class
        window.location.href = 'artist.html';
    }
// JavaScript to add class for showing paragraphs after "Welcome" is fully displayed
window.onload = function () {
    const paragraphs = document.getElementById("paragraphs");
    setTimeout(function () {
        paragraphs.classList.add("show");
    }, 2000); // Adjust delay (milliseconds) according to the typing speed
};


});