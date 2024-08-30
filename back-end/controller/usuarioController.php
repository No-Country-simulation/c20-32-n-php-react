<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header('content-type: application/json; charset=utf-8');

require '../../model/usuarioModel.php';

$usuarioModel = new usuarioModel();

switch ($_SERVER['REQUEST_METHOD']) {

   case 'GET':
      $id = isset($_GET['id']) ? $_GET['id'] : null;        
      $respuesta = $usuarioModel->getUsuarios($id);
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

      $id = isset($_GET['id']) ? $_GET['id'] : null;

      // Obtener y decodificar los datos de la solicitud PUT
      $putData = json_decode(file_get_contents('php://input'), true);

       /*
      echo '<pre>';
      print_r($putData);
      echo '</pre>';
       */       

      //echo   "val: ".$putData['nombres'];

      if(is_null($id) || empty(trim($id))){
          $respuesta = ['error', 'El ID de la usuario no debe estar vacío'];
      }
      else if(!isset($putData['nombre_usuario']) || is_null($putData['nombre_usuario']) || empty(trim($putData['nombre_usuario'])) || strlen($putData['nombre_usuario']) > 250){
         $respuesta = ['error', 'El nombre de usuario no debe estar vacío y no debe tener más de 250 caracteres'];
      }
      else if(!isset($putData['email']) || is_null($putData['email']) || empty(trim($putData['email'])) || strlen($putData['email']) > 250){
         $respuesta = ['error', 'El correo electronico de usuario no debe estar vacío y no debe tener más de 250 caracteres'];
      }
      else if(!isset($putData['password']) || is_null($putData['password']) || empty(trim($putData['password'])) || strlen($putData['password']) > 250){
         $respuesta = ['error', 'la conraseña de usuario no debe estar vacío y no debe tener más de 250 caracteres'];
      }
         
      else {
         $respuesta = $usuarioModel->updateUsuario(
            $id, 
            $putData['nombre_usuario'], 
            $putData['email'], 
            $putData['password'], 
            $putData['id_persona'], 
            $putData['id_user_mod'],
            $putData['rol']
         );
      }
      echo json_encode($respuesta);
   break;
 

/*
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
   */
  case 'DELETE':
   // Extraer el ID de la URL
   $id = isset($_GET['id']) ? $_GET['id'] : null;
   if(is_null($id) || empty(trim($id))){
       $respuesta = ['error', 'El ID del usuario no debe estar vacío'];
   }
   else {
       $respuesta = $usuarioModel->deleteUsuario($id);
   }
   echo json_encode($respuesta);
break;   
}
?>