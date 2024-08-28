<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header('content-type: application/json; charset=utf-8');

require 'Estudiante_CursoModel.php';

$estudianteCursoModel = new EstudianteCursoModel();

switch ($_SERVER['REQUEST_METHOD']) {
   case 'GET':
      $respuesta = (!isset($_GET['id'])) ? $estudianteCursoModel->getEstudianteCursos() : $estudianteCursoModel->getEstudianteCursos($_GET['id']);
      echo json_encode($respuesta);
   break;

   case 'POST':
      $_POST = json_decode(file_get_contents('php://input', true));
      if(!isset($_POST->id_estudiante) || is_null($_POST->id_estudiante) || empty(trim($_POST->id_estudiante))){
         $respuesta = ['error', 'El ID del estudiante no debe estar vacío'];
      }
      else if(!isset($_POST->id_curso) || is_null($_POST->id_curso) || empty(trim($_POST->id_curso))){
         $respuesta = ['error', 'El ID del curso no debe estar vacío'];
      }
      else {
         $respuesta = $estudianteCursoModel->saveEstudianteCurso(
            $_POST->id_estudiante, 
            $_POST->id_curso, 
            $_POST->tipo_pago, 
            $_POST->direccion_facturacion, 
            $_POST->id_user_add
         );
      }
      echo json_encode($respuesta);
   break;

   case 'PUT':
      $_PUT = json_decode(file_get_contents('php://input', true));
      if(!isset($_PUT->id) || is_null($_PUT->id) || empty(trim($_PUT->id))){
         $respuesta = ['error', 'El ID del registro no debe estar vacío'];
      }
      else if(!isset($_PUT->id_estudiante) || is_null($_PUT->id_estudiante) || empty(trim($_PUT->id_estudiante))){
         $respuesta = ['error', 'El ID del estudiante no debe estar vacío'];
      }
      else if(!isset($_PUT->id_curso) || is_null($_PUT->id_curso) || empty(trim($_PUT->id_curso))){
         $respuesta = ['error', 'El ID del curso no debe estar vacío'];
      }
      else {
         $respuesta = $estudianteCursoModel->updateEstudianteCurso(
            $_PUT->id, 
            $_PUT->id_estudiante, 
            $_PUT->id_curso, 
            $_PUT->tipo_pago, 
            $_PUT->direccion_facturacion, 
            $_PUT->id_user_mod
         );
      }
      echo json_encode($respuesta);
   break;

   case 'DELETE':
      $_DELETE = json_decode(file_get_contents('php://input', true));
      if(!isset($_DELETE->id) || is_null($_DELETE->id) || empty(trim($_DELETE->id))){
         $respuesta = ['error', 'El ID del registro no debe estar vacío'];
      }
      else {
         $respuesta = $estudianteCursoModel->deleteEstudianteCurso($_DELETE->id);
      }
      echo json_encode($respuesta);
   break;
}
?>
