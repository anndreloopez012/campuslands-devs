# Control de lineas MOBA — Juan Lema

## Tematica

Videojuegos MOBA. Se analiza el desempeno de un equipo (top, jungla, mid,
adc y soporte) usando KDA, oro acumulado y control de objetivos.

## Estructura de carpetas

basico/logica/ejercicio-04/resoluciones/juan-lema/
├── control-lineas.js   # logica: calculo de KDA, oro, orden y alertas
└── juan-lema.md         # este archivo (explicacion y evidencia)

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: jugadores con rol, kills, deaths, assists, oro y objetivos.
   - Proceso: calcular KDA, validar oro, ordenar de mayor a menor KDA y
     generar alertas para roles con pocos objetivos.
   - Salida: ranking impreso en consola mas un listado de alertas.
2. Separe el problema en funciones pequenas con un solo proposito:
   `calcularKDA`, `tieneOroSuficiente`, `ordenarPorKDA`, `generarAlertas`
   y `formatearJugador`, coordinadas por `analizarEquipo`.
3. Deje el arreglo original sin ordenar usando el spread operator
   (`[...jugadores]`) dentro de `ordenarPorKDA`, para no mutar los datos
   de entrada.

## Notas tecnicas

- KDA = `(kills + assists) / max(deaths, 1)`. Se usa `Math.max(deaths, 1)`
  para evitar division entre cero cuando un jugador no muere.
- El resultado del KDA se redondea a 2 decimales.
- Se considera oro suficiente cuando supera 12000.
- Un rol genera alerta cuando controla menos de 3 objetivos.
- Si el arreglo de jugadores llega vacio, `analizarEquipo` corta la
  ejecucion y muestra "No hay jugadores para analizar." en vez de fallar.

## Validacion (dos casos)

Caso normal — 5 jugadores, ordenados por KDA: