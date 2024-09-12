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

# Documentación de Casos de Prueba para Plataforma E-Learning

## Logo

**Historia de Usuario:** Como usuario, quiero contar con un botón que muestre el logo en todas las páginas del sitio y que sea un link para regresar a la página principal del mismo.

**Criterios de Aceptación:**
- El sitio debe estar funcional y el botón del logo visible y activo.

**Casos de Prueba:**

- **CP-001:** Verificar que el logo sea un botón que al hacer clic, este sea un link a la página principal del sitio.
  - **Pasos:** Ingresar a la web de la plataforma E-Learning la cual debe estar operativa. Completar el formulario de registro con información válida y enviar.
  - **Resultado Esperado:** Que al hacer clic me derive siempre a la página principal del sitio.

## Registro de Usuario

**Historia de Usuario:** Como nuevo usuario, quiero registrarme en la plataforma proporcionando mi información para crear una cuenta y acceder a los cursos.

**Criterios de Aceptación:**
- El formulario de registro debe requerir información como nombre de usuario, correo electrónico y contraseña segura mínima de 8 caracteres, debe contener al menos 1 mayúscula, 1 minúscula, un número y un carácter especial (#-$-%- &-@).
- El sistema debe validar la información y mostrar mensajes de error Datos no válidos.
- El usuario debe visualizar un mensaje de Registro Exitoso, se ha enviado un mail a su casilla para la confirmación tras el registro.

**Casos de Prueba:**

- **CP-002:** Verificar el registro con información válida.
  - **Pasos:** Ingresar a la web de la plataforma E-Learning la cual debe estar operativa. Completar el formulario de registro con información válida (Nombre de usuario, contraseña, mail válido) y enviar.
  - **Resultado Esperado:** Se muestra un mensaje de confirmación y el usuario recibe un correo electrónico de verificación de registro.

- **CP-003:** Comprobar el registro sin nombre de usuario.
  - **Pasos:** Registro de usuario con nombre de usuario en blanco, completando contraseña y mail, enviar.
  - **Resultado Esperado:** Se debería mostrar un mensaje de error indicando que los datos están incompletos, vuelva a intentarlo.

- **CP-004:** Comprobar el registro de datos, con contraseña en blanco.
  - **Pasos:** Registro de usuario ingresando un nombre de usuario, dejar la contraseña en blanco e ingresar un mail válido, luego enviar.
  - **Resultado Esperado:** Se debería mostrar un mensaje de error indicando que los datos están incompletos, vuelva a intentarlo.

- **CP-005:** Comprobar el registro de datos, con mail en blanco.
  - **Pasos:** Registro de usuario con nombre de usuario, completando nombre de usuario, contraseña y dejando en blanco el campo mail, luego enviar.
  - **Resultado Esperado:** Se debería mostrar un mensaje de error indicando que los datos están incompletos, vuelva a intentarlo.

- **CP-006:** Verificar la recepción del correo de confirmación.
  - **Pasos:** Habiendo completado el registro con envío de mail, revisar la casilla de correo electrónico.
  - **Resultado Esperado:** Se recibe un correo electrónico de confirmación con un enlace para activar la cuenta.

## Login

**Historia de Usuario:** Como usuario registrado, quiero poder iniciar sesión en la plataforma para acceder a mis cursos y/o funcionalidades.

**Criterios de Aceptación:**
- El formulario de login debe aceptar un correo electrónico registrado válido y la contraseña creada durante el registro, la cual debe poder modificarse.
- Debe haber una opción de “Olvidé mi contraseña” para recuperar la contraseña en caso de olvido.
- El usuario debe ser redirigido a la página principal tras un login exitoso.

**Casos de Prueba:**

- **CP-007:** Verificar el login con credenciales válidas.
  - **Pasos:** Introducir correo electrónico y contraseña válidos y hacer clic en "logIn".
  - **Resultado Esperado:** El usuario es redirigido a la página del curso adquirido.

- **CP-008:** Comprobar la recuperación de contraseña.
  - **Pasos:** Hacer clic en "Olvidé mi contraseña", introducir el correo electrónico y seguir las instrucciones.
  - **Resultado Esperado:** Se envía un correo electrónico de recuperación y el usuario puede restablecer la contraseña.

- **CP-009:** Verificar el login con un usuario inválido y clave válida.
  - **Pasos:** Introducir correo electrónico correcto y contraseña incorrecta y hacer clic en "login".
  - **Resultado Esperado:** Se muestra un mensaje de error indicando error de login, “datos incorrectos, por favor verifique su usuario y contraseña”, control 3era vez, luego ofrecer recuperación de contraseña mediante envío e-mail.

- **CP-010:** Verificar el login con un usuario válido y clave inválida.
  - **Pasos:** Introducir correo electrónico correcto y contraseña incorrecta y hacer clic en "login".
  - **Resultado Esperado:** Se muestra un mensaje de error indicando error de login, “datos incorrectos, por favor verifique su usuario y contraseña”, control 3era vez, luego ofrecer recuperación de contraseña mediante envío e-mail.

- **CP-011:** Verificar el login con un usuario y clave en blanco.
  - **Pasos:** No Introducir datos en los campos usuario y contraseña y hacer clic en "login".
  - **Resultado Esperado:** Se muestra un mensaje de error indicando error de login “datos incorrectos, por favor verifique su usuario y contraseña y vuelva a intentarlo, control 3era vez, luego ofrecer recuperación de contraseña o registro mediante envío e-mail.

## Búsqueda

**Historia de Usuario:** Como usuario, quiero buscar cursos específicos utilizando palabras clave para encontrar rápidamente los cursos que me interesan.

**Criterios de Aceptación:**
- La barra de búsqueda debe funcionar correctamente y devolver resultados relevantes.
- Los resultados de búsqueda deben incluir cursos relacionados con la palabra clave introducida.

**Casos de Prueba:**

- **CP-012:** Verificar la búsqueda con una palabra clave válida.
  - **Pasos:** Introducir una palabra clave referida a uno o más cursos dictados, en la barra de búsqueda y realizar la búsqueda.
  - **Resultado Esperado:** Los resultados muestran cursos relacionados con la palabra clave.

- **CP-013:** Comprobar la búsqueda con una palabra clave no relacionada con los cursos.
  - **Pasos:** Introducir una palabra clave irrelevante y realizar la búsqueda.
  - **Resultado Esperado:** Se muestra un mensaje indicando que no se encontraron resultados para la búsqueda ingresada.

- **CP-014:** Comprobar el comportamiento de la búsqueda con el campo búsqueda sin ingresar datos.
  - **Pasos:** En el campo búsqueda dejar el campo en blanco.
  - **Resultado Esperado:** Se muestra un mensaje indicando que no se ha ingresado ninguna palabra para la búsqueda.

## Menú con Categorías

**Historia de Usuario:** Como usuario, quiero contar con un menú tipo hamburguesa, que actúe como filtro, para explorar los cursos por categorías (Ej.: Programación, Diseño, Salud) para encontrar fácilmente cursos que me interesen.

**Criterios de Aceptación:**
- El menú debe mostrar las categorías correctamente.
- Cada categoría debe enlazar a una página que muestre los cursos correspondientes.

**Casos de Prueba:**

- **CP-015:** Verificar que todas las categorías están visibles en el menú.
  - **Pasos:** Navegar al menú de categorías.
  - **Resultado Esperado:** Las categorías Programación, Diseño y Salud están visibles.

- **CP-016:** Comprobar que cada categoría filtra los cursos y enlaza a la página correcta.
  - **Pasos:** Hacer clic en una categoría y revisar la página resultante.
  - **Resultado Esperado:** La página muestra cursos que pertenecen a la categoría seleccionada.

## Catálogo de Cursos

**Historia de Usuario:** Como usuario, quiero ver un catálogo con imágenes de cursos disponibles para explorar y seleccionar cursos de mi interés, mediante una experiencia visual impactante.

**Criterios de Aceptación:**
- Se debe contar con una galería principal de imágenes de cursos disponibles, con fotos acorde al curso.
- Cada imagen debe mostrar datos relevantes a simple vista como título, importe, un resumen de la temática sobre el curso, costo y permitir agregar al carro de compra.
- Cada imagen debe ser un link de acceso a mostrar información detallada sobre el curso para más información.

**Casos de Prueba:**

- **CP-017:** Verificar la visualización de imágenes referente a cursos relevantes en la página principal.
  - **Pasos:** Navegar a la sección de la galería de imágenes principal.
  - **Resultado Esperado:** Se muestra una galería mediante fotos de cursos con detalles básicos (Tema Fecha de Inicio, Finalización, Costo, Comprar).

- **CP-018:** Comprobar que cada curso de la galería sea un enlace a su página en donde se muestre el detalle del curso (Ej. qué voy a aprender en ese curso, quién lo dicta, cuándo dura, título obtenido).
  - **Pasos:** Hacer clic en un curso en el catálogo.
  - **Resultado Esperado:** La página de detalle del curso se muestra correctamente.

## Carro de Compras

**Historia de Usuario:** Como usuario final, quiero contar con un carro de compras para poder agregar, quitar o modificar el o los cursos en mi carro de compras y proceder a la compra de estos.

**Criterios de Aceptación:**
- Cuando un usuario se encuentre en la imagen o página de detalles de un curso, debe poder agregarlo al carro de compras mediante un botón de agregar al carro.
- Al hacer clic en agregar al carro, el curso debe ser añadido de manera instantánea y la cantidad visible en número.
- El carro debe actualizar en forma dinámica la cantidad de cursos añadidos mostrando el valor total de la compra.
- El carro debe permitir eliminar uno o todos los cursos agregados y actualizar la cantidad de cursos y el valor.
- El carro de compras debe ofrecer diferentes monedas para valorizar los cursos.
- El usuario debe acceder a ver en detalle el contenido del carro de compras en una página.
- El carro de compras debe mantener su estado, si el usuario está registrado y cierra su sesión.
- El carro de compras se limpiará luego de un tiempo, en caso de no ser un usuario registrado y este no finalice la compra.
- El usuario debe contar con diferentes formas de pago (TD/TC y Transferencias).
- El usuario debe proceder al pago de su compra.
- El proceso de compra debe permitir al usuario ingresar el detalle del pago de su compra llenando los datos que se le solicitarán en ese momento (Ej: datos del medio de pago, un mail válido, un nro. de teléfono) y confirmar la compra.
- Al finalizar el proceso de pago el usuario debe poder ver la confirmación de la compra y recibir un mail con el comprobante del detalle de su compra.
- Luego del proceso del pago el carro de compras debe estar vacío.

**Casos de Prueba:**

- **CP-019:** Verificar agregar curso al carro de compras, ver la cantidad y valor reflejado en el carro de compras.
  - **Pasos:** Seleccionar un curso y agregarlo al carro.
  - **Resultado Esperado:** Se muestra la cantidad y el valor del curso en el carro de compras.

- **CP-020:** Comprobar que se puede eliminar un curso del carro de compras.
  - **Pasos:** Ir a la página del carro de compras, junto al curso seleccionado presionar eliminar del carro de compras.
  - **Resultado Esperado:** Se elimina el curso del carro de compras y este modifica la cantidad y valor en forma dinámica.

- **CP-021:** Comprobar la visualización del contenido del carro.
  - **Pasos:** Ir al carro de compras.
  - **Resultado Esperado:** El carro muestra los cursos agregados, detalle y valores de c/u.

- **CP-022:** Validar el proceso de compra desde el carro.
  - **Pasos:** Proceder con la compra desde el carro.
  - **Resultado Esperado:** El proceso de compra se completa con éxito y se genera una confirmación de compra mediante mensaje “Compra Satisfactoria” y envío de mail.

## Acerca de (About Us)

**Historia de Usuario:** Como usuario, quiero acceder a la información general para obtener información sobre la plataforma, una breve historia para entender la misión, visión, objetivos y logros.

**Criterios de Aceptación:**
- La sección "Acerca de" debe proporcionar información relevante y actualizada sobre la plataforma.

**Casos de Prueba:**

- **CP-023:** Verificar el contenido de la sección "Acerca de".
  - **Pasos:** Navegar a la sección "Acerca de".
  - **Resultado Esperado:** La sección muestra información clara y relevante sobre la plataforma.

## Soporte Técnico

**Historia de Usuario:** Como usuario, quiero acceder a soporte técnico para resolver cualquier problema o duda que pueda tener con la plataforma.

**Criterios de Aceptación:**
- La sección de soporte técnico debe ofrecer opciones para contactar con un soporte y recibir ayuda.

**Casos de Prueba:**

- **CP-024:** Verificar el acceso a la sección de soporte técnico.
  - **Pasos:** Navegar a la sección de soporte técnico.
  - **Resultado Esperado:** La sección muestra opciones para contactar con soporte técnico.

- **CP-025:** Comprobar la funcionalidad de los canales de soporte.
  - **Pasos:** Utilizar uno de los canales de soporte (chat, correo electrónico, etc.).
  - **Resultado Esperado:** El usuario recibe una respuesta adecuada o confirmación de recepción de la solicitud.

## Contacto

**Historia de Usuario:** Como usuario, quiero enviar un mensaje a través de un formulario de contacto para hacer consultas o dar feedback sobre la plataforma.

**Criterios de Aceptación:**
- El formulario debe permitir enviar mensajes con campos obligatorios (nombre, correo electrónico, mensaje).
- El usuario debe recibir una confirmación de recepción del mensaje.

**Casos de Prueba:**

- **CP-027:** Verificar el envío de un mensaje a través del formulario de contacto.
  - **Pasos:** Completar el formulario de contacto con información válida y enviarlo.
  - **Resultado Esperado:** Se muestra un mensaje de confirmación indicando que el mensaje ha sido recibido.

- **CP-028:** Comprobar la validación de campos obligatorios en el formulario de contacto.
  - **Pasos:** Intentar enviar el formulario con campos obligatorios vacíos.
  - **Resultado Esperado:** Se muestran mensajes de error indicando que los campos obligatorios deben ser completados.

Estos casos de prueba y criterios de aceptación ayudarán a asegurar que cada funcionalidad de la plataforma E-Learning funcione correctamente y cumpla con las expectativas de los usuarios. Se pueden ajustar estos ejemplos según las características específicas y necesidades de la plataforma.
