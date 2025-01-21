const users = {
    "haley@ashland.edu": { password: "123456", dashboard: "https://github.com/DhruvalAnandkar/Collaborative-Project-Webdesign-CS175/blob/main/homepage/haley_personalized.html" },
    "dhruval@ashland.edu": { password: "123456", dashboard: "https://github.com/DhruvalAnandkar/Collaborative-Project-Webdesign-CS175/blob/main/homepage/dhruval_personalized.html" },
    "bryce@ashland.edu": { password: "123456", dashboard: "https://github.com/DhruvalAnandkar/Collaborative-Project-Webdesign-CS175/blob/main/homepage/bryce_personalized.html" },
    "ashley@ashland.edu": { password: "123456", dashboard: "https://github.com/DhruvalAnandkar/Collaborative-Project-Webdesign-CS175/blob/main/homepage/ashley_personalized.html" }
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
