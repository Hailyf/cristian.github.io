document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const btn = document.getElementById('button');
    const selectedAppName = document.getElementById('app-name');
    const selectedAppField = document.getElementById('app');
    const selectedAppPrice = document.getElementById('app-price');

    window.selectApp = function(name, price) {
        selectedAppName.textContent = name;
        selectedAppField.value = name;
        selectedAppPrice.textContent = `Precio: $${price}/mes`;
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_djq9v8f';

        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                btn.value = 'Enviar Solicitud';

                // Ocultar el formulario y mostrar el mensaje de confirmación
                form.style.display = 'none';
                document.getElementById('confirmation-message').style.display = 'block';
                document.getElementById('confirmation-text').textContent = `Gracias, ${document.getElementById('from_name').value}. Tu solicitud ha sido enviada.`;
            }, (err) => {
                btn.value = 'Enviar Solicitud';
                console.error('Error al enviar el correo:', err);
                alert('Hubo un error al enviar tu solicitud: ' + JSON.stringify(err));
            });
    });
});


