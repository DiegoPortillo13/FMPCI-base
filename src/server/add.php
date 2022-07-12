
<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Methods: PUT, GET, POST");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: application/json');

  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "INSERT INTO proyectos(numProyecto,nomProyecto,prioridad,fecha,
                            cliente,descripcion,estatus,cantidad,fRequerida,
                            fFinalizacion,fEntrega, numCotizacion) 
                            VALUES
                            ('$params->numProyecto','$params->nomProyecto', '$params->prioridad','$params->fecha',
                            '$params->cliente','$params->descripcion','$params->estatus','$params->cantidad','$params->fRequerida',
                            '$params->fFinalizacion','$params->fEntrega','$params->numCotizacion')");    
  
  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'SE REGISTRO EXITOSAMENTE EL PROYECTO';


  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>        
      