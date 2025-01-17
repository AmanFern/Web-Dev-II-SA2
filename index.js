document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && password) {
        document.querySelector('.wrapperlarge').classList.add('hidden');
        alert('Login successful!'); // Optional feedback to the user
    } else {
        alert('Please fill in both fields.');
    }
});