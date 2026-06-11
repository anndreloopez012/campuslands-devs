# Ejercicio 01 de Estructura

## _Descripcion_
 
Un equipo técnico necesita preparar una base ordenada para un proyecto relacionado con videojuegos de acción y aventura. El reto consiste en demostrar que sabes organizar archivos como lo haría un proyecto real.

## _Explicacion_:
Para la elaboracion de este ejercicio se creo la estructura de el ejercicio a elaborar, para la cual tememos la siguiente estructura.

    lucas-pajarito/
    ├── assets/
    │   ├── audio/
    │   ├── img/
    │   └── maps/
    ├── docs/
    ├── src/
    │   ├── css/
    │   ├── html/
    │   └── js/
    │
    ├── tests/
    └── lucas-pajarito.md

## 📁 Estructura del Proyecto

A continuación se detalla la finalidad de cada uno de los directorios y archivos que componen este espacio de trabajo:

### 📂 `assets/`
Este directorio actúa como el almacenamiento central de todos los recursos estáticos, multimedia e inmutables del proyecto. No contienen código ejecutable, sino archivos que serán consumidos por la aplicación.

*   **`audio/`**: Destinado exclusivamente a almacenar archivos de sonido (formatos como `.mp3`, `.wav` o `.ogg`). Ideal si el proyecto incluye alertas sonoras, efectos de interfaz o música de fondo.
*   **`img/`**: Repositorio de recursos visuales y gráficos estáticos (formatos `.svg`, `.png`, `.jpg`, `.webp`).
    > **💡 Nota Senior:** Se recomienda priorizar el formato `.svg` para iconos/logos por su escalabilidad, y `.webp` para imágenes complejas para optimizar el rendimiento de carga en el navegador.
*   **`maps/`**: Diseñado para almacenar datos geográficos, archivos de configuración espacial (como `.geojson` o `.json` con coordenadas) o matrices de mapas si se está desarrollando un entorno interactivo o un videojuego basado en cuadrículas.

---

### 📂 `docs/`
Espacio reservado exclusivamente para la documentación técnica del proyecto ajena al código fuente. Aquí se deben almacenar manuales de usuario, requerimientos del sistema, diagramas de flujo, propuestas de solución, minutas de diseño de software o especificaciones que sirvan de guía para el desarrollo.

---

### 📂 `src/` (Source)
Es el corazón del proyecto. Contiene el código fuente de la aplicación que se encuentra en fase de desarrollo activo. Ningún recurso de configuración externa debe mezclarse aquí.

*   **`css/`**: Centraliza las hojas de estilo de la aplicación (archivos `.css`). Alberga las reglas de diseño, maquetación, variables globales y estilos visuales de los componentes.
*   **`html/`**: Contiene las vistas, plantillas y páginas de la aplicación (archivos `.html`). Es la estructura semántica de la interfaz de usuario que interactuará con el usuario final.
*   **`js/`**: Aloja la lógica de programación en JavaScript Vanilla.
    *   **`app.js`**: Es el archivo de entrada principal (*entry point*) de la lógica de scripts. Se encarga de inicializar la aplicación, orquestar los eventos del DOM y coordinar el flujo de datos.

---

### 📂 `tests/`
Carpeta crítica para el control de calidad del software. Contiene scripts orientados a pruebas automatizadas (pruebas unitarias, de integración o de extremo a extremo utilizando herramientas especializadas). Su objetivo es garantizar que la lógica de JavaScript (como funciones de cálculo o algoritmos en `src/js/`) funcione de forma óptima ante cualquier cambio o refactorización.

# ©️ Autor

    Lucas samuel Pajarito Surek.