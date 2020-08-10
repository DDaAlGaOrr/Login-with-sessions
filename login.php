<?php
include ("conexion.php");
$email = $_POST["email"];
$password = $_POST["password"];
    
try{
    $cnx = DBcnx();
    $sql = "SELECT * FROM `usuarios` WHERE correo = :email and contrasenia = :password";
    $result = $cnx->prepare($sql);
    $result->bindValue(":email",$email);
    $result->bindValue(":password",$password);
    $result->execute();
    
    if($result->fetchColumn() > 0){
        echo json_encode("existe");
    }
    else{
        echo json_encode("no existe");
    }
}
catch(Exception $e){
    
}
