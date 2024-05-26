<?php
// Verifica si los campos 'name', 'subject' o 'message' están vacíos o si el correo electrónico no es válido
if(empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  // Si alguna de las condiciones es verdadera, envía un código de respuesta HTTP 500 (error interno del servidor)
  http_response_code(500);
  // Sale del script para evitar continuar con el procesamiento
  exit();
}

// Sanitiza y guarda los valores enviados del formulario en variables
$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Dirección de correo electrónico donde se enviará el mensaje (cambiar este correo electrónico por el tuyo)
$to = "lissette.mi.ar@gmail.com"; // Cambia este correo a tu correo electrónico
// Asunto del correo electrónico
$subject = "$m_subject:  $name";
// Cuerpo del mensaje del correo electrónico
$body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\n\nEmail: $email\n\nSubject: $m_subject\n\nMessage: $message";
// Cabeceras del correo electrónico
$header = "From: $email";
// Añade la cabecera de 'Reply-To' al correo electrónico
$header .= "Reply-To: $email";	

// Envía el correo electrónico usando la función mail(). Si falla, envía un código de respuesta HTTP 500
if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>
