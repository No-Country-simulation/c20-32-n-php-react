<?php
class cursoModel {
    public $conexion;
    
    public function __construct() {
        $this->conexion = new mysqli('localhost', 'root', 'Pers.1987$', 'elearning');
        mysqli_set_charset($this->conexion, 'utf8');
    }

    // Método para obtener cursos, con o sin filtro por ID
    public function getCursos($id = null) {
        $where = ($id == null) ? "" : " WHERE id_curso='$id'";
        $cursos = [];
        $sql = "SELECT * FROM curso" . $where;
        $registros = mysqli_query($this->conexion, $sql);
        
        while ($row = mysqli_fetch_assoc($registros)) {
            array_push($cursos, $row);
        }
        
        return $cursos;
    }

    // Método para guardar un nuevo curso
    public function saveCurso($titulo, $descripcion, $contenido, $duracion, $foto, $valoracion, $costo, $id_instructor, $id_usuario_reg) {
        $sql = "INSERT INTO curso (titulo, descripcion, contenido, duracion, foto, valoracion, costo, id_instructor, id_usuario_reg) 
                VALUES ('$titulo', '$descripcion', '$contenido', '$duracion', '$foto', '$valoracion', '$costo', '$id_instructor', '$id_usuario_reg')";
        mysqli_query($this->conexion, $sql);
        
        return ['success', 'Curso guardado'];
    }

    // Método para actualizar un curso existente
    public function updateCurso($id, $titulo, $descripcion, $contenido, $duracion, $foto, $valoracion, $costo, $id_instructor, $id_user_mod) {
        $existe = $this->getCursos($id);
        if (count($existe) > 0) {
            $sql = "UPDATE curso 
                    SET titulo='$titulo', descripcion='$descripcion', contenido='$contenido', 
                        duracion='$duracion', foto='$foto', valoracion='$valoracion', costo='$costo',
                        id_instructor='$id_instructor', id_user_mod='$id_user_mod'
                    WHERE id_curso='$id'";
            mysqli_query($this->conexion, $sql);
            return ['success', 'Curso actualizado'];
        } else {
            return ['error', 'No existe el curso con ID ' . $id];
        }
    }

    // Método para eliminar un curso
    public function deleteCurso($id) {
        $valida = $this->getCursos($id);
        if (count($valida) > 0) {
            $sql = "DELETE FROM curso WHERE id_curso='$id'";
            mysqli_query($this->conexion, $sql);
            return ['success', 'Curso eliminado'];
        } else {
            return ['error', 'No existe el curso con ID ' . $id];
        }
    }
}
?>

