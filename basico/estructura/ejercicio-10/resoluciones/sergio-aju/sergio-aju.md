# Pipeline de Animación 3D

**Autor:** 

Sergio Ajù

## Razonamiento del problema
El pipeline se diseñó para separar las etapas creativas de las etapas de producción. 
Para evitar confusiones entre pruebas y archivos finales, se implementa una convención de nombres estricta:
* `escena_nombre_v001.ext` (Versión de trabajo)
* `escena_nombre_FINAL.ext` (Entregable oficial)

## Estructura del proyecto
- `/referencias`: Material base de diseño.
- `/01-modelado`: Geometría base y alta resolución.
- `/02-texturas`: Mapas de materiales.
- `/03-renders`: Renders intermedios para revisión (previsualización).
- `/04-entregas`: Exportaciones listas para cliente.

## Gestión de versiones
Se utiliza la convención `v###` al final de cada archivo. Nunca se debe sobrescribir un archivo; siempre se debe guardar como una nueva versión superior (ej: de `v001` a `v002`).

3. Contenido de docs/pipeline.md
Markdown

# Reglas de Pipeline de Animación

## Convención de Nombres
Todos los archivos deben seguir el formato:
`PROYECTO_ETAPA_DESCRIPCION_v###`

Ejemplo: `DRAGON_MODELADO_cuerpo_v001.blend`

## Cómo evitar confusiones (Final vs Pruebas)
1. **Carpeta /04-entregas:** Es la única carpeta donde se permiten archivos con el sufijo `_FINAL`.
2. **Carpeta /03-renders:** Contiene únicamente las pruebas de iluminación (renders de test). Si el render es para entrega, se mueve a `/04-entregas` y se renombra.
3. **Versiones:** Si un archivo es una prueba rápida, se marca como `v000_TEST` para identificarlo rápidamente como desechable.

4. Consejos para la validación y entrega

sergio-aju/
├── sergio-aju.md
├── /referencias          
├── /01-modelado          
├── /02-texturas          
├── /03-renders           
├── /04-entregas         
└── /docs
    └── cambios.md       