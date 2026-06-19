# Pipeline del proyecto — Convenciones generales

## Flujo de trabajo

referencias/ → 01-modelado/ → 02-texturas/ → 03-renders/ → 04-entregas/

Ningún archivo avanza a la siguiente etapa sin revisión del líder técnico.

## Convención de nombres

| Elemento        | Formato                              | Ejemplo                          |
|-----------------|--------------------------------------|----------------------------------|
| Modelo          | `nombre-objeto_vNN.blend`            | `protagonista_v02.blend`         |
| Textura         | `nombre-objeto-tipo_vNN.png`         | `protagonista-diffuse_v01.png`   |
| Render prueba   | `escena-NN_prueba_vNN.png`           | `escena-01_prueba_v03.png`       |
| Render aprobado | `escena-NN_APROBADO_vNN.png`         | `escena-01_APROBADO_v02.png`     |
| Entrega final   | `corte-nombre_APROBADO_vNN.mp4`      | `corte-final_APROBADO_v01.mp4`   |

## Versiones

- Siempre incrementar el sufijo `_vNN` al modificar un archivo.
- Nunca sobreescribir la versión anterior.
- El sufijo `_FINAL` solo indica el candidato más reciente a aprobación dentro de modelado.
- La palabra `_APROBADO` está reservada exclusivamente para archivos en carpetas `_final/`.

## Cómo evitar confundir archivos finales con pruebas

1. **Separación física**: pruebas en `_wip/`, aprobados en `_final/`. Son carpetas distintas, no prefijos.
2. **Nombre explícito**: los archivos aprobados llevan `_APROBADO` en el nombre. Si no lo tiene, no está aprobado.
3. **Un solo responsable** mueve archivos de `_wip/` a `_final/` (el líder de cada etapa).
4. **Nunca editar en `_final/`**: si hay correcciones, se trabaja en `_wip/` con nueva versión y se aprueba de nuevo.
5. **Commits descriptivos**: el mensaje de Git debe indicar explícitamente si es una prueba o una aprobación.
   - Prueba: `render: agrego escena-01 prueba v03`
   - Aprobación: `render: apruebo escena-01 v02 → muevo a _final`
