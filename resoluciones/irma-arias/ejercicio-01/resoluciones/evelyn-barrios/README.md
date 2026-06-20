# Solución: Ejercicio 01 estructura (juegos Acción y Aventura)

**Desarrollador:** Evelyn Barrios

---

##  Explicación del Razonamiento

para resolver pense en Un proyecto real para un videojuego e investigue, para esto se requiere separar completamente la lógica de programación de los recursos visuales y auditivos (assets) para evitar confusiones y permitir que los diseñadores y programadores trabajen en paralelo.

Diseñé una estructura modular y limpia utilizando nombres en minúsculas para mantener la consistencia en el sistema de archivos. En las carpetas que actualmente no contienen archivos de código, integré archivos `.gitkeep` para asegurar que Git registre la estructura vacía en el repositorio remoto sin alterar el orden.

---

## 📂 Descripción de la Estructura de Carpetas

A continuación se detalla el propósito de cada directorio creado para el proyecto:

### 1. `src/` (Source / Código Fuente)
Es la carpeta principal del código. Aquí se alojará toda la lógica del videojuego, como los scripts de movimiento del jugador, mecánicas de combate, sistemas de puntuación y controladores principales de la aventura.

### 2. `assets/` (Recursos del Juego)
Contenedor general para todos los elementos multimedia y componentes estáticos que el motor del juego necesita cargar. Para mantener el orden, se dividió en tres subcarpetas clave:
*   **`assets/audio/`**: Destinada a almacenar los efectos de sonido para un videojuego ejemplo golpes de combate o algo por el estilo



*   **`assets/images/`**: Reservada para las texturas, sprites de personajes, interfaces de usuario (UI), menús y elementos visuales del entorno.



*   **`assets/maps/`**: Espacio exclusivo para los archivos de diseño de niveles, coordenadas de plataformas y mapas de bits donde se desarrolla la aventura.




### 3. `docs/` (Documentación)
Dedica un espacio exclusivo al almacenamiento de documentos del proyecto, las guías de estilo, los manuales técnicos todo lo que sirva como documentación

### 4. `tests/` (Pruebas)
Carpeta reservada para los scripts de pruebas unitarias y de integración. Su objetivo es aislar las validaciones del código (por ejemplo, verificar que el daño de un ataque funcione correctamente) para garantizar la estabilidad del juego antes de subirlo a producción.

---
