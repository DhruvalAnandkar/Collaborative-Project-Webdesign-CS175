
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const email = document.getElementById("email").value.trim();
    const confirmEmail = document.getElementById("confirm-email").value.trim();
    const password = document.getElementById("password").value.trim();
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const zipcode = document.getElementById("zip").value.trim();
    const terms = document.getElementById("terms").checked;

    // Basic validation
    if (email !== confirmEmail) {
        alert("Email and Confirm Email must match.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    if (phone.length !=10 ) {
        alert("Please enter valid phone number");
        return;
    }
    if (zipcode.length != 5 ) {
        alert("Please enter valid Zipcode");
        return;
    }
    if (!terms) {
        alert("You must agree to the Terms & Conditions.");
        return;
    }

    if (!firstName || !lastName) {
        alert("Please fill out all required fields.");
        return;
    }

    // Success message and redirection
    alert("You have registered successfully!");
    window.location.href = "personalisedlogin.html"; // Redirect to personalised login page
});
