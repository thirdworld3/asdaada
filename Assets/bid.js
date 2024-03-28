document.addEventListener("DOMContentLoaded", function() {
    // Add zoom effect to the container
    var container = document.querySelector(".container");
    container.classList.add("zoom-effect");
    
    // Function to update the attachment label when a file is selected
    function updateAttachmentLabel(input) {
        const attachmentLabel = document.getElementById('attachmentLabel');
        if (input.files.length > 0) {
            attachmentLabel.innerText = input.files[0].name;
        } else {
            attachmentLabel.innerText = 'No file attached';
        }
    }

    // Function to redirect to the home page
    function redirectToHome() {
        document.body.classList.add('zoom-in'); // Add the zoom-in class
        window.location.href = 'home.html';
    }
    
    // Function to redirect to the bid page
    function redirectToBid() {
        document.body.classList.add('zoom-in'); // Add the zoom-in class
        window.location.href = 'bid.html';
    }

    // Function to redirect to the auction page
    function redirectToAuction() {
        document.body.classList.add('zoom-in'); // Add the zoom-in class
        window.location.href = 'auction.html';
    }
    
    // Function to redirect to the artist page
    function redirectToArtist() {
        document.body.classList.add('zoom-in'); // Add the zoom-in class
        window.location.href = 'artist.html';
    }

    // Attach the updateAttachmentLabel function to the file input's onchange event
    const fileInput = document.getElementById('validId');
    if (fileInput) {
        fileInput.addEventListener('change', function() {
            updateAttachmentLabel(this);
        });
    }

    const mouseEvent = document.documentElement;

    mouseEvent.style.setProperty('--x', (window.innerWidth / 2) + 'px');
    mouseEvent.style.setProperty('--y', (window.innerHeight / 2) + 'px');

    mouseEvent.addEventListener('mousemove', (e) => {
        mouseEvent.style.setProperty('--x', e.clientX + 'px');
        mouseEvent.style.setProperty('--y', e.clientY + 'px');  
    });

});
