<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header('content-type: application/json; charset=utf-8');

require 'usuarioModel.php';

$usuarioModel = new usuarioModel();

switch ($_SERVER['REQUEST_METHOD']) {
   case 'GET':
      $respuesta = (!isset($_GET['id'])) ? $usuarioModel->getUsuarios() : $usuarioModel->getUsuarios($_GET['id']);
      echo json_encode($respuesta);
   break;

   case 'POST':
      $_POST = json_decode(file_get_contents('php://input', true));
      if(!isset($_POST->nombre_usuario) || is_null($_POST->nombre_usuario) || empty(trim($_POST->nombre_usuario)) || strlen($_POST->nombre_usuario) > 80){
         $respuesta = ['error', 'El nombre de usuario no debe estar vacío y no debe tener más de 80 caracteres'];
      }
      else if(!isset($_POST->email) || is_null($_POST->email) || empty(trim($_POST->email)) || !filter_var($_POST->email, FILTER_VALIDATE_EMAIL)){
         $respuesta = ['error', 'El correo electrónico es inválido o está vacío'];
      }
      else {
         $respuesta = $usuarioModel->saveUsuario(
            $_POST->nombre_usuario, 
            $_POST->email, 
            $_POST->password, 
            $_POST->id_persona, 
            $_POST->id_usuario_reg,
            $_POST->rol
         );
      }
      echo json_encode($respuesta);
   break;

   case 'PUT':
      $_PUT = json_decode(file_get_contents('php://input', true));
      if(!isset($_PUT->id) || is_null($_PUT->id) || empty(trim($_PUT->id))){
         $respuesta = ['error', 'El ID del usuario no debe estar vacío'];
      }
      else if(!isset($_PUT->nombre_usuario) || is_null($_PUT->nombre_usuario) || empty(trim($_PUT->nombre_usuario)) || strlen($_PUT->nombre_usuario) > 80){
         $respuesta = ['error', 'El nombre de usuario no debe estar vacío y no debe tener más de 80 caracteres'];
      }
      else {
         $respuesta = $usuarioModel->updateUsuario(
            $_PUT->id, 
            $_PUT->nombre_usuario, 
            $_PUT->email, 
            $_PUT->password, 
            $_PUT->id_persona, 
            $_PUT->id_user_mod,
            $_POST->rol
         );
      }
      echo json_encode($respuesta);
   break;

   case 'DELETE':
      $_DELETE = json_decode(file_get_contents('php://input', true));
      if(!isset($_DELETE->id) || is_null($_DELETE->id) || empty(trim($_DELETE->id))){
         $respuesta = ['error', 'El ID del usuario no debe estar vacío'];
      }
      else {
         $respuesta = $usuarioModel->deleteUsuario($_DELETE->id);
      }
      echo json_encode($respuesta);
   break;
}
?>