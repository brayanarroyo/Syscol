<?php
    $user="root";
    $pass=""; 
    $server="localhost";
    $db="syscol";
    $con=mysqli_connect($server,$user,$pass) or die ("Error en conectar a la base de datos".mysqli_error());
    mysqli_select_db($db,$con);

    $nombre=$_POST['nombre_sp'];
    $domicilio=$_POST['domicilio_sp'];
    $fecha_visita=$_POST['fecha_sp'];
    $hora_visita=$_POST['hora_sp'];

    mysqli_query("INSERT INTO solicitud_pendiente (nombre_completo,domicilio,fecha_visita,hora_visita,telefono) VALUES ('$nombre','$domicilio','$fecha_visita','$hora_visita','1234567890')",$con);
?>