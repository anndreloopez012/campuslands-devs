# Ejercicio 04: Arquitectura de Catálogo de Autos de Lujo

## Descripcion

Sergio Ajú  

**Ubicación:** `basico/estructura/ejercicio-04/resoluciones/sergio-aju/`

## Descripción
Este proyecto consiste en el diseño y estructuración de una base de datos para un catálogo de autos de alta gama. El objetivo es establecer un sistema ordenado y escalable mediante la separación lógica de componentes, facilitando el mantenimiento, la carga de activos multimedia y la futura integración de nuevas funcionalidades sin comprometer la integridad del código base.

## Propuesta de Estructura
He diseñado este catálogo bajo principios de **arquitectura modular**, separando los recursos de la lógica para asegurar que el proyecto sea escalable y mantenible.

```text
sergio-aju/
├── data/
│   └── autos.json         # Base de datos en formato JSON
├── assets/
│   └── cars/              # Repositorio central de imágenes
├── docs/
│   └── convenciones.md    # Estándares de nombrado y reglas del proyecto
├── src/
│   └── catalogo.js        # Lógica de procesamiento y visualización
└── sergio-aju.md          # Este documento