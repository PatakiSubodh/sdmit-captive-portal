document.addEventListener('DOMContentLoaded', function() {
    // Attach event listener to the login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting the default way
            const username = document.getElementById('floatingInput').value;
            const password = document.getElementById('floatingPassword').value;

            // Simple validation (replace with your actual validation logic)
            if (username === 'admin' && password === 'password') {
                // Store the username in localStorage
                localStorage.setItem('username', username);
                window.location.href = 'logout.html'; // Redirect to logout page on successful login
            } else {
                window.location.href = 'error_page.html'; // Redirect to error page on failed login
            }
        });
    }

    // Check if we are on the logout page
    if (window.location.pathname.endsWith('logout.html')) {
        const username = localStorage.getItem('username');
        if (username) {
            // Set the username in the h1 tag
            const greeting = document.querySelector('h1');
            if (greeting) {
                greeting.textContent = `Hi, ${username}`;
            }
        }

        // Attach event listener to the logout button
        const logoutButton = document.getElementById('logout-form-btn');
        if (logoutButton) {
            logoutButton.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default action
                localStorage.removeItem('username'); // Clear the username from localStorage
                window.location.href = 'index.html'; // Redirect to login page on logout
            });
        }
    }
});
