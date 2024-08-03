document.addEventListener('DOMContentLoaded', function() {
    // Manejar la autenticación (si se requiere)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que el formulario se envíe

            // Definir el correo electrónico permitido
            const correoPermitido = "miguelalveo0709@gmail.com";

            // Obtener el valor del campo de correo electrónico
            const email = document.getElementById('email').value;

            // Validar el correo electrónico
            if (email === correoPermitido) {
                // Redirigir a la página de contenido confidencial
                window.location.href = 'contenido.html';
            } else {
                alert("Correo electrónico no válido.");
            }
        });
    }

    // Manejar la navegación entre secciones
    const navLinks = document.querySelectorAll('nav a[data-target]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

            const targetId = link.getAttribute('data-target');
            const sections = document.querySelectorAll('.content-section');

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Mostrar la sección seleccionada
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // Manejar la selección de grupos
    const groupLinks = document.querySelectorAll('nav ul.dropdown a[data-group]');
    groupLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

            const groupId = link.getAttribute('data-group');
            const groupDetails = document.querySelectorAll('.group-detail');

            // Ocultar todos los detalles de grupo
            groupDetails.forEach(detail => {
                detail.style.display = 'none';
            });

            // Mostrar el detalle del grupo seleccionado
            document.getElementById(groupId).style.display = 'block';
        });
    });
});
