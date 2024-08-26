# API restfull Persona 
API en <b> PHP 8.0.30 </b> sin usar framework

Base de datos en <b>mysql 8.0.39</b>

Nombre de la base de datos: <b>elearning</b>

Nombre de la tabla: <b>persona</b>

Paso 1: Clonar o descargar el proyecto en el directorio de tu servidor web

Paso 2: Crear una base de datos mysql

Paso 3: Importar el archivo <b>persona.sql</b> para crear la tabla

Paso 4: Modificar la línea 5 del archivo <b>personaModel.php</b> (conexión a la B.D) y colocar host, usuario, contraseña y nombre de la B.D, etc.

Paso 5: Visualizar en tu servidor la API, (http://localhost/back-end/) o el host virutal asignado




## Columnas de la tabla
- id_persona (PK)
- nombres
- apellidos
- dirección
- teléfono
- fecha_nacimiento
- fecha_registro
- id_usuario_reg (FK)
- fecha_mod
- id_user_mod