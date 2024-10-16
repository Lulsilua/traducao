document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        const formData = { name, email, message, date: new Date().toISOString() };

        // Store the form data in LocalStorage
        localStorage.setItem(`contact_${name}`, JSON.stringify(formData));

        document.getElementById('message').textContent = 'Sua mensagem foi enviada!';
        document.getElementById('message').style.color = 'green';

        // Clear the form
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('message').textContent = 'Por favor preencha todos os campos.';
        document.getElementById('message').style.color = 'red';
    }
});
