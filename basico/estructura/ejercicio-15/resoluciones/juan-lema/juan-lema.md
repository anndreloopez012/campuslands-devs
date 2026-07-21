# Proyecto simulador de carreras urbanas — Juan Lema

## Tematica

Carreras y vehiculos hiperdeportivos. Estructura base para un simulador que
organiza pilotos, vehiculos, pistas y resultados de carrera.

## Estructura de carpetas

```
juan-lema/
├── data/
│   ├── pilotos/
│   │   └── pilotos.json      # datos de cada piloto
│   ├── vehiculos/
│   │   └── vehiculos.json    # datos de cada vehiculo hiperdeportivo
│   └── pistas/
│       └── pistas.json       # configuracion de cada pista (largo, vueltas)
├── src/
│   └── simulador/
│       └── simulador.js      # logica que cruza pilotos + vehiculos + pista
├── resultados/
│   └── resultados.json       # salida generada por el simulador (no es config)
├── docs/
│   └── reglas-carrera.md     # reglas de la carrera en texto
└── juan-lema.md               # este archivo (explicacion y evidencia)
```

## Como se conecta cada archivo

- `data/pilotos/pilotos.json`, `data/vehiculos/vehiculos.json` y
  `data/pistas/pistas.json` son la **entrada**: informacion fija que no cambia
  mientras corre una carrera (configuracion).
- `src/simulador/simulador.js` lee esos tres archivos, calcula el desempeno de
  cada piloto segun su vehiculo y la pista elegida, y escribe la **salida** en
  `resultados/resultados.json`.
- `resultados/` esta separado a proposito de `data/`: `data/` es configuracion
  que se reutiliza en cada carrera, `resultados/` es lo que se genera y puede
  borrarse o regenerarse sin perder la configuracion original.
- `docs/reglas-carrera.md` documenta las reglas que sigue `simulador.js`.

## Como pense el problema

1. Separe el problema en tres tipos de dato de entrada (pilotos, vehiculos,
   pistas) porque cada uno tiene su propio ciclo de vida y puede crecer o
   editarse por separado.
2. Distingui **configuracion** (lo que ya existe antes de correr la carrera)
   de **resultados** (lo que se produce al correrla), para que nunca se
   mezclen datos fijos con datos generados.
3. Puse la logica en `src/simulador/` en vez de dentro de `data/`, siguiendo
   la misma idea de separacion de responsabilidades: datos por un lado,
   proceso por otro.
4. Documente las reglas en `docs/` en lenguaje natural antes de escribir
   codigo, para no improvisar la logica sobre la marcha.

## Ejemplo de vehiculo (data/vehiculos/vehiculos.json)

```json
{
  "id": "v01",
  "nombre": "Fenix GT",
  "velocidadMax": 340,
  "aceleracion": 2.8,
  "manejo": 8.5
}
```

## Notas tecnicas

- Cada pista en `pistas.json` define `largoKm` y `vueltas`; el simulador
  usa esos dos valores para calcular el tiempo total estimado de carrera.
- `resultados.json` se regenera cada vez que corre `simulador.js`, por eso
  no se debe editar a mano ni tratarlo como fuente de verdad.
- Si un vehiculo no tiene piloto asignado en `pilotos.json`, el simulador lo
  excluye del calculo en vez de fallar.

## Validacion (dos casos)

Caso normal — tres pilotos con vehiculo y pista asignados. Al correr
`node simulador.js` sobre `data/pistas/pistas.json[0]` (Circuito Costa Norte),
se genero este resultado real en `resultados/resultados.json`:

```
1. Marcus Steel (Sombra V12)   — 1050.5 s
2. Kaito Ryo (Fenix GT)        — 1079.6 s
3. Lucia Ferreira (Tormenta X) — 1098.6 s
```

Caso limite — un piloto sin vehiculo asignado (`vehiculoId: null`, Diego
Salazar): el simulador no lo incluyo en `resultados.json` y mostro el aviso
en consola "Piloto sin vehiculo, se omite del calculo: Diego Salazar" en
lugar de detenerse con error.
