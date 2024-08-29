<?php
class personaModel {
    public $conexion;
    
    public function __construct() {
        $this->conexion = new mysqli('localhost', 'root', 'Pers.1987$', 'elearning');
        mysqli_set_charset($this->conexion, 'utf8');
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
    public function savePersona($nombres, $apellidos, $direccion, $telefono, $fecha_nacimiento, $id_usuario_reg, $id_profesion) {
        $valida = $this->validatePersona($nombres, $apellidos, $fecha_nacimiento);
        $resultado = ['error', 'Ya existe una persona con las mismas características'];
        
        if (count($valida) == 0) {
            $sql = "INSERT INTO persona (nombres, apellidos, direccion, telefono, fecha_nacimiento, id_usuario_reg, id_profesion) 
                    VALUES ('$nombres', '$apellidos', '$direccion', '$telefono', '$fecha_nacimiento', '$id_usuario_reg', '$id_profesion')";
            mysqli_query($this->conexion, $sql);
            $resultado = ['success', 'Persona guardada'];
        }
        
        return $resultado;
    }

    // Método para actualizar una persona existente
    public function updatePersona($id, $nombres, $apellidos, $direccion, $telefono, $fecha_nacimiento, $id_user_mod, $id_profesion) {
        $existe = $this->getPersonas($id);
        $resultado = ['error', 'No existe la persona con ID ' . $id];
        
        if (count($existe) > 0) {
            $valida = $this->validatePersona($nombres, $apellidos, $fecha_nacimiento);
            $resultado = ['error', 'Ya existe una persona con las mismas características'];
            
            if (count($valida) == 0) {
                $sql = "UPDATE persona 
                        SET nombres='$nombres', apellidos='$apellidos', direccion='$direccion', telefono='$telefono', 
                            fecha_nacimiento='$fecha_nacimiento', id_user_mod='$id_user_mod', id_profesion='$id_profesion' 
                        WHERE id_persona='$id'";
                mysqli_query($this->conexion, $sql);
                $resultado = ['success', 'Persona actualizada'];
            }
        }
        
        return $resultado;
    }

    // Método para eliminar una persona
    public function deletePersona($id) {
        $valida = $this->getPersonas($id);
        $resultado = ['error', 'No existe la persona con ID ' . $id];
        
        if (count($valida) > 0) {
            $sql = "DELETE FROM persona WHERE id_persona='$id'";
            mysqli_query($this->conexion, $sql);
            $resultado = ['success', 'Persona eliminada'];
        }
        
        return $resultado;
    }

    // Método para validar si una persona con los mismos datos ya existe
    public function validatePersona($nombres, $apellidos, $fecha_nacimiento) {
        $personas = [];
        $sql = "SELECT * FROM persona WHERE nombres='$nombres' AND apellidos='$apellidos' AND fecha_nacimiento='$fecha_nacimiento'";
        $registros = mysqli_query($this->conexion, $sql);
        
        while ($row = mysqli_fetch_assoc($registros)) {
            array_push($personas, $row);
        }
        
        return $personas;
    }
}
