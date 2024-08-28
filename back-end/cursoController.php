<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header('content-type: application/json; charset=utf-8');

require 'cursoModel.php';

$cursoModel = new cursoModel();

switch ($_SERVER['REQUEST_METHOD']) {
   case 'GET':
      $respuesta = (!isset($_GET['id'])) ? $cursoModel->getCursos() : $cursoModel->getCursos($_GET['id']);
      echo json_encode($respuesta);
   break;

   case 'POST':
      $_POST = json_decode(file_get_contents('php://input', true));
      if(!isset($_POST->titulo) || is_null($_POST->titulo) || empty(trim($_POST->titulo)) || strlen($_POST->titulo) > 500){
         $respuesta = ['error', 'El título del curso no debe estar vacío y no debe tener más de 500 caracteres'];
      }
      else if(!isset($_POST->costo) || is_null($_POST->costo) || !is_numeric($_POST->costo)){
         $respuesta = ['error', 'El costo del curso es inválido'];
      }
      else {
         $respuesta = $cursoModel->saveCurso(
            $_POST->titulo, 
            $_POST->descripcion, 
            $_POST->contenido, 
            $_POST->duracion, 
            $_POST->foto, 
            $_POST->valoracion, 
            $_POST->costo, 
            $_POST->id_instructor, 
            $_POST->id_usuario_reg
         );
      }
      echo json_encode($respuesta);
   break;

   case 'PUT':
      $_PUT = json_decode(file_get_contents('php://input', true));
      if(!isset($_PUT->id) || is_null($_PUT->id) || empty(trim($_PUT->id))){
         $respuesta = ['error', 'El ID del curso no debe estar vacío'];
      }
      else if(!isset($_PUT->titulo) || is_null($_PUT->titulo) || empty(trim($_PUT->titulo)) || strlen($_PUT->titulo) > 500){
         $respuesta = ['error', 'El título del curso no debe estar vacío y no debe tener más de 500 caracteres'];
      }
      else {
         $respuesta = $cursoModel->updateCurso(
            $_PUT->id, 
            $_PUT->titulo, 
            $_PUT->descripcion, 
            $_PUT->contenido, 
            $_PUT->duracion, 
            $_PUT->foto, 
            $_PUT->valoracion, 
            $_PUT->costo, 
            $_PUT->id_instructor, 
            $_PUT->id_user_mod
         );
      }
      echo json_encode($respuesta);
   break;

   case 'DELETE':
      $_DELETE = json_decode(file_get_contents('php://input', true));
      if(!isset($_DELETE->id) || is_null($_DELETE->id) || empty(trim($_DELETE->id))){
         $respuesta = ['error', 'El ID del curso no debe estar vacío'];
      }
      else {
         $respuesta = $cursoModel->deleteCurso($_DELETE->id);
      }
      echo json_encode($respuesta);
   break;
}
?>
