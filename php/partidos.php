<?php
    $servername = "localhost";
    $database = "u295918774_baseweb";
    $username = "u295918774_usuario";
    $password = "UsubasedatoS1973//weB";


    $respuesta=$_POST["nombre"];
 //$respuesta=$_POST["nombre"];
   $db = new mysqli($servername, $username, $password, $database);

//Verifiando el estado de la conexion
if(mysqli_connect_errno()) {
    exit("Error al conectar con la BD.");
}

//Seleccionamos el set de caracteres
mysqli_set_charset($db, "utf8");

//consultanumeroderegistros
$pr2 = $db->prepare("SELECT categoria,campeonato,dia,hora,eqlocal,esclocal,eqvis,esvis,lugar,controldivision 
FROM temporada2122 WHERE control='1'AND jugado='0' ORDER BY controldivision DESC ,dia ASC ");
$semana=$respuesta;

//Indicamos los valores pasados por referencia
//$pr2->bind_param("i", $semana);
//Ejecutamos la consulta
if($pr2->execute()){
 $pr2->store_result();
 $pr2->bind_result($categoria,$campeonato,$dia,$hora,$eqlocal,$esclocal,$eqvis,$esvis,$lugar,$controldivision);
 $noticias = array();
$categoriaanterior="";

 while($pr2->fetch()){
 if ($categoriaanterior!=$controldivision) {
    $noticia = array(
        "categoria"=>$categoria,
        "campeonato"=>$campeonato,
        "dia"=>$dia,
        "hora"=>$hora,
        "eqlocal"=>$eqlocal,
        "esclocal"=>$esclocal,
        "eqvis"=>$eqvis,
        "esvis"=>$esvis,
        "lugar"=>$lugar,

);
    $noticias['Partidos'][] = $noticia;
    $categoriaanterior=$controldivision;
 }
 

  
 }
}else {
	exit('Error al realizar la consulta: '.$pr2->close());
}

 

 echo json_encode($noticias);

	
	//Cerramos la conexion
	
  $pr2->close();
	
 




  ?>
