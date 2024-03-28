document.addEventListener("DOMContentLoaded", function() {
  var logo = document.getElementById("logo");
  var briefcase = document.getElementById("briefcase");
  var loginContainer = document.getElementById("loginContainer");
  var loginButton = document.getElementById("loginButton");

  // Show the logo immediately
  logo.style.transform = "translate(-50%, -50%) scale(1)";
  logo.style.opacity = "1";

  // After a short delay, move the logo to the top center
  setTimeout(function() {
    logo.style.transform = "translate(-50%, -100%)";

    // After the logo animation completes
    setTimeout(function() {
      // Show the case.gif
      briefcase.style.display = "block";
      // After a brief delay, show and animate the login container
      setTimeout(function() {
        loginContainer.style.display = "block";
        loginContainer.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        loginContainer.style.transform = "translate(-50%, 100%) scale(1)";
        loginContainer.style.opacity = "1";

        // Animate the login container to the middle
        setTimeout(function() {
          loginContainer.style.transition = "transform 0.5s ease, opacity 0.5s ease";
          loginContainer.style.transform = "translate(-50%, -50%) scale(1)";
          loginContainer.style.opacity = "1";
        }, 100); // Adjust delay as needed
      }, 500); // Adjust delay as needed
    }, 1000); // Adjust delay as needed
  }, 1000); // Adjust delay as needed

  // Add event listener to the login button
  if (loginButton) {
    loginButton.addEventListener("click", function(event) {
      // Prevent the default behavior of the button
      event.preventDefault();

      // Check if the username and password fields are not empty
      var usernameInput = document.getElementById("username");
      var passwordInput = document.getElementById("password");

      if (usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
        // Redirect to the desired URL if the fields are not empty
        window.location.href = "./assets/home.html";
      } else {
        // Display a message to the user indicating that fields are required
        alert("Please login first!");


      }
    });
  }
});

