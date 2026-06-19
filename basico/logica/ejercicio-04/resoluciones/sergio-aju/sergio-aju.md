# Ejercicio 4: Control de Líneas MOBA

## Autor

Sergio Ajú

## Descripción
En este ejercicio se desarrolló una solución lógica para evaluar el desempeño individual de jugadores dentro de una partida de MOBA. El sistema permite analizar métricas críticas para identificar jugadores destacados y áreas de mejora mediante un flujo de datos estructurado. El proceso incluyó:

* **Estructuración de datos:** Definición de un `roster` de jugadores (objetos) con atributos detallados de combate, economía y objetivos estratégicos.
* **Cálculo de eficiencia:** Implementación de una fórmula de KDA robusta, utilizando `Math.max` para garantizar la estabilidad operativa ante casos de cero muertes (evitando divisiones por cero).
* **Arquitectura modular:** Separación de la lógica de procesamiento (transformación y ordenamiento) de la lógica de presentación (reporte visual), siguiendo buenas prácticas de desarrollo para facilitar el mantenimiento.
* **Sistema de alertas:** Notificación en consola para roles con baja participación en objetivos, permitiendo una rápida toma de decisiones técnica.

### Estructura del Proyecto
```text
sergio-aju
├── js
├ └── main.js      # Lógica de procesamiento y reporte
└── sergio-aju.md  # Este documento de explicación