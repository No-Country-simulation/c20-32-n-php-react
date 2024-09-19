<?php

require_once '../../config/db.php';

class instructorModel {
    private $conexion;
    
    public function __construct() {
        $db = new Database();
        $this->conexion = $db->getConnection();
    }

    // Método para obtener usuarios, con o sin filtro por ID
    public function getListadoInstructores($id = null) {
        $where = ($id == null) ? "" : " WHERE id_persona='$id'";
        $usuarios = [];
        $sql = "SELECT * FROM v_instructor" . $where;
        $registros = mysqli_query($this->conexion, $sql);
        
        while ($row = mysqli_fetch_assoc($registros)) {
            array_push($usuarios, $row);
        }
        
        return $usuarios;
    }
 
}
?>

