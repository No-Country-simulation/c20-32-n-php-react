<?php

require_once '../../config/db.php';

class usuarioModel {
    private $conexion;
    
    public function __construct() {
        $db = new Database();
        $this->conexion = $db->getConnection();
    }

    // Método para obtener usuarios, con o sin filtro por ID
    public function getUsuarios($id = null) {
        $where = ($id == null) ? "" : " WHERE id_usuario='$id'";
        $usuarios = [];
        $sql = "SELECT * FROM usuario" . $where;
        $registros = mysqli_query($this->conexion, $sql);
        
        while ($row = mysqli_fetch_assoc($registros)) {
            array_push($usuarios, $row);
        }
        
        return $usuarios;
    }

    // Método para guardar un nuevo usuario
    public function saveUsuario($nombre_usuario, $email, $password, $id_persona, $id_usuario_reg,$rol) {
        
        $sql = "INSERT INTO usuario (nombre_usuario, email, password, id_persona, id_usuario_reg,rol) 
                VALUES ('$nombre_usuario', '$email', '$password', $id_persona, $id_usuario_reg,'$rol')";
        //echo "q: $sql";
        mysqli_query($this->conexion, $sql);

        $id_persona_insertada = mysqli_insert_id($this->conexion);
        
        return ['success', 'Usuario guardado',"id nuevo usuario",$id_persona_insertada];
    }

    // Método para actualizar un usuario existente
    public function updateUsuario($id, $nombre_usuario, $email, $password, $id_persona, $id_user_mod,$rol) {
        $existe = $this->getUsuarios($id);
        if (count($existe) > 0) {
            $sql = "UPDATE usuario 
                    SET nombre_usuario='$nombre_usuario', email='$email', password='$password', 
                        id_persona=$id_persona, id_user_mod=$id_user_mod ,rol='$rol'
                    WHERE id_usuario=$id";
            //echo "query $sql";
            mysqli_query($this->conexion, $sql);
            return ['success', 'Usuario actualizado'];
        } else {
            return ['error', 'No existe el usuario con ID ' . $id];
        }
    }

    // Método para eliminar un usuario
    public function deleteUsuario($id) {
        $valida = $this->getUsuarios($id);
        if (count($valida) > 0) {
            $sql = "DELETE FROM usuario WHERE id_usuario='$id'";
            mysqli_query($this->conexion, $sql);
            return ['success', 'Usuario eliminado'];
        } else {
            return ['error', 'No existe el usuario con ID ' . $id];
        }
    }
}
?>

