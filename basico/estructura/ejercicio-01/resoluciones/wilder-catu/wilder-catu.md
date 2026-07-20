# Estructura Inicial del Proyecto

## Descripción

Se creó la estructura base del proyecto para organizar el código fuente, la documentación y los recursos que serán utilizados durante el desarrollo.

## Estructura de directorios

```text
proyecto/
│
├── src/
├── docs/
├── assets/
│   ├── images/
│   ├── audio/
│   └── maps/
```

## Descripción de las carpetas

| Carpeta | Descripción |
|----------|-------------|
| `src/` | Contendrá el código fuente de la aplicación. |
| `docs/` | Almacenará la documentación técnica y funcional del proyecto. |
| `assets/` | Reunirá todos los recursos estáticos utilizados por la aplicación. |
| `assets/images/` | Imágenes e íconos del proyecto. |
| `assets/audio/` | Archivos de audio utilizados por la aplicación. |
| `assets/maps/` | Recursos relacionados con mapas o archivos cartográficos. |

## Archivo `.gitkeep`

Cada carpeta contiene un archivo `.gitkeep`.

Este archivo se utiliza para que Git pueda realizar el seguimiento de directorios vacíos, ya que Git no almacena carpetas que no contienen archivos. Los archivos `.gitkeep` podrán eliminarse una vez que las carpetas contengan contenido real.

## Estado

- creó la estructura base del proyecto.
-  Se agregaron las carpetas principales.
-  Se agregaron las subcarpetas de recursos dentro de `assets`.
-  Se incluyó un archivo `.gitkeep` en cada directorio para mantener la estructura en el repositorio.