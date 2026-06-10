# Resolución: Ejercicio 03 - Torneo beatle royale 

**Nombre:** Sergio Aju  
**Fecha:** 10 de junio de 2026

## Definicion del proyecto

Este proyecto es una estructuracion sobre un torneo beatle royale donde lo que se busca es que se pueda estructurar el proyecto archivo por archivo.

## estructura de trabajo 

Se creo carpetas para poder dividir los trabajos, dentro de la carpeta sergio-aju esta la carpeta src que contiene las otras carpetas, controllers, models, routes, services. 
1. models (Los Datos)

Aquí defines cómo se ven tus datos. Es el lugar donde describes la estructura de la información, por ejemplo, qué campos tiene un "Usuario" (nombre, correo, contraseña).

    Para qué sirve: Define la estructura que tendrá la información en la base de datos. Es la fuente de la verdad sobre qué datos existen.

2. controllers (El Coordinador)

El controlador es como un "recepcionista". Su trabajo es recibir la petición del usuario (ej: "quiero ver mi perfil"), llamar al servicio necesario y decidir qué respuesta enviarle de vuelta (ej: un código 200 OK con los datos).

    Para qué sirve: Conecta las rutas con la lógica de negocio. No hace el trabajo pesado, solo coordina quién debe hacerlo.

3. services (La Lógica o "El Cerebro")

Aquí vive toda la lógica del negocio. Si necesitas calcular impuestos, validar un registro o procesar un pago, lo haces aquí. Es la capa más importante porque es donde ocurren las acciones reales.

    Para qué sirve: Realiza las operaciones complejas y habla con los modelos para guardar o pedir datos. Los controladores llaman a los servicios.

4. routes (El Mapa)

Es el listado de todos los caminos posibles de tu aplicación. Aquí defines qué URL corresponde a qué acción. Por ejemplo, defines que si alguien entra a GET /usuarios, se debe ejecutar el usuarioController.listar.

Para qué sirve: Indica qué código debe ejecutarse según la dirección URL y el método (GET, POST, PUT, DELETE) que llegue.


