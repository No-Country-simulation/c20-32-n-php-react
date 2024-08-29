 <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Api Restful Cursoteka</title>
    <style>
        .heading {
            font-size: 24px;
            font-weight: bold;
        }
        .list {
            list-style-type: none;
            padding: 0;
        }
        .list li {
            margin: 10px 0;
        }
        .badge {
            background-color: #ffcc00;
            padding: 5px;
            border-radius: 5px;
        }
    </style>
</head>
<body>

<h2 class="heading">Api Restful Cursoteka</h2>

<ul class="list">
    <li>
       GET <a href="./api/persona/">Persona</a> 
    </li>
    <li>
    GET <a href="./api/usuario/">Usuario</a> 
    </li>
    <li>
    GET <a href="./api/curso/">Curso</a> 
    </li>
    <li>
    GET <a href="./api/curso_estudiante/">Cursos de estudiantes</a> 
    </li>    
    <li>
    GET <a href="./api/curso_recurso/">Recursos de curso</a><span class="badge">New!</span>
    </li>
</ul>

</body>
</html>
