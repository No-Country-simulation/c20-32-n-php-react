<?php

require_once '../../config/db.php';

class personaModel {
    private $conexion;
    
    public function __construct() {
        $db = new Database();
        $this->conexion = $db->getConnection();
    }

    // Método para obtener personas, con o sin filtro por ID
    public function getPersonas($id = null) {
        $where = ($id == null) ? "" : " WHERE id_persona='$id'";
        $personas = [];
        $sql = "SELECT * FROM persona " . $where;
        $registros = mysqli_query($this->conexion, $sql);
        
        while ($row = mysqli_fetch_assoc($registros)) {
            array_push($personas, $row);
        }
        
        return $personas;
    }

    // Método para guardar una nueva persona
    public function savePersona($nombres, $paterno, $materno,$direccion, $telefono, $mobile, $fecha_nacimiento, $id_usuario_reg, $id_profesion) {
        $valida = $this->validatePersona($nombres, $paterno, $fecha_nacimiento);
        $resultado = ['error', 'Ya existe una persona con las mismas características'];
        if($fecha_nacimiento==""){
            $fecha_nacimiento="null";
        }
        else{
            $fecha_nacimiento="'$fecha_nacimiento'";
        }
        if($id_profesion==""){
            $id_profesion="null";
        }else{
            $id_profesion="'$id_profesion'";
        }



        if (count($valida) == 0) {
            $sql = "INSERT INTO persona (nombres, paterno, materno,direccion, telefono, mobile, fecha_nacimiento, id_usuario_reg, id_profesion) 
                    VALUES ('$nombres', '$paterno', '$materno','$direccion', '$telefono', '$mobile',$fecha_nacimiento, $id_usuario_reg, $id_profesion)";
            echo "query: $sql";
            mysqli_query($this->conexion, $sql);

            $id_persona_insertada = mysqli_insert_id($this->conexion);

            $resultado = [
                'resultado' => 'success',
                'mensaje' => 'Persona guardada',
                'id_nueva_persona' => $id_persona_insertada
            ];        
            
            $resultado_json = json_encode($resultado);
        }
        
        return $resultado_json;
    }

    // Método para actualizar una persona existente
    public function updatePersona($id, $nombres, $paterno, $materno,$direccion, $telefono, $mobile,$fecha_nacimiento, $id_user_mod, $id_profesion) {
        $existe = $this->getPersonas($id);
        $resultado = ['error', 'No existe la persona con ID ' . $id];

        //echo "ip: $id_profesion";
        if(empty($id_profesion) || $id_profesion==="" )
            $id_profesion="null";
        
        if (count($existe) > 0) {
             
                $sql = "UPDATE persona 
                        SET nombres='$nombres', paterno='$paterno', materno='$materno', direccion='$direccion' ,
                        telefono='$telefono', mobile='$mobile',fecha_nacimiento='$fecha_nacimiento', 
                        id_user_mod=$id_user_mod, id_profesion=$id_profesion 
                        WHERE id_persona=$id";
                //echo "query: $sql";

                mysqli_query($this->conexion, $sql);
                $resultado = ['success', 'Persona actualizada'];
            
        }
        
        return $resultado;
    }

    // Método para eliminar una persona
    public function deletePersona($id) {
        $valida = $this->getPersonas($id);
        $resultado = ['error', 'No existe la persona con ID ' . $id];
        
        if (count($valida) > 0) {
            $sql = "DELETE FROM persona WHERE id_persona=$id";
            //echo "sql: $sql";
            mysqli_query($this->conexion, $sql);
            $resultado = ['success', 'Persona eliminada'];
        }
        
        return $resultado;
    }

    // Método para validar si una persona con los mismos datos ya existe
  
        public function validatePersona($nombres, $apellidos, $fecha_nacimiento) {
            $personas = [];
            $sql = "SELECT * FROM persona WHERE nombres='$nombres' AND paterno='$apellidos' AND fecha_nacimiento='$fecha_nacimiento'";
        
            // Ejecutar la consulta
            $registros = mysqli_query($this->conexion, $sql);
        
            // Verificar si la consulta fue exitosa
            if ($registros && mysqli_num_rows($registros) > 0) {
                while ($row = mysqli_fetch_assoc($registros)) {
                    array_push($personas, $row);
                }
            } else {
                // Manejar el caso en el que la consulta falla o no devuelve registros
                if (!$registros) {
                    // Error en la consulta
                    error_log("Error en la consulta SQL: " . mysqli_error($this->conexion));
                }
            }
        
            return $personas;
        }
        
}
