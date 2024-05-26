$(function () {
    // Validación del formulario de contacto usando jqBootstrapValidation
    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true, // Prevenir el envío por defecto del formulario
        submitError: function ($form, event, errors) {
            // Manejar errores en el envío (opcional)
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // Prevenir el envío por defecto del formulario
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            $this = $("#sendMessageButton");
            $this.prop("disabled", true); // Deshabilitar el botón de envío

            $.ajax({
                url: "contact.php", // URL del archivo PHP que procesa el formulario
                type: "POST", // Método de envío
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                },
                cache: false, // No almacenar en caché
                success: function () {
                    // Mostrar mensaje de éxito
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#success > .alert-success')
                            .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                            .append('</div>');
                    $('#contactForm').trigger("reset"); // Resetear el formulario
                },
                error: function () {
                    // Mostrar mensaje de error
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Disculpa " + name + ", Parece que nuestro servidor de correo no responde. ¡Por favor, inténtelo de nuevo más tarde!"));
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset"); // Resetear el formulario
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false); // Rehabilitar el botón de envío después de 1 segundo
                    }, 1000);
                }
            });
        },
        filter: function () {
            return $(this).is(":visible"); // Solo validar campos visibles
        },
    });

    // Manejar el clic en las pestañas
    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// Limpiar mensajes de éxito/error cuando el campo 'name' recibe el foco
$('#name').focus(function () {
    $('#success').html('');
});
