# Registro de soldadura industrial — Solución

## Autor
Shadm

## Planteamiento del problema

El ejercicio no pide lógica de programación, sino organización de un proyecto real: estructurar carpetas para un registro de soldadura industrial, siguiendo convenciones de un flujo de trabajo con Git (rama propia desde `dev`, carpeta personal `nombre-apellido/`, sin tocar archivos base). Hay que crear cuatro carpetas raíz (`practicas`, `materiales`, `seguridad`, `evidencias`), dentro de `seguridad` un `checklist.md`, dentro de `materiales` un `catalogo.md`, y dejar explícito qué tipo de evidencias se aceptan (separando siempre reportes de imágenes). El entregable final es un árbol documentado más una explicación del razonamiento.

## Estructura de carpetas

```
selvin-lem/
├── practicas/
│   └── .gitkeep
├── materiales/
│   └── catalogo.md
├── seguridad/
│   └── checklist.md
├── evidencias/
│   ├── reportes/
│   │   └── .gitkeep
│   └── imagenes/
│       └── .gitkeep
└── solucion.md
```

## Explicación del razonamiento

- Se separan practicas, materiales, seguridad y evidencias porque cada una tiene un propósito distinto y no deben mezclarse.
- evidencias se subdivide en reportes/ e imagenes/ para cumplir la regla explícita de no mezclar reportes con imágenes.
- Los .gitkeep mantienen las carpetas vacías versionadas en Git (Git no versiona carpetas vacías).
- El nombre de carpeta shadm-dev sigue el formato obligatorio nombre-apellido/.
- El flujo de Git parte de dev, nunca de main, y usa una rama con el patrón alumno/nombre-apellido/ejercicio-XX.
