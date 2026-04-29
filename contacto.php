<?php
// Verifica que la petición sea POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Obtener y limpiar datos
    $nombre = htmlspecialchars($_POST["nombre"]);
    $correo = htmlspecialchars($_POST["correo"]);
    $celular = htmlspecialchars($_POST["celular"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    // Mostrar respuesta HTML completa
    echo "
    <!DOCTYPE html>
    <html lang='es'>
    <head>
        <meta charset='UTF-8'>
        <title>Respuesta</title>
        <link rel='stylesheet' href='assets/css/bootstrap.min.css'>
    </head>
    <body class='container mt-5'>

        <div class='card p-4'>
            <h2 class='text-success'>Gracias por contactarme, $nombre</h2>
            <p>Hemos recibido tu mensaje correctamente.</p>

            <hr>

            <h4>Datos enviados:</h4>
            <p><strong>Correo:</strong> $correo</p>
    ";

    if (!empty($celular)) {
        echo "<p><strong>Celular:</strong> $celular</p>";
    }

    echo "
            <p><strong>Mensaje:</strong> $mensaje</p>

            <hr>

            <p><strong>Servidor:</strong> " . $_SERVER['SERVER_NAME'] . "</p>

            <a href='index.html' class='btn btn-primary mt-3'>Volver</a>
        </div>

    </body>
    </html>
    ";

} else {
    echo "Acceso no permitido";
}
?>