# Resolver Conflicto de Estructura 3D

## Nombre

Cleidy Pérez

## Objetivo

Simular un conflicto de Git entre dos ramas que modifican el mismo archivo y resolverlo conservando los cambios de ambas.

## Proceso

1. Crear una rama **modelado**.
2. Agregar la sección **Modelado**.
3. Crear una rama **renders**.
4. Agregar la sección **Renders**.
5. Realizar un merge para generar el conflicto.
6. Resolver el conflicto conservando ambas secciones.
7. Crear el commit de resolución.

## Resultado

El archivo **estructura.md** contiene la información de ambas ramas sin perder cambios.

## Validación

### Caso normal

El merge terminó correctamente.

### Caso límite

No quedaron marcas de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`) en el archivo.