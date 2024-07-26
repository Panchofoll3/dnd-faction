// Aggiungi eventuali funzionalità interattive qui
function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'password_segreta'; // Cambia questa password con quella che desideri

    if (password === correctPassword) {
        document.getElementById('password-container').style.display = 'none';
        document.getElementById('secret-content').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}
