document.addEventListener('DOMContentLoaded', function() {
    // Manejar la autenticación (si se requiere)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que el formulario se envíe

            // Definir el correo electrónico y la contraseña permitidos
            const correoPermitido = "TomasGuardiaCTG@gmail.com";
            const contrasenaPermitida = "CTGQuimica24"; // Cambia esto por la contraseña real

            // Obtener los valores del formulario
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Validar el correo electrónico y la contraseña
            if (email === correoPermitido && password === contrasenaPermitida) {
                // Limpiar los campos del formulario
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';

                // Redirigir a la página de contenido confidencial
                window.location.href = 'contenido.html';
            } else {
                alert("Correo electrónico o contraseña no válidos.");
            }
        });
    }

    // Manejar la navegación entre secciones
    const navLinks = document.querySelectorAll('nav a[data-target]');
    const sections = document.querySelectorAll('.content-section');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

            const targetId = link.getAttribute('data-target');

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
    const groupDetails = document.querySelectorAll('.group-detail');
    groupLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

            const groupId = link.getAttribute('data-group');

            // Ocultar todos los detalles de grupo
            groupDetails.forEach(detail => {
                detail.style.display = 'none';
            });

            // Mostrar el detalle del grupo seleccionado
            document.getElementById(groupId).style.display = 'block';
        });
    });
});
