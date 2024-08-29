<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header('content-type: application/json; charset=utf-8');

require '../../model/personaModel.php';

$personaModel = new personaModel();

 

switch ($_SERVER['REQUEST_METHOD']) {
     
    case 'GET':
        $respuesta = (!isset($_GET['id'])) ? $personaModel->getPersonas() : $personaModel->getPersonas($_GET['id']);
        echo json_encode($respuesta);
    break;
   /*
    case 'GET':
        if ($_SERVER['REQUEST_URI'] === '/persona') {
            $respuesta = (!isset($_GET['id'])) ? $personaModel->getPersonas() : $personaModel->getPersonas($_GET['id']);
            echo json_encode($respuesta);
        }
        // ... otros endpoints
        break;    
*/
    case 'POST':
        $_POST = json_decode(file_get_contents('php://input', true));
        if(!isset($_POST->nombres) || is_null($_POST->nombres) || empty(trim($_POST->nombres)) || strlen($_POST->nombres) > 80){
            $respuesta = ['error', 'El nombre de la persona no debe estar vacío y no debe tener más de 80 caracteres'];
        }
        else if(!isset($_POST->paterno) || is_null($_POST->paterno) || empty(trim($_POST->paterno)) || strlen($_POST->paterno) > 80){
            $respuesta = ['error', 'El apellido de la persona no debe estar vacío y no debe tener más de 80 caracteres'];
        }
        else {
            $respuesta = $personaModel->savePersona(
                $_POST->nombres, 
                $_POST->paterno, 
                $_POST->materno, 
                $_POST->direccion, 
                $_POST->telefono, 
                $_POST->mobile, 
                $_POST->fecha_nacimiento, 
                $_POST->id_usuario_reg, 
                $_POST->id_profesion
            );
        }
        echo json_encode($respuesta);
    break;

    case 'PUT':
        $_PUT = json_decode(file_get_contents('php://input', true));
        if(!isset($_PUT->id) || is_null($_PUT->id) || empty(trim($_PUT->id))){
            $respuesta = ['error', 'El ID de la persona no debe estar vacío'];
        }
        else if(!isset($_PUT->nombres) || is_null($_PUT->nombres) || empty(trim($_PUT->nombres)) || strlen($_PUT->nombres) > 80){
            $respuesta = ['error', 'El nombre de la persona no debe estar vacío y no debe tener más de 80 caracteres'];
        }
        else if(!isset($_PUT->paterno) || is_null($_PUT->paterno) || empty(trim($_PUT->paterno)) || strlen($_PUT->paterno) > 80){
            $respuesta = ['error', 'El apellido de la persona no debe estar vacío y no debe tener más de 80 caracteres'];
        }
        else {
            $respuesta = $personaModel->updatePersona(
                $_PUT->id, 
                $_PUT->nombres, 
                $_PUT->paterno, 
                $_POST->materno, 
                $_PUT->direccion, 
                $_PUT->telefono, 
                $_POST->mobile, 
                $_PUT->fecha_nacimiento, 
                $_PUT->id_user_mod, 
                $_PUT->id_profesion
            );
        }
        echo json_encode($respuesta);
    break;

    case 'DELETE':
        $_DELETE = json_decode(file_get_contents('php://input', true));
        if(!isset($_DELETE->id) || is_null($_DELETE->id) || empty(trim($_DELETE->id))){
            $respuesta = ['error', 'El ID de la persona no debe estar vacío'];
        }
        else {
            $respuesta = $personaModel->deletePersona($_DELETE->id);
        }
        echo json_encode($respuesta);
    break;
}
