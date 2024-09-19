<?php
class Database {
    private $host = 'fra1.clusters.zeabur.com';
    private $user = 'root';
    private $password = 'B71ui3bNhz4MUdf0t2LWrs5P6vc89RKp';
    private $dbname = 'cursoteka';
    private $port = 30922;
    public $conexion;

    public function __construct() {
        $this->conexion = new mysqli($this->host, $this->user, $this->password, $this->dbname , $this->port);
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
