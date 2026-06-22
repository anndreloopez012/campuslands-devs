# Manual de Pipeline de Animacion 3D

Este documento establece las reglas obligatorias de nomenclatura y manejo de archivos para evitar perdidas de tiempo y colisiones en el servidor de produccion.

## 1. Regla de Oro: Control de Versiones Numéricas
Queda estrictamente prohibido usar terminos ambiguos como "final", "ahora_si_final", "ultimo_render" o "este_es" en los nombres de los archivos. 

El formato estandarizado obligatorio para cualquier archivo de trabajo es:
[nombre_del_asset]_v[numero_de_version_con_tres_digitos]

Ejemplos correctos:
- personaje_v001.obj
- personaje_v002.obj

## 2. Prevención de Confusión (Trabajo vs Entrega)
- Los archivos en desarrollo activo se guardaran exclusivamente en las carpetas 01, 02 y 03 con su respectivo numero de version correlativo.
- Un archivo solo podra ser trasladado a la carpeta '04-entregas' si ha sido aprobado formalmente por el lider del departamento. Al pasar a esta carpeta, se le antepondra la palabra '_final_' seguida del numero de entrega oficial (ejemplo: personaje_final_v001.fbx).