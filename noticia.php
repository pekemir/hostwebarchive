<?php
 $servername = "localhost";
$database = "u295918774_Basesalduie78";
$username = "u295918774_accesotodo11";
$password = "Alejandro12";
$respuesta=$_POST["pagina"];
 //$respuesta=$_POST["nombre"];
   $db = new mysqli($servername, $username, $password, $database);

//Verifiando el estado de la conexion
if(mysqli_connect_errno()) {
    exit("Error al conectar con la BD.");
}

//Seleccionamos el set de caracteres
mysqli_set_charset($db, "utf8");

//consultanOTICIA
$pr = $db->prepare("SELECT id,titulo, noticiacorta,noticiaentera, imagenes,enlaces, fecha FROM noticiasweb WHERE id<=? ORDER BY id DESC LIMIT 1");
$id=$respuesta;

//Indicamos los valores pasados por referencia
$pr->bind_param("i", $id);
//Ejecutamos la consulta
if($pr->execute()){
 $pr->store_result();
 $pr->bind_result($id,$titulo,$noticiacorta,$noticiaentera,$imagenes,$enlaces,$fecha);
 $noticias = array();
  
 while($pr->fetch()){
  $noticia = array("id"=>$id,"titulo"=>$titulo, "noticiacorta"=>$noticiacorta,"noticiaentera"=>$noticiaentera, "imagenes"=>$imagenes,"enlaces"=>$enlaces,fecha"=>$fecha);
  $noticias['Noticias'][] = $noticia;
  
 }
}else {
	exit('Error al realizar la consulta: '.$pr2->close());
}



 echo json_encode($noticias);

	
	//Cerramos la conexion
	$pr->close();
  
	
 




  ?>
