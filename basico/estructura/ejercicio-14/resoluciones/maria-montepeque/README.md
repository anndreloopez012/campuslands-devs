# Proyecto: Archivo Musical para Productores

**Productor:** Maria Montepeque  
**Estado:** En producción  
**Última actualización:** 2026-06-15

---

## Descripción

Este repositorio organiza todos los archivos de audio de un proyecto musical profesional.
Cada carpeta tiene una responsabilidad única; ningún archivo debe vivir fuera de su carpeta
correspondiente.

---

## Estructura de carpetas

```
maria-montepeque/
├── tracks/          ← Borradores de canciones (archivos de trabajo)
├── samples/         ← Samples y loops reutilizables
├── mixes/           ← Mezclas intermedias (con efectos y balance)
├── masters/         ← Versiones finales aprobadas (solo lectura)
└── docs/            ← Documentación del proyecto
    └── versionado-audio.md
```

---

## ¿Qué va en cada carpeta?

### `tracks/`
Archivos WAV generados directamente desde la DAW. Son borradores de trabajo:
pueden cambiar en cualquier momento y no deben compartirse con clientes.

Ejemplos:
- `tormenta-v01.wav`
- `tormenta-v02.wav`
- `amanecer-v01.wav`

### `samples/`
Fragmentos de audio reutilizables: loops de batería, one-shots, texturas ambientales.
No son canciones completas; son piezas que se insertan en los tracks.

Ejemplos:
- `loop-bajo-120bpm.wav`
- `hit-caja-seca.wav`
- `textura-lluvia.wav`

### `mixes/`
Versiones de una canción que ya pasaron por la etapa de mezcla: se ajustaron
volúmenes, se aplicaron efectos y se balancearon frecuencias.
Aún pueden tener revisiones pendientes.

Ejemplos:
- `tormenta-v03.wav`
- `amanecer-v02.wav`

### `masters/`
Versiones finales aprobadas. Estos archivos ya pasaron por masterización y están
listos para distribución o entrega al cliente.
**No se deben modificar ni sobrescribir.**

Ejemplos:
- `tormenta-v04.wav`
- `amanecer-v03.wav`

### `docs/`
Documentación técnica y de proceso: convenciones de nomenclatura, notas de sesión,
contratos, guías de flujo de trabajo.

---

## Convención de nombres

Consulta `docs/versionado-audio.md` para el detalle completo.

Resumen:
```
[nombre-cancion]-v[XX].wav
```

---

## Reglas del proyecto

1. Nunca guardar un master en `tracks/` ni un borrador en `masters/`.
2. El número de versión no se reinicia al cambiar de carpeta.
3. No borrar versiones anteriores; sirven como respaldo histórico.
4. Los commits deben describir qué cambió: `feat: agrega mezcla v03 de Tormenta`.
