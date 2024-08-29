<?php
class cursoRecursosModel {
    public $conexion;
    
    public function __construct() {
        $this->conexion = new mysqli('localhost', 'root', 'Pers.1987$', 'elearning');
        mysqli_set_charset($this->conexion, 'utf8');
    }

    // Método para obtener recursos, con o sin filtro por ID
    public function getRecursos($id = null) {
        $where = ($id == null) ? "" : " WHERE id_curso_recurso='$id'";
        $recursos = [];
        $sql = "SELECT * FROM curso_recursos" . $where;
        $registros = mysqli_query($this->conexion, $sql);
        
        while ($row = mysqli_fetch_assoc($registros)) {
            array_push($recursos, $row);
        }
        
        return $recursos;
    }

    // Método para guardar un nuevo recurso
    public function saveRecurso($id_curso, $detalle_recurso, $tipo_recurso, $nombre, $user_ad) {
        $sql = "INSERT INTO curso_recursos (id_curso, detalle_recurso, tipo_recurso, nombre, user_ad) 
                VALUES ('$id_curso', '$detalle_recurso', '$tipo_recurso', '$nombre', '$user_ad')";
        mysqli_query($this->conexion, $sql);
        
        return ['success', 'Recurso guardado'];
    }

    // Método para actualizar un recurso existente
    public function updateRecurso($id, $id_curso, $detalle_recurso, $tipo_recurso, $nombre, $user_mod) {
        $existe = $this->getRecursos($id);
        if (count($existe) > 0) {
            $sql = "UPDATE curso_recursos 
                    SET id_curso='$id_curso', detalle_recurso='$detalle_recurso', tipo_recurso='$tipo_recurso', 
                        nombre='$nombre', user_mod='$user_mod'
                    WHERE id_curso_recurso='$id'";
            mysqli_query($this->conexion, $sql);
            return ['success', 'Recurso actualizado'];
        } else {
            return ['error', 'No existe el recurso con ID ' . $id];
        }
    }

    // Método para eliminar un recurso
    public function deleteRecurso($id) {
        $valida = $this->getRecursos($id);
        if (count($valida) > 0) {
            $sql = "DELETE FROM curso_recursos WHERE id_curso_recurso='$id'";
            mysqli_query($this->conexion, $sql);
            return ['success', 'Recurso eliminado'];
        } else {
            return ['error', 'No existe el recurso con ID ' . $id];
        }
    }
}
?>
