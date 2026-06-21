# Convenciones de Organizacion Arquitectonica

Este manual establece los lineamientos obligatorios para el guardado y nombrado de recursos en el proyecto.

## 1. Nomenclatura de Vistas y Renders
Todas las perspectivas generadas deben utilizar terminos descriptivos en minusculas, separados por guiones medios. Queda prohibido usar nombres genericos.

Nombres estandarizados aprobados:
- fachada-principal
- fachada-posterior
- seccion-longitudinal
- planta-conjunto
- perspectiva-interior-cocina

## 2. Segregacion de Estatus (Borradores vs Finales)
Para evitar el uso de archivos obsoletos por el equipo de ingenieria, se debe sufijar el estado del archivo directamente en su nombre:
- Archivos en desarrollo o pruebas de iluminacion: Uso exclusivo del sufijo '-borrador' (ejemplo: fachada-principal-borrador.png).
- Archivos validados y listos para revision del cliente: Uso exclusivo del sufijo '-final' (ejemplo: planta-baja-final.dwg).