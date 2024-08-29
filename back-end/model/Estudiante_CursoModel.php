<?php

require_once '../../config/db.php';

class EstudianteCursoModel {
    private $conexion;
    
    public function __construct() {
        $db = new Database();
        $this->conexion = $db->getConnection();
    }

    // Método para obtener registros de estudiante_curso, con o sin filtro por ID
    public function getEstudianteCursos($id = null) {
        $where = ($id == null) ? "" : " WHERE id_curso_estudiante='$id'";
        $estudiantesCursos = [];
        $sql = "SELECT * FROM estudiante_curso" . $where;
        $registros = mysqli_query($this->conexion, $sql);
        
        while ($row = mysqli_fetch_assoc($registros)) {
            array_push($estudiantesCursos, $row);
        }
        
        return $estudiantesCursos;
    }

    // Método para guardar un nuevo registro en estudiante_curso
    public function saveEstudianteCurso($id_estudiante, $id_curso, $tipo_pago, $direccion_facturacion, $id_user_add) {
        $sql = "INSERT INTO estudiante_curso (id_estudiante, id_curso, tipo_pago, direccion_facturacion, id_user_add) 
                VALUES ('$id_estudiante', '$id_curso', '$tipo_pago', '$direccion_facturacion', '$id_user_add')";
        mysqli_query($this->conexion, $sql);
        
        return ['success', 'Registro guardado'];
    }

    // Método para actualizar un registro existente en estudiante_curso
    public function updateEstudianteCurso($id, $id_estudiante, $id_curso, $tipo_pago, $direccion_facturacion, $id_user_mod) {
        $existe = $this->getEstudianteCursos($id);
        if (count($existe) > 0) {
            $sql = "UPDATE estudiante_curso 
                    SET id_estudiante='$id_estudiante', id_curso='$id_curso', tipo_pago='$tipo_pago', 
                        direccion_facturacion='$direccion_facturacion', id_user_mod='$id_user_mod'
                    WHERE id_curso_estudiante='$id'";
            mysqli_query($this->conexion, $sql);
            return ['success', 'Registro actualizado'];
        } else {
            return ['error', 'No existe el registro con ID ' . $id];
        }
    }

    // Método para eliminar un registro de estudiante_curso
    public function deleteEstudianteCurso($id) {
        $valida = $this->getEstudianteCursos($id);
        if (count($valida) > 0) {
            $sql = "DELETE FROM estudiante_curso WHERE id_curso_estudiante='$id'";
            mysqli_query($this->conexion, $sql);
            return ['success', 'Registro eliminado'];
        } else {
            return ['error', 'No existe el registro con ID ' . $id];
        }
    }
}
?>
