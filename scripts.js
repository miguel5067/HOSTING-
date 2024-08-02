const allowedEmail = 'miguelalveo0709@gmail.com'; // Correo electrónico permitido

function checkEmail() {
    const emailInput = document.getElementById('email');
    const loginMessage = document.getElementById('login-message');
    const email = emailInput.value.trim();
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const loginContainer = document.getElementById('login-container');
    const contentContainer = document.getElementById('content-container');

    if (email === allowedEmail) {
        // Ocultar login y mostrar contenido
        loginContainer.style.display = 'none';
        contentContainer.style.display = 'block';
        header.classList.remove('hidden');
        footer.classList.remove('hidden');
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

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const loginContainer = document.getElementById('login-container');
    const dropdownGrupos = document.getElementById('dropdown-grupos');

    // Inicializar el estado del encabezado y pie de página
    if (loginContainer.style.display === 'none') {
        header.classList.remove('hidden');
        footer.classList.remove('hidden');
    } else {
        header.classList.add('hidden');
        footer.classList.add('hidden');
    }

    // Manejar clics en enlaces de la barra de navegación
    document.querySelectorAll('#nav-bar a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const id = link.getAttribute('href').substring(1); // Extrae el ID de la sección
            showContent(id); // Mostrar contenido basado en el ID de la pestaña
        });
    });

    // Mostrar/Ocultar el menú desplegable al hacer clic en "Grupos"
    const gruposLink = document.getElementById('grupos');
    gruposLink.addEventListener('click', (event) => {
        event.preventDefault();
        if (dropdownGrupos.style.display === 'block') {
            dropdownGrupos.style.display = 'none';
        } else {
            dropdownGrupos.style.display = 'block';
        }
    });
});

