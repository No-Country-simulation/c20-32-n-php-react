<?php
class Database {
    private $host = 'localhost';
    private $user = 'root';
    private $password = 'Pers.1987$';
    private $dbname = 'cursoteka';
    public $conexion;

    public function __construct() {
        $this->conexion = new mysqli($this->host, $this->user, $this->password, $this->dbname);
        if ($this->conexion->connect_error) {
            die('Conexión fallida: ' . $this->conexion->connect_error);
        }
        mysqli_set_charset($this->conexion, 'utf8');
    }

    public function getConnection() {
        return $this->conexion;
    }
}
?>
