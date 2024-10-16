document.getElementById('jobApplicationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Fetch form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const position = document.getElementById('position').value;
    const experience = document.getElementById('experience').value;
    const linkedin = document.getElementById('linkedin').value;
    const errorDiv = document.getElementById('error');

    // Validate fields
    if (!fullName || !email || !phone || !position || !experience) {
        errorDiv.textContent = 'Por favor preencha todos os campos.';
        return;
    }

    // Clear error message
    errorDiv.textContent = '';

    // Simulate form submission (AJAX or API call would go here)(not sure if ill implement :/)
    alert('Aplicação enviada com Sucesso!\nObrigado, ' + fullName + '.');

    // Clear form
    document.getElementById('jobApplicationForm').reset();

    // Show "Return to About Page" button
    document.getElementById('returnButton').style.display = 'block';
});

function returnToAbout() {
    window.location.href = 'about.html';
}
