# 🗺️ Guía de Arquitectura del Proyecto

Este documento detalla la estructura de directorios y la organización de archivos de nuestro videojuego de acción y aventura. El diseño sigue el principio de **separación de conceptos (SoC)** para garantizar que el proyecto sea modular, escalable y fácil de mantener a medida que el mundo del juego se expanda.

---

## 📁 Glosario de Carpetas

### 1. `assets/` (Recursos Estáticos)
Es el contenedor de todos los recursos visuales, auditivos y de diseño que el motor del juego importará y renderizará en pantalla.
*   **`audio/`**: 
    *   `music/`: Destinado a las bandas sonoras y temas ambientales de fondo (OST) de los diferentes niveles o menús.
    *   `sfx/`: Efectos de sonido de corta duración críticos para el *gameplay* (golpes de espada, explosiones, pasos, saltos, recolección de objetos).
*   **`images/`**: 
    *   `characters/`: Spritesheets (hojas de sprites) de animaciones del jugador, enemigos y NPCs.
    *   `environments/`: Texturas, *tilesets* (conjuntos de azulejos) para los fondos, plataformas y elementos del escenario.
    *   `ui/`: Elementos de la interfaz de usuario (barras de vida, iconos de inventario, botones de menú, pantallas de Game Over).
*   **`maps/`**: Almacena los archivos de datos (usualmente formatos `.json` o `.tmx`) que definen la cuadrícula y las capas de colisión de los niveles del juego.

### 2. `docs/` (Documentación)
Repositorio de conocimiento del proyecto. Centraliza la información estratégica del juego para que cualquier desarrollador o diseñador entienda las reglas del mundo.
*   Aquí se aloja el **GDD (Game Design Document)**, especificaciones técnicas de mecánicas de combate, diagramas de bases de datos o flujos de las misiones.

### 3. `src/` (Código Fuente)
El núcleo operativo del videojuego. Aquí reside toda la lógica de programación y la estructura visual de la aplicación web.
*   **`lester_garcia.html`**: El punto de entrada de la aplicación. Contiene el lienzo (`<canvas>`) donde se dibuja el juego y los contenedores de la UI.
*   **`css/`**: Estilos para dar formato al lienzo, centrar la pantalla de juego, diseñar los menús interactivos y asegurar que la interfaz sea responsivo.
*   **`js/`**: El cerebro del juego programado en JavaScript:
    *   `lester_garcia.js`: El archivo maestro. Inicializa el ciclo de vida del juego (Game Loop), gestiona los estados globales (pausa, juego, menú) y arranca la carga de *assets*.
    *   `entities/`: Clases orientadas a objetos que definen el comportamiento de los actores del juego (la física del jugador, la inteligencia artificial de los enemigos, las cajas de colisión).
    *   `components/`: Módulos reutilizables que añaden funcionalidades específicas (sistema de físicas, mapeo de controles de teclado/gamepad, gestor de inventario).

### 4. `tests/` (Entorno de Pruebas)
Carpeta dedicada al aseguramiento de la calidad (QA) mediante código.
*   Contiene archivos de pruebas unitarias y de integración para validar que los sistemas críticos (como el cálculo de daño de un ataque, la ganancia de experiencia o el sistema de colisiones) funcionen correctamente antes de subir cambios a producción.

---

## 🛠️ Estándares del Proyecto

*   **Case Sensitivity (Minúsculas):** Todos los nombres de archivos y carpetas deben estar estrictamente en minúsculas. Los sistemas operativos basados en Linux (donde suelen alojarse los servidores de producción) diferencian entre `Jugador.js` y `jugador.js`, lo que puede romper las rutas de importación si no se es consistente.
*   **Uso de `.gitkeep`:** Es un estándar de la comunidad para forzar a Git a registrar carpetas que actualmente están vacías pero que son obligatorias para la arquitectura. Se eliminan automáticamente en cuanto agregues el primer archivo real dentro de esa carpeta.