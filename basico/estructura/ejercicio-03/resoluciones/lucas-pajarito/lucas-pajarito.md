# Ejercicio 03 Estructura.

# Estructura de Carpetas

Este documento describe la función de las carpetas principales del proyecto. Mantener esta estructura organizada facilita el desarrollo, la lectura del código y el trabajo en equipo.

---

## 📁 controllers

La carpeta **controllers** contiene los archivos encargados de responder a las solicitudes que llegan desde la aplicación o la API.

Su función principal es recibir la información enviada por el usuario, verificar que sea válida, solicitar los datos necesarios y devolver una respuesta. Los controladores no almacenan información directamente; únicamente coordinan el flujo de cada operación.

### Responsabilidades

- Recibir solicitudes.
- Validar la información recibida.
- Llamar a los servicios necesarios.
- Enviar respuestas al cliente.
- Gestionar errores de las operaciones.

---

## 📁 models

La carpeta **models** contiene la definición de los datos que utiliza la aplicación.

Aquí se establece cómo se organiza la información que será almacenada o consultada en la base de datos. Cada modelo representa un tipo de información, como usuarios, cursos, productos o cualquier otra entidad del sistema.

### Responsabilidades

- Definir la estructura de los datos.
- Representar cada entidad del sistema.
- Facilitar la creación, consulta, actualización y eliminación de registros.
- Mantener organizada la información de la base de datos.

---

## 📁 routes

La carpeta **routes** contiene las rutas disponibles de la aplicación.

Cada ruta representa una dirección a la que el cliente puede realizar una solicitud. Su función es indicar qué controlador debe ejecutarse según la acción solicitada.

### Responsabilidades

- Definir las rutas del sistema.
- Asociar cada ruta con un controlador.
- Organizar los diferentes módulos de la aplicación.
- Mantener una navegación clara dentro de la API.

---

## 📁 services

La carpeta **services** contiene la lógica principal de funcionamiento del sistema.

Aquí se realizan los procesos necesarios para cumplir una solicitud, como cálculos, consultas a la base de datos, envío de correos, consumo de otros servicios o cualquier tarea que no corresponda directamente a un controlador.

Separar esta lógica permite reutilizar el código y mantener los controladores más simples y fáciles de entender.

### Responsabilidades

- Procesar la información del sistema.
- Ejecutar las reglas de funcionamiento.
- Consultar o modificar datos cuando sea necesario.
- Reutilizar funciones en diferentes partes del proyecto.
- Mantener separada la lógica del negocio.

---

# Buenas prácticas

- Cada carpeta debe contener únicamente archivos relacionados con su función.
- Utilizar nombres claros y descriptivos para los archivos.
- Evitar duplicar código cuando pueda reutilizarse mediante servicios.
- Mantener una estructura uniforme durante todo el desarrollo.
- Documentar los cambios importantes para facilitar el trabajo en equipo.