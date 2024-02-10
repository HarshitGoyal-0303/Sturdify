document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get email and password values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Determine user type (User or Trainer)
    var userType = document.querySelector('input[name="user-type"]:checked').value;
    
    // Perform login logic based on user type
    if (userType === "user") {
        // User login logic
        console.log("User login:");
        console.log("Email:", email);
        console.log("Password:", password);
    } else if (userType === "trainer") {
        // Trainer login logic
        console.log("Trainer login:");
        console.log("Email:", email);
        console.log("Password:", password);
    }
});
