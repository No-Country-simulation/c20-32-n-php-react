<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header('content-type: application/json; charset=utf-8');

require '../../model/curso_recusosModel.php';

$cursoRecursosModel = new cursoRecursosModel();

switch ($_SERVER['REQUEST_METHOD']) {
 
   case 'GET':
      $id = isset($_GET['id']) ? $_GET['id'] : null;        
      $respuesta = $cursoRecursosModel->getRecursos($id);
      echo json_encode($respuesta);
      break;     

   case 'POST':
      $_POST = json_decode(file_get_contents('php://input', true));
      if(!isset($_POST->id_curso) || is_null($_POST->id_curso) || empty(trim($_POST->id_curso))){
         $respuesta = ['error', 'El ID del curso no debe estar vacío'];
      }
      else {
         $respuesta = $cursoRecursosModel->saveRecurso(
            $_POST->id_curso, 
            $_POST->detalle_recurso, 
            $_POST->tipo_recurso, 
            $_POST->nombre, 
            $_POST->user_ad
         );
      }
      echo json_encode($respuesta);
   break;

   case 'PUT':
      $_PUT = json_decode(file_get_contents('php://input', true));
      if(!isset($_PUT->id) || is_null($_PUT->id) || empty(trim($_PUT->id))){
         $respuesta = ['error', 'El ID del recurso no debe estar vacío'];
      }
      else {
         $respuesta = $cursoRecursosModel->updateRecurso(
            $_PUT->id, 
            $_PUT->id_curso, 
            $_PUT->detalle_recurso, 
            $_PUT->tipo_recurso, 
            $_PUT->nombre, 
            $_PUT->user_mod
         );
      }
      echo json_encode($respuesta);
   break;
   /*

   case 'DELETE':
      $_DELETE = json_decode(file_get_contents('php://input', true));
      if(!isset($_DELETE->id) || is_null($_DELETE->id) || empty(trim($_DELETE->id))){
         $respuesta = ['error', 'El ID del recurso no debe estar vacío'];
      }
      else {
         $respuesta = $cursoRecursosModel->deleteRecurso($_DELETE->id);
      }
      echo json_encode($respuesta);
   break;
   */
  case 'DELETE':
   // Extraer el ID de la URL
   $id = isset($_GET['id']) ? $_GET['id'] : null;
   if(is_null($id) || empty(trim($id))){
       $respuesta = ['error', 'El ID de la persona no debe estar vacío'];
   }
   else {
       $respuesta = $cursoRecursosModel->deleteRecurso($id);
   }
   echo json_encode($respuesta);
   break;   
}
?>
