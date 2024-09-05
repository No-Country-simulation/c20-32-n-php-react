# No country Simulation

### Grupo c20-32-n-php-react

## Proyecto: Plataforma E-Learning para Cursos Online

**Equipo C20-32-n-php-react: Sin Miedo al Éxito (SMaE)**

## Integrantes

- Eleonora Ongaro  : [eleo.ongaro@gmail.com](mailto:eleo.ongaro@gmail.com)
- Favian Medina    : [fabinnerself@gmail.com](mailto:fabinnerself@gmail.com)
- Jhony Fori       : [johny.fori@gmail.com](mailto:jhony.fori@gmail.com)
- Jeyson Olmos     : [jeyson.olmos.paz@gmail.com](mailto:jeyson.olmos.paz@gmail.com)
- Diego Urioste    : [daurioste@gmail.com](mailto:daurioste@gmail.com)
- Damián Esteves   : [desteves@gmail.com](mailto:desteves@gmail.com)

                             Año 2024

## Documento de Testing QA para Plataforma E-Learning

### Objetivo
El objetivo de este documento es proporcionar una guía para realizar pruebas de Testing (QA) en la plataforma E-Learning en su etapa inicial. Esta guía servirá como referencia para garantizar que todas las funcionalidades del sistema se comporten según lo esperado y cumplan con los requisitos especificados.

### Épicas, HU y Casos de Prueba

#### Página Principal (Home)
- **Historia de Usuario**: Como usuario, quiero ver una página principal bien estructurada con acceso a ofertas destacadas y cursos recomendados para poder explorar la plataforma fácilmente.
- **Criterios de Aceptación**:
  - La página principal debe cargarse correctamente.
  - Los cursos recomendados deben mostrarse y enlazar a sus páginas de detalle.

#### Logo
- **Historia de Usuario**: Como usuario, quiero contar con un botón que muestre el logo en todas las páginas del sitio y que sea un link para regresar a la página principal del mismo.
- **Criterios de Aceptación**: 
  - El sitio debe estar funcional y el botón del logo visible y activo.
- **Casos de Prueba**:
  - **Logo-001**: Verificar que el logo sea un botón que al hacer clic, sea un link a la página principal del sitio.
    - **Pasos**: Ingresar a la web de la plataforma E-Learning la cual debe estar operativa. Completar el formulario de registro con información válida y enviar.
    - **Resultado Esperado**: Que al hacer clic me derive siempre a la página principal del sitio.

#### Registro de Usuario
- **Historia de Usuario**: Como nuevo usuario, quiero registrarme en la plataforma proporcionando mi información para crear una cuenta y acceder a los cursos.
- **Criterios de Aceptación**:
  - El formulario de registro debe requerir información como nombre, correo electrónico y contraseña segura con los requisitos especificados.
  - El sistema debe validar la información y mostrar mensajes de error "Datos no válidos".
  - El usuario debe visualizar un mensaje de "Registro Exitoso" y recibir un correo electrónico de confirmación.
- **Casos de Prueba**:
  - **CP-002**: Verificar el registro con información válida.
    - **Pasos**: Ingresar a la web de la plataforma E-Learning, completar el formulario de registro con información válida y enviar.
    - **Resultado Esperado**: Se muestra un mensaje de confirmación y el usuario recibe un correo electrónico de verificación de registro.
  - **CP-003**: Comprobar la validación de datos incorrectos.
    - **Pasos**: Introducir información inválida en el formulario de registro y enviar.
    - **Resultado Esperado**: Se muestra un mensaje de error especificando el problema.
  - **CP-004**: Verificar la recepción del correo de confirmación.
    - **Pasos**: Completar el registro y revisar el correo electrónico.
    - **Resultado Esperado**: Se recibe un correo electrónico de confirmación con un enlace para activar la cuenta.

#### Login
- **Historia de Usuario**: Como usuario registrado, quiero poder iniciar sesión en la plataforma para acceder a mis cursos y/o funcionalidades.
- **Criterios de Aceptación**:
  - El formulario de login debe aceptar un correo electrónico registrado válido y la contraseña creada durante el registro.
  - Debe haber una opción de "Olvidé mi contraseña" para recuperar la contraseña en caso de olvido.
  - El usuario debe ser redirigido a la página principal tras un login exitoso.
- **Casos de Prueba**:
  - **CP-005**: Verificar el login con credenciales válidas.
    - **Pasos**: Introducir correo electrónico y contraseña válidos y hacer clic en "logIn".
    - **Resultado Esperado**: El usuario es redirigido a la página del curso adquirido.
  - **CP-006**: Comprobar la recuperación de contraseña.
    - **Pasos**: Hacer clic en "Olvidé mi contraseña", introducir el correo electrónico y seguir las instrucciones.
    - **Resultado Esperado**: Se envía un correo electrónico de recuperación y el usuario puede restablecer la contraseña.
  - **CP-007**: Verificar el login con un usuario inválido y clave válida.
    - **Pasos**: Introducir correo electrónico correcto y contraseña incorrecta y hacer clic en “login".
    - **Resultado Esperado**: Se muestra un mensaje de error indicando error de login, “datos incorrectos, por favor verifique su usuario y contraseña”.
  - **CP-008**: Verificar el login con un usuario válido y clave inválida.
    - **Pasos**: Introducir correo electrónico correcto y contraseña incorrecta y hacer clic en "login".
    - **Resultado Esperado**: Se muestra un mensaje de error indicando error de login, “datos incorrectos, por favor verifique su usuario y contraseña”.
  - **CP-009**: Verificar el login con un usuario y clave en blanco.
    - **Pasos**: No Introducir datos en los campos usuario y contraseña y hacer clic en "login".
    - **Resultado Esperado**: Se muestra un mensaje de error indicando error de login “datos incorrectos, por favor verifique su usuario y contraseña y vuelva a intentarlo”.

#### Menú con Categorías
- **Historia de Usuario**: Como usuario, quiero explorar cursos por categorías (Programación, Diseño, Salud) para filtrar fácilmente cursos que me interesen.
- **Criterios de Aceptación**:
  - El menú debe mostrar las categorías correctamente.
  - Cada categoría debe enlazar a una página que muestre los cursos correspondientes.
- **Casos de Prueba**:
  - **CP-010**: Verificar que todas las categorías están visibles en el menú.
    - **Pasos**: Navegar al menú de categorías.
    - **Resultado Esperado**: Las categorías Programación, Diseño y Salud están visibles.
  - **CP-011**: Comprobar que cada categoría enlaza a la página correcta.
    - **Pasos**: Hacer clic en una categoría y revisar la página resultante.
    - **Resultado Esperado**: La página muestra cursos que pertenecen a la categoría seleccionada.

#### Carro de Compras
- **Historia de Usuario**: Como usuario final, quiero contar con un botón de carro de compras para agregar cursos desde la página del curso.
- **Criterios de Aceptación**:
  - El botón "Agregar al Carro de Compras" debe ser visible y funcional.
  - El carro debe actualizar dinámicamente la cantidad de cursos y el valor total.
  - El carro debe permitir quitar cursos y ofrecer diferentes monedas para la compra.
- **Casos de Prueba**:
  - **CP-012**: Verificar la adición de cursos al carro de compras.
    - **Pasos**: Seleccionar un curso y agregarlo al carro.
    - **Resultado Esperado**: El curso se muestra en el carro de compras.
  - **CP-013**: Comprobar la visualización del contenido del carro.
    - **Pasos**: Ir al carro de compras.
    - **Resultado Esperado**: El carro muestra los cursos agregados, detalle y valores de cada uno.
  - **CP-014**: Validar el proceso de compra desde el carro.
    - **Pasos**: Proceder con la compra desde el carro.
    - **Resultado Esperado**: El proceso de compra se completa con éxito y se genera una confirmación de compra mediante mensaje y correo.

#### Búsqueda
- **Historia de Usuario**: Como usuario, quiero buscar cursos específicos utilizando palabras clave para encontrar rápidamente los cursos que me interesan.
- **Criterios de Aceptación**:
  - La barra de búsqueda debe funcionar correctamente y devolver resultados relevantes.
  - Los resultados de búsqueda deben incluir cursos relacionados con la palabra clave introducida.
- **Casos de Prueba**:
  - **CP-015**: Verificar la búsqueda con una palabra clave válida.
    - **Pasos**: Introducir una palabra clave en la barra de búsqueda y realizar la búsqueda.
    - **Resultado Esperado**: Los resultados muestran cursos relacionados con la palabra clave.
  - **CP-016**: Comprobar la búsqueda con una palabra clave no relacionada.
    - **Pasos**: Introducir una palabra clave irrelevante y realizar la búsqueda.
    - **Resultado Esperado**: Se muestra un mensaje indicando que no se encontraron resultados.

#### Catálogo Estático de Cursos
- **Historia de Usuario**: Como usuario, quiero ver un catálogo con imágenes estáticas de cursos disponibles para explorar y seleccionar cursos de mi interés.
- **Criterios de Aceptación**:
  - El catálogo debe mostrar una lista de cursos disponibles con fotos.
  - Cada curso debe mostrar detalles básicos y permitir la selección para más información.
- **Casos de Prueba**:
  - **CP-017**: Verificar la visualización del catálogo principal de cursos.
    - **Pasos**: Navegar a la sección de catálogo principal.
    - **Resultado Esperado**: Se muestra una lista de cursos con fotos y detalles básicos.
  - **CP-018**: Comprobar que cada curso en el catálogo enlaza a su página de detalle.
    - **Pasos**: Hacer clic en un curso en el catálogo.
    - **Resultado Esperado**: La página de detalle del curso se muestra correctamente.

#### Acerca de
- **Historia de Usuario**: Como usuario, quiero acceder a la información general para entender la misión, visión, objetivos y logros de la plataforma.
- **Criterios de Aceptación**:
  - La sección "Acerca de" debe proporcionar información relevante y actualizada.
- **Casos de Prueba**:
  - **CP-019**: Verificar el contenido de la sección "Acerca de".
    - **Pasos**: Navegar a la sección "Acerca de".
    - **Resultado Esperado**: La sección muestra información clara y relevante sobre la plataforma.

#### Soporte Técnico
- **Historia de Usuario**: Como usuario, quiero acceder a soporte técnico para resolver cualquier problema o duda que pueda tener con la plataforma.
- **Criterios de Aceptación**:
  - La sección de soporte técnico debe ofrecer opciones para contactar con soporte y recibir ayuda.
- **Casos de Prueba**:
  - **CP-020**: Verificar el acceso a la sección de soporte técnico.
    - **Pasos**: Navegar a la sección de soporte técnico.
    - **Resultado Esperado**: La sección muestra opciones para contactar con soporte técnico.
  - **CP-021**: Comprobar la funcionalidad de los canales de soporte.
    - **Pasos**: Utilizar uno de los canales de soporte (chat, correo electrónico, etc.).
    - **Resultado Esperado**: El usuario recibe una respuesta adecuada o confirmación de recepción de la solicitud.

#### Contacto
- **Historia de Usuario**: Como usuario, quiero enviar un mensaje a través de un formulario de contacto para hacer consultas o dar feedback sobre la plataforma.
- **Criterios de Aceptación**:
  - El formulario debe permitir enviar mensajes con campos obligatorios (nombre, correo electrónico, mensaje).
  - El usuario debe recibir una confirmación de recepción del mensaje.
- **Casos de Prueba**:
  - **CP-022**: Verificar el envío de un mensaje a través del formulario de contacto.
    - **Pasos**: Completar el formulario de contacto con información válida y enviarlo.
    - **Resultado Esperado**: Se muestra un mensaje de confirmación indicando que el mensaje ha sido recibido.
  - **CP-023**: Comprobar la validación de campos obligatorios en el formulario de contacto.
    - **Pasos**: Intentar enviar el formulario con campos obligatorios vacíos.
    - **Resultado Esperado**: Se muestran mensajes de error indicando que los campos obligatorios deben ser completados.

Estos casos de prueba y criterios de aceptación ayudarán a asegurar que cada funcionalidad de la plataforma E-Learning funcione correctamente y cumpla con las expectativas de los usuarios. Se pueden ajustar estos ejemplos según las características específicas y necesidades de la plataforma.
