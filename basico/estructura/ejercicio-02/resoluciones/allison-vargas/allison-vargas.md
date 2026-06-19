# ✨ Proyecto Frontend - Ranking eSports MOBA 🏆
**Desarrolladora:** Allison Rocío Vargas Mejía  
**Nivel:** Básico Retador ⚡ | **Entorno:** Campuslands Devs  

---

## 🌸 1. Análisis y Razonamiento del Problema

Para resolver este reto, mi enfoque principal fue el **orden, la armonía y la separación de responsabilidades**. En el desarrollo profesional, mantener un proyecto limpio y escalable es vital, así que dividí el diseño en capas independientes y súper organizadas:

*   **Estructura Semántica 📑:** Creé un archivo `index.html` que funciona únicamente como el esqueleto del ranking. Está totalmente limpio y libre de atributos de estilo o etiquetas internas para asegurar un código puro.
*   **Estética Visual 🎨:** Centralicé todo el diseño en `css/styles.css`, dándole una atmósfera *dark mode* inspirada en los mejores videojuegos de estrategia competitiva, cuidando la tipografía y los contrastes.
*   **Lógica de Control ⚙️:** Diseñé `js/app.js` para gestionar el arranque del sistema y preparar el comportamiento de la interfaz de forma dinámica y eficiente.
*   **Gestión de Datos 💾:** Aislé la información de los pro-players en `data/players.json`, simulando perfectamente cómo recibiríamos la información desde una API o base de datos real en el futuro.

---

## 🎀 2. Arquitectura del Proyecto (Árbol de Carpetas)

Organicé el espacio de trabajo de manera impecable dentro de la ruta asignada en el repositorio. Cada archivo tiene un lugar específico para evitar el desorden:

```text
basico/estructura/ejercicio-02/resoluciones/allison-vargas/
├── css/
│   └── styles.css       
├── data/
│   └── players.json
├── js/
│   └── app.js
├── index.html
└── allison-vargas.md           