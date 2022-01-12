<?php

$para      = 'alejandromirbel@hotmail.com';
$asunto    = 'El asunto del correofueramail';
$descripcion   = 'Este es el cuerpo del correo';
$de = 'From: alejandromirbel@gmail.com';

if (mail($para, $asunto, $descripcion, $de))
   {
echo "Correo enviado satisfactoriamentemailll";
}
else {
    echo "Email sending failed...";
}




if(isset($_POST['cenviar'])){

   
    if(isset($_POST['nombre'])){
        $nombre = $_POST['nombre'];
    }
    if(isset($_POST['email'])){
        $email = $_POST['email'];
    }
    if(isset($_POST['url'])){
        $url = $_POST['url'];
    }
    if(isset($_POST['telefono'])){
        $telefono = $_POST['telefono'];
    }
    if(isset($_POST['mensaje'])){
        $mensaje = $_POST['mensaje'];
    }
    // Si cualquier línea es más larga de 70 caracteres, se debería usar wordwrap()
    $mensaje = wordwrap($mensaje, 70, "\r\n");



    $msj = "De: ".$nombre."\r\n";
    $msj .= "Email: ".$email."\r\n";
    $msj .= "Fecha: ".date("d-m-Y H:i:s")."\r\n";
    $msj .= "Web: ".$url."\r\n";
    $msj .= "Telefono: ".$telefono."\r\n\n\n\n";
    $msj .= "Mensaje: ".$mensaje;


    /***** Zona de envio con la funcion MAIL de php *****/
    // Para probarlo, descomentas esta linea:
   
    
    if (mail('alejandromirbel@hotmail.com', 'Asunto: Probando formulario de contacto...', $msj))
   {$a =1;
    $b = 'ya esta'
    $dab = array(
        "a" => $a, 
        "b" => $b
      );
     
      echo (json_encode($dab));
        echo "Correo enviado satisfactoriamenteformulario";
}
else {
    echo "Email sending failedformulario...";
    $a = 0;
    $b = '<div class="alert alert-danger alert-dismissable">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>Por favor, ingresa tus Nombres y Apellidos.</div>';
   
    $dab = array(
      "a" => $a, 
      "b" => $b
    );
   
    echo (json_encode($dab))
}

    
}

//else die("El acceso directo a este archivo no es permitido.");

    
    
?>