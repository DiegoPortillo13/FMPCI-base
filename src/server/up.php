<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 
// check if form was submitted
if($_POST){
    include './db.php';
    try{

        $query = "UPDATE proyectos 
                    SET numProyecto=:numProyecto, nomProyecto=:nomProyecto, prioridad=:prioridad, fecha=:fecha, 
        cliente=:cliente, descripcion=:descripcion, estatus=:estatus, cantidad=:cantidad, fRequerida=:fRequerida, fFinalizacion=:fFinalizacion,
        fEntrega=:fEntrega, numCotizacion=:numCotizacion
                    WHERE numProyecto=:numProyecto";
 
        $stmt = $con->prepare($query);
 
        $numProyecto = $_POST['numProyecto'];
        $nomProyecto = $_POST['nomProyecto'];
        $prioridad = $_POST['prioridad'];
        $fecha = $_POST['fecha'];
        $cliente = $_POST['cliente'];
        $descripcion = $_POST['descripcion'];
        $estatus = $_POST['estatus'];
        $cantidad = $_POST['cantidad'];
        $fRequerida = $_POST['fRequerida'];
        $fFinalizacion = $_POST['fFinalizacion'];
        $fEntrega = $_POST['fEntrega'];
        $numCotizacion = $_POST['numCotizacion'];
 
        $stmt->bindParam(':numProyecto', $numProyecto);
        $stmt->bindParam(':nomProyecto', $nomProyecto);
        $stmt->bindParam(':prioridad', $prioridad);
        $stmt->bindParam(':fecha', $fecha);
        $stmt->bindParam('cliente:', $cliente);
        $stmt->bindParam(':descripcion', $descripcion);
        $stmt->bindParam(':estatus', $estatus);
        $stmt->bindParam(':cantidad', $cantidad);
        $stmt->bindParam(':fRequerida', $fRequerida);
        $stmt->bindParam(':fFinalizacion', $fFinalizacion);
        $stmt->bindParam(':fEntrega', $fEntrega);
        $stmt->bindParam(':numCotizacion', $numCotizacion);
         
        // Execute the query
        if($stmt->execute()){
            echo json_encode(array('result'=>'success'));
        }else{
            echo json_encode(array('result'=>'fail'));
        }
         
    }
     
    // show errors
    catch(PDOException $exception){
        die('ERROR: ' . $exception->getMessage());
    }
}
?>