# Registro de soldadura industrial — Juan Lema

## Tematica

Soldadura industrial. Estructura de carpetas para organizar practicas,
materiales, seguridad y evidencias de un taller de soldadura, sin mezclar
tipos de informacion entre archivos.

## Estructura de carpetas

```
juan-lema/
├── practicas/
│   └── registro.md          # bitacora de practicas (fecha, proceso, resultado)
├── materiales/
│   └── catalogo.md          # inventario de electrodos, alambres y gases
├── seguridad/
│   └── checklist.md         # lista de verificacion antes/durante/despues de soldar
├── evidencias/
│   └── lineamientos.md      # que evidencia se acepta y como se organiza
└── juan-lema.md              # este archivo (explicacion y evidencia)
```

## Como se conecta cada archivo

- `seguridad/checklist.md` es el requisito de entrada: ninguna practica en
  `practicas/registro.md` puede iniciar sin completarlo.
- `materiales/catalogo.md` define que codigos de material existen y su
  disponibilidad; `practicas/registro.md` referencia esos codigos en vez de
  repetir la descripcion del material en cada fila.
- `evidencias/lineamientos.md` explica que respaldo (foto, informe, video)
  corresponde a cada fila de `practicas/registro.md`, evitando mezclar
  reportes de texto con imagenes en la misma carpeta.

Flujo: `seguridad/checklist.md` (validacion previa) → `materiales/catalogo.md`
(disponibilidad) → `practicas/registro.md` (ejecucion y resultado) →
`evidencias/lineamientos.md` (respaldo del resultado).

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: disponibilidad de materiales y cumplimiento del checklist de
     seguridad.
   - Proceso: ejecutar la practica de soldadura y registrar el resultado.
   - Salida: bitacora de practicas con su evidencia asociada.
2. Separe la informacion en cuatro carpetas para que cada una tenga una sola
   responsabilidad: seguridad, materiales, practicas y evidencias, en vez de
   un unico archivo mezclando todo.
3. Use codigos de material como llave comun entre `catalogo.md` y
   `registro.md` para no duplicar datos ni descuadrar la informacion.

## Notas tecnicas

- El checklist de seguridad se trata como validacion de "todo o nada": si
  falta un punto, la practica no se registra como iniciada.
- El estado de un material en el catalogo (`Disponible`, `Bajo stock`,
  `Agotado`) determina si una practica puede cerrarse con resultado
  `Aprobado`/`Reprobado` o debe quedar como `Pendiente`.
- No se guardan imagenes junto con informes de texto en `evidencias/`, para
  mantener separados los formatos binarios de los formatos de texto.

## Validacion (dos casos)

Caso normal — material disponible y checklist completo:

```
2026-07-14 | SMAC | E6013 | Placa A36 #1 | Aprobado
```

Caso limite — material agotado (Argon puro) al momento de la practica:

```
2026-07-16 | TIG | ER308L | Placa A36 #3 | Pendiente
```

En este caso el registro no fuerza un resultado `Aprobado` o `Reprobado`;
queda como `Pendiente` y sin evidencia asociada en `evidencias/`, tal como lo
define `evidencias/lineamientos.md`.
