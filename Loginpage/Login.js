
const users = {
    "haley@ashland.edu": { password: "123456", dashboard: "haley_personalised.html" },
    "dhruval@ashland.edu": { password: "123456", dashboard: "dhruval_personalised.html" },
    "bryce@ashland.edu": { password: "123456", dashboard: "bryce_personalised.html" },
    "ashley@ashland.edu": { password: "123456", dashboard: "ashley_personalised.html" }
};

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission


    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();


    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Check if the email exists and validate password
    if (users[email] && users[email].password === password) {
        alert(`Welcome, ${email.split('@')[0]}!`); 
        window.location.href = users[email].dashboard; // Redirect to the user's dashboard
    } else {
        alert("Invalid email or password."); // Show error for invalid credentials
    }
});
