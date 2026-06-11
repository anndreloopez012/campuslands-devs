# 🏆 Resolución del Ejercicio 03: Estructura Backend Battle Royale

<br>

### 👤 Información del Estudiante
* **Estudiante:** Allison Vargas ✨
* **Dificultad:** Básica Retadora 🎯
* **Temática:** Gestión de Torneos Battle Royale 🎮

---

## 🧠 Explicación del Razonamiento (Pensar el Problema)

Para abordar este reto de arquitectura de software, apliqué el principio de **Separación de Responsabilidades** mediante el patrón de diseño por capas (MVC/Service layer). En el desarrollo de un videojuego masivo como un Battle Royale, centralizar el código en un único archivo genera problemas críticos de escalabilidad y mantenimiento. Al segmentar la lógica, logramos que cada componente tenga una única razón para cambiar.

> 💡 **Nota de Arquitectura:** Diseñé la solución identificando el flujo de los datos a través de cuatro capas totalmente independientes y especializadas:

* 🗃️ **1. Modelos (Models):** Actúan como la fuente de verdad del esquema de datos. Definen las propiedades esenciales de las entidades (como una sala de partida o un equipo) antes de interactuar con cualquier persistencia de datos.
* ⚙️ **2. Servicios (Services):** Representan el "cerebro" o la lógica de negocio del ecosistema Battle Royale. Aquí se validan las reglas del juego: límites numéricos de escuadras, estados de la sala, control de excepciones de negocio y la consistencia operativa.
* 🕹️ **3. Controladores (Controllers):** Actúan como intermediarios entre el protocolo de comunicación y el negocio. Su único propósito es recibir las solicitudes HTTP (peticiones de red), realizar una validación estructural de la entrada y despachar la acción al servicio correspondiente para retornar una respuesta estandarizada.
* 📍 **4. Rutas (Routes):** El punto de entrada de la aplicación. Se encarga de mapear las URLs y métodos HTTP correspondientes hacia las funciones específicas del controlador, manteniendo el desacoplamiento de las URIs.

---

## 📂 Árbol de Estructura de Carpetas Validado

La estructura final implementada respeta escrupulosamente las directrices del proyecto y la preservación de los archivos `.gitkeep` requeridos en el repositorio base:

```text
basico/estructura/ejercicio-03/resoluciones/allison-vargas/
├── 📄 .gitkeep (Archivo base preservado)
├── 📝 README.md (Este documento de entrega)
└── 📁 src/
    ├── 📁 controllers/
    │   ├── 📄 .gitkeep
    │   └── ⚡ matchController.js
    ├── 📁 models/
    │   ├── 📄 .gitkeep
    │   └── ⚡ matchModel.js
    ├── 📁 routes/
    │   ├── 📄 .gitkeep
    │   └── ⚡ matchRoutes.js
    └── 📁 services/
        ├── 📄 .gitkeep
        └── ⚡ matchService.js