 <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
    <title>Metodos API  Cursoteka</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1 class="heading">Api Restfull Cursoteka</h1>
    
    <table class="api-table">
        <tr>
            <th>Método HTTP</th>
            <th>Endpoint</th>
            <th>Descripción</th>
        </tr>
        <tr>
            <td colspan="3"><h3>Persona API</h3></td>
        </tr>
        <tr>
            <td><a href="./api/persona/" class="btn get">GET</a></td>
            <td>/api/persona/</td>
            <td>Obtiene una lista de todas las personas.</td>
        </tr>
        <tr>
            <td><a href="./api/persona/11" class="btn get">GET</a></td>
            <td>/api/persona/{id}</td>
            <td>Obtiene los datos de una persona específica por su ID.</td>
        </tr>
        <tr>
            <td><a href="./api/persona/" class="btn post">POST</a></td>
            <td>/api/persona/</td>
            <td>Crea una nueva persona.</td>
        </tr>
        <tr>
            <td><a href="./api/persona/{id}" class="btn put">PUT</a></td>
            <td>/api/persona/{id}</td>
            <td>Actualiza los datos de una persona existente por su ID.</td>
        </tr>
        <tr>
            <td><a href="./api/persona/{id}" class="btn delete">DELETE</a></td>
            <td>/api/persona/{id}</td>
            <td>Elimina un usuario por su ID.</td>
        </tr>
        <tr>
            <td colspan="3"><h3>Usuario API</h3></td>
        </tr>
        <tr>
            <td><a href="./api/usuario/" class="btn get">GET</a></td>
            <td>/api/usuario/</td>
            <td>Obtiene una lista de todas los Usuarios.</td>
        </tr>
        <tr>
            <td><a href="./api/usuario/21" class="btn get">GET</a></td>
            <td>/api/usuario/{id}</td>
            <td>Obtiene los datos de una Usuario específico por su ID.</td>
        </tr>
        <tr>
            <td><a href="./api/usuario/" class="btn post">POST</a></td>
            <td>/api/usuario/</td>
            <td>Crea una nuevo Usuario.</td>
        </tr>
        <tr>
            <td><a href="./api/usuario/{id}" class="btn put">PUT</a></td>
            <td>/api/usuario/{id}</td>
            <td>Actualiza los datos de un Usuario existente por su ID.</td>
        </tr>
        <tr>
            <td><a href="./api/usuario/{id}" class="btn delete">DELETE</a></td>
            <td>/api/usuario/{id}</td>
            <td>Elimina un usuario por su ID.</td>
        </tr>      
        <tr>
            <td colspan="3"><h3>Curso API</h3></td>
        </tr>
        <tr>
            <td><a href="./api/curso/" class="btn get">GET</a></td>
            <td>/api/curso/</td>
            <td>Obtiene una lista de todos los Cursos.</td>
        </tr>
        <tr>
            <td><a href="./api/curso/17" class="btn get">GET</a></td>
            <td>/api/curso/{id}</td>
            <td>Obtiene los datos de un Curso específico por su ID.</td>
        </tr>
        <tr>
            <td><a href="./api/curso/" class="btn post">POST</a></td>
            <td>/api/curso/</td>
            <td>Crea un nuevo Curso.</td>
        </tr>
        <tr>
            <td><a href="./api/curso/{id}" class="btn put">PUT</a></td>
            <td>/api/curso/{id}</td>
            <td>Actualiza los datos de un Curso existente por su ID.</td>
        </tr>
        <tr>
            <td><a href="./api/curso/{id}" class="btn delete">DELETE</a></td>
            <td>/api/curso/{id}</td>
            <td>Elimina un curso por su ID.</td>
        </tr> 
        <tr>
            <td colspan="3"><h3>Curso de Estudiante API</h3></td>
        </tr>
        <tr>
            <td><a href="./api/curso_estudiante/" class="btn get">GET</a></td>
            <td>/api/curso_estudiante/</td>
            <td>Obtiene una lista de todos los Cursos de Estudiantes.</td>
        </tr>
        <tr>
            <td><a href="./api/curso_estudiante/6" class="btn get">GET</a></td>
            <td>/api/curso_estudiante/{id}</td>
            <td>Obtiene los datos de un Curso de Estudiante específico por su ID.</td>
        </tr>
        <tr>
            <td><a href="./api/curso_estudiante/" class="btn post">POST</a></td>
            <td>/api/curso_estudiante/</td>
            <td>Crea un nuevo Curso de Estudiante.</td>
        </tr>
        <tr>
            <td><a href="./api/curso_estudiante/{id}" class="btn put">PUT</a></td>
            <td>/api/curso_estudiante/{id}</td>
            <td>Actualiza los datos de un Curso de Estudiante existente por su ID.</td>
        </tr>
        <tr>
            <td><a href="./api/curso_estudiante/{id}" class="btn delete">DELETE</a></td>
            <td>/api/curso_estudiante/{id}</td>
            <td>Elimina un curso de estudiante por su ID.</td>
        </tr>    
        <tr>
            <td colspan="3"><h3>Recursos de un curso API</h3></td>
        </tr>
        <tr>
            <td><a href="./api/curso_recurso/" class="btn get">GET</a></td>
            <td>/api/curso_recurso/</td>
            <td>Obtiene una lista de todos los Recursos de un Cursos.</td>
        </tr>
        <tr>
            <td><a href="./api/curso_recurso/6" class="btn get">GET</a></td>
            <td>/api/curso_recurso/{id}</td>
            <td>Obtiene los datos de los Recursos de un Curso específico por su ID.</td>
        </tr>
        <tr>
            <td><a href="./api/curso_recurso/" class="btn post">POST</a></td>
            <td>/api/curso_recurso/</td>
            <td>Crea una nuevo Recurso de un curso.</td>
        </tr>
        <tr>
            <td><a href="./api/curso_recurso/{id}" class="btn put">PUT</a></td>
            <td>/api/curso_recurso/{id}</td>
            <td>Actualiza los datos de un Recurso de un curso existente por su ID.</td>
        </tr>
        <tr>
            <td><a href="./api/curso_recurso/{id}" class="btn delete">DELETE</a></td>
            <td>/api/curso_recurso/{id}</td>
            <td>Elimina un recurso de curso por su ID.</td>
        </tr>   
        
        
        <tr>
            <td colspan="3"><h3>Persona Usuario API</h3></td>
        </tr>
        <tr>
            <td><a href="./api/usuarioPersona/" class="btn get">GET</a></td>
            <td>/api/usuarioPersona/</td>
            <td>Obtiene una lista de todos los Usuarios Personas.</td>
        </tr>
        <tr>
            <td colspan="3"><h3>Curso Listado API</h3></td>
        </tr>
        <tr>
            <td><a href="./api/cursoListado/" class="btn get">GET</a></td>
            <td>/api/cursoListado/</td>
            <td>Obtiene una lista de todos cursos.</td>
        </tr>     
        <tr>
            <td colspan="3"><h3>Instructores API</h3></td>
        </tr>
        <tr>
            <td><a href="./api/instructor/" class="btn get">GET</a></td>
            <td>/api/instructor/</td>
            <td>Obtiene una lista de todos los instructores.</td>
        </tr>           


    </table>

</body>
</html>
