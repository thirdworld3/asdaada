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

    function redirectTojump() {
        document.body.classList.add('zoom-in');
        window.location.href = 'bid/bid.html';
    }
    
    function redirectTomouse   () {
        document.body.classList.add('zoom-in');
        window.location.href = 'artist/artist.html';
    }
    
    function redirectToindexani() {
        document.body.classList.add('zoom-in');
        window.location.href = 'home/home.html';
    }
    
    
    
    
    document.addEventListener("DOMContentLoaded", function() {
        // Get all the activity links
        var activityLinks = document.querySelectorAll("ul li a");
    
        // Add click event listeners to each activity link
        activityLinks.forEach(function(link) {
            link.addEventListener("click", function(event) {
                // Prevent the default behavior of the link
                event.preventDefault();
                
                // Get the href attribute of the clicked link
                var href = link.getAttribute("href");
                
                // Redirect to the activity page
                window.location.href = href;
            });
        });
    });
    
});
