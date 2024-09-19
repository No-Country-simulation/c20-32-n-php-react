<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header('content-type: application/json; charset=utf-8');

require '../../model/instructorModel.php';

$instructorModels = new instructorModel();

switch ($_SERVER['REQUEST_METHOD']) {

   case 'GET':
      $id = isset($_GET['id']) ? $_GET['id'] : null;        
      $respuesta = $instructorModels->getListadoInstructores($id);
      echo json_encode($respuesta);
      break;     
   
}
?>