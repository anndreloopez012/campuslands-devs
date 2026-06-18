# Backend para Torneo Battle Royale

**Estudiante:** Irma Arias

## Objetivo del Proyecto
Diseñar una estructura de backend escalable y ordenada para gestionar la lógica de un videojuego tipo Battle Royale, asegurando la separación de responsabilidades.

## Estructura de Carpetas (Arquitectura)



[Image of MVC architectural pattern]


La arquitectura se organiza de la siguiente manera:

* **`src/controllers/`**: Se encarga de recibir las peticiones HTTP (como iniciar partida o registrar equipo) y devolver las respuestas al cliente.
* **`src/services/`**: Contiene la "lógica pesada" del negocio. Aquí se calculan las reglas del Battle Royale, como el cierre del círculo o la eliminación de jugadores.
* **`src/models/`**: Define cómo se guardan los datos (ejemplo: esquema de `Jugador` o `Partida`).
* **`src/routes/`**: Define las rutas (endpoints) de la API, conectando las URLs con los controladores correspondientes.

## Explicación del Razonamiento
He elegido esta estructura porque permite que el equipo técnico trabaje de forma independiente: si necesitamos cambiar las reglas del juego, solo tocamos los `services`; si necesitamos cambiar la base de datos, solo tocamos los `models`. Esto es esencial en proyectos reales para evitar el caos conforme el juego crece.

## Validación
La estructura ha sido validada creando un archivo de ejemplo (`partida.controller.js`, `partida.service.js`, etc.) en cada carpeta, asegurando que cada componente tenga su lugar designado.