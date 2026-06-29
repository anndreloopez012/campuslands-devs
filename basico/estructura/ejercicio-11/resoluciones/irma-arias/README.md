
# Proyecto de Arquitectura 3D

**Autora:** Irma Arias

## Descripción
Este repositorio contiene la estructura base para un proyecto de arquitectura 3D. El diseño está enfocado en la trazabilidad de los archivos, permitiendo diferenciar claramente entre las etapas de trabajo (modelado y materiales) y las entregas finales (renders y planos).

## Razonamiento del Pipeline
La organización se fundamenta en tres pilares:
1. **Separación de activos:** Los recursos crudos (`materiales`, `modelos`) están aislados de los entregables (`renders`, `planos`), evitando la pérdida de archivos originales.
2. **Estandarización:** A través de `docs/convenciones.md`, se establece una nomenclatura clara para vistas (ej. `fachada-principal.jpg`), evitando nombres genéricos que confunden al equipo.
3. **Gestión de versiones:** Se implementó una distinción entre archivos de trabajo (borradores) y archivos finales para asegurar que el cliente o el equipo de construcción reciba siempre la versión correcta.

## Estructura de carpetas
- `planos/`: Documentación técnica (dwg, pdf).
- `modelos/`: Geometría 3D base.
- `materiales/`: Librería de texturas y acabados.
- `renders/`: Salidas visuales (vistas finales).
- `documentos/`: Fichas técnicas y plantillas (`plantilla-entrega.md`).
- `docs/`: Documentación del pipeline y convenciones.

## Validación
- [x] Estructura creada según formato `resoluciones/irma-arias/`.
- [x] Convenciones definidas en `docs/convenciones.md`.
- [x] Separación lógica entre borradores y entregas finales.