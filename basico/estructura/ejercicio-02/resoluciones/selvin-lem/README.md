# Resolución: Estructura de Proyecto MOBA Ranking
**Desarrollador:** Selvin Lem  
**Rama de trabajo:** alumno/selvin-lem/ejercicio-02

---

## 1. Estructura de Archivos Creada
Para cumplir con el requerimiento de organizar el proyecto como en un entorno real, se creó la siguiente estructura jerárquica:

```text
selvin-lem/
│
├── index.html                  # Estructura base de la interfaz
├── css/
│   └── styles.css              # Archivo exclusivo para los estilos visuales
├── js/
│   └── app.js                  # Archivo exclusivo para la lógica de la app
└── data/
    └── players.json            # Archivo para el almacenamiento de datos del ranking
```
---

**Separación de Responsabilidades:** Un proyecto real no puede tener estilos mezclados en el HTML ni datos estáticos si busca ser escalable. Al aislar el diseño en `/css`, la lógica en `/js` y los datos en `/data`, el proyecto se vuelve modular. Si el día de mañana cambia el diseño, sólo se toca la carpeta de estilos; si cambian los jugadores, sólo se modifica el JSON.

**Mentalidad de Producción:** Al estructurar la carpeta `data/` de forma independiente, pensé en el futuro del proyecto. Separar los datos en un JSON prepara la arquitectura para que el paso siguiente sea sustituir ese archivo local por una base de datos o una API real de un servidor, sin romper la estructura del frontend.

---
**Entorno Limpio:** La nomenclatura de carpetas se mantuvo en minúsculas y en inglés por estándar de la industria.