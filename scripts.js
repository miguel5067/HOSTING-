const allowedEmail = 'miguelalveo0709@gmail.com'; // Correo electrónico permitido

function checkEmail() {
    const emailInput = document.getElementById('email');
    const loginMessage = document.getElementById('login-message');
    const email = emailInput.value.trim();

    if (email === allowedEmail) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('content-container').style.display = 'block';
        showContent('content1'); // Inicializar la primera pestaña activa
    } else {
        loginMessage.textContent = 'Correo electrónico no autorizado.';
    }
}

function showContent(id) {
    // Ocultar todos los contenidos
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Quitar la clase activa de todas las pestañas
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Mostrar el contenido seleccionado
    const selectedContent = document.getElementById(id);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Activar la pestaña correspondiente
    const targetTab = Array.from(tabs).find(tab => {
        const tabContentId = tab.getAttribute('onclick').match(/'(\w+)'/)[1];
        return tabContentId === id;
    });
    if (targetTab) {
        targetTab.classList.add('active');
    }
}
