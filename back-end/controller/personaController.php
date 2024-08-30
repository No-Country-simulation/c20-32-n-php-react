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
        $id = isset($_GET['id']) ? $_GET['id'] : null;        
        $respuesta = $personaModel->getPersonas($id);
        echo json_encode($respuesta);
        break;   
   
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
        // Extraer el ID de la URL
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
            $respuesta = ['error', 'El ID de la persona no debe estar vacío'];
        }
        else if(!isset($putData['nombres']) || is_null($putData['nombres']) || empty(trim($putData['nombres'])) || strlen($putData['nombres']) > 80){
            $respuesta = ['error', 'El nombre de la persona no debe estar vacío y no debe tener más de 80 caracteres'];
        }
        else if(!isset($putData['paterno']) || is_null($putData['paterno']) || empty(trim($putData['paterno'])) || strlen($putData['paterno']) > 80){
            $respuesta = ['error', 'El apellido paterno de la persona no debe estar vacío y no debe tener más de 80 caracteres'];
        }
        else {
     
            $respuesta = $personaModel->updatePersona(
                $id, 
                $putData['nombres'], 
                $putData['paterno'], 
                isset($putData['materno']) ? $putData['materno'] : null, 
                isset($putData['direccion']) ? $putData['direccion'] : null, 
                isset($putData['telefono']) ? $putData['telefono'] : null, 
                isset($putData['mobile']) ? $putData['mobile'] : null, 
                isset($putData['fecha_nacimiento']) ? $putData['fecha_nacimiento'] : null, 
                isset($putData['id_user_mod']) ? $putData['id_user_mod'] : null, 
                isset($putData['id_profesion']) ? $putData['id_profesion'] : null
            );
        }
        echo json_encode($respuesta);
    break;

     

    /*
    caso de enviar en postaman 
    Opción 2: Enviar el ID en el cuerpo del JSON
    Si prefieres mantener el ID en el cuerpo de la solicitud (como se hace con POST y PUT), debes asegurarte de que el ID se esté enviando correctamente en el cuerpo de la solicitud cuando utilices el método DELETE. Aquí te muestro cómo debería lucir tu solicitud en Postman:

    Selecciona el método DELETE.
    Ve a la pestaña Body.
    Selecciona la opción raw y luego JSON.
    Ingresa el siguiente JSON en el cuerpo:
    json
    Copiar código
    {
        "id": 17
    }
    Esta segunda opción no requiere cambios en tu código actual, pero te obliga a enviar el ID como parte del cuerpo de la solicitud.    

    case 'DELETE':
        $_DELETE = json_decode(file_get_contents('php://input', true));
        if(!isset($_DELETE->id) || is_null($_DELETE->id) || empty(trim($_DELETE->id))){
            $respuesta = ['error', 'El ID de la persona no debe estar vacío '];
        }
        else {
            $respuesta = $personaModel->deletePersona($_DELETE->id);
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
            $respuesta = $personaModel->deletePersona($id);
        }
        echo json_encode($respuesta);
    break;    
}
