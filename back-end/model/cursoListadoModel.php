<?php

require_once '../../config/db.php';

class cursoListadoModel {
    private $conexion;
    
    public function __construct() {
        $db = new Database();
        $this->conexion = $db->getConnection();
    }

    // Método para obtener usuarios, con o sin filtro por ID
    public function getCursoListado($id = null) {
        $where = ($id == null) ? "" : " WHERE id_curso='$id'";
        $usuarios = [];
        $sql = "SELECT * FROM v_curso_listado" . $where;
        $registros = mysqli_query($this->conexion, $sql);
        
        while ($row = mysqli_fetch_assoc($registros)) {
            array_push($usuarios, $row);
        }
        
        return $usuarios;
    }
 
}
?>

