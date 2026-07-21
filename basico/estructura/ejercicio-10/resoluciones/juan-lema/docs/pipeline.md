# Pipeline de animación 3D — "El Faro Olvidado"

## Orden

```
01-modelado → 02-texturas → 03-renders → 04-entregas
```

Un archivo avanza de etapa solo cuando la anterior está aprobada.

## Convención de nombres

```
[estado]_[elemento]_v[NN].md
```

- **estado**: `prueba` (borrador, puede fallar) o `final` (aprobado).
- **elemento**: qué representa (`personaje-farero`, `toma-01`, etc.).
- **version**: número incremental, nunca se sobrescribe.

Ejemplo:
```
prueba_toma-01_v01.md   → primer intento, con errores
prueba_toma-01_v02.md   → correccion, aun en revision
final_toma-01_v03.md    → version aprobada
```

## Regla para no confundir pruebas con finales

1. Las pruebas nunca se borran; quedan como historial.
2. Solo puede existir un `final_` activo por elemento.
3. Solo un `final_` puede copiarse a `04-entregas/`.
4. `referencias/` no forma parte del pipeline versionado (moodboard,
   paleta de colores).
