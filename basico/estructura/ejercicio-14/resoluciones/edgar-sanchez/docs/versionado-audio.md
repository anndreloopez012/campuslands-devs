# Convención de versionado de audio

## Formato obligatorio

```
[nombre-cancion]-v[numero].wav
```

### Reglas

- El nombre usa guiones para separar palabras.
- La versión se escribe con dos dígitos: `v01`, `v02`, ..., `v10`, `v11`.
- La extensión siempre en minúsculas: `.wav`.

### Ejemplos válidos

| Archivo               | Significado                              |
|-----------------------|------------------------------------------|
| `tormenta-v01.wav`    | Primera versión del track "Tormenta"     |
| `tormenta-v02.wav`    | Segunda versión (ajuste de mezcla)       |
| `amanecer-v01.wav`    | Primera versión del track "Amanecer"     |
| `amanecer-v03.wav`    | Tercera iteración tras revisión          |

### ¿Por qué `v01` y no `v1`?

El cero inicial garantiza que la ordenación alfabética coincida con la cronológica.
`v09` aparece antes de `v10` en cualquier explorador de archivos; sin el cero,
`v9` aparecería después de `v10`.

### Ciclo de vida de un archivo

```
tracks/tormenta-v01.wav   ← borrador inicial
tracks/tormenta-v02.wav   ← ajuste de instrumentos
mixes/tormenta-v03.wav    ← mezcla con FX y balance
masters/tormenta-v04.wav  ← master final aprobado
```

El número de versión se mantiene continuo entre carpetas; esto permite rastrear
el historial completo sin importar en qué etapa está el archivo.
