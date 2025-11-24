document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check for specific credentials
    if (username === 'teste' && password === 'teste') {
        // In a real application, you would send this to a server for validation.
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('username', username);
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos.';
    }
});
