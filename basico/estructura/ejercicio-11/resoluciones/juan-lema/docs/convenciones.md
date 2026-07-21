# Convenciones de nombres — Proyecto de arquitectura 3D

Este documento define como se nombran los archivos del proyecto para que
cualquier miembro del equipo pueda ubicar y entender un archivo sin
necesidad de abrirlo.

## Regla general

```
<tipo-de-vista>[-version].md
```

- Todo en minusculas.
- Palabras separadas por guion medio (`-`), sin espacios ni guion bajo.
- Sin tildes ni caracteres especiales.

## Nombres de vista (ejemplos usados en este proyecto)

- `fachada-principal` — vista frontal del edificio.
- `fachada-lateral` — vista lateral del edificio.
- `planta-primer-nivel` — distribucion del primer nivel.
- `volumen-base` — masa volumetrica general, sin detalle.

## Version de archivo

- `-v1`, `-v2`, etc. se usan unicamente dentro de `borradores/`, para
  llevar el historial de intentos.
- Dentro de `finales/` no se usa sufijo de version: el archivo mas
  reciente en esa carpeta es siempre la version aprobada.

## Separacion borrador / final

- `borradores/`: exploracion, pruebas, cosas que aun pueden cambiar.
- `finales/`: unicamente lo revisado y aprobado para entrega.

Un archivo pasa de `borradores/` a `finales/` solo cuando cumple el
objetivo de esa vista y ya no tiene pendientes.
