# Ejercicio 11 — Bitácora de viajes extremos — Juan Lema

## Tematica

Agencia de turismo extremo. Script que registra reservas de viajeros,
valida requisitos por actividad (edad minima para paracaidismo), aplica
impuesto y genera un resumen de las reservas aprobadas.

## Estructura de carpetas

```
juan-lema/
├── reservas.js     # datos de entrada + logica + salida por consola
└── juan-lema.md     # este archivo (explicacion y evidencia)
```

Al ser un ejercicio de logica pura (sin interfaz), toda la solucion vive en
un unico archivo `reservas.js`: datos, funciones de proceso y la ejecucion
que imprime el resultado en consola.

## Como se conecta cada archivo

- `reservas.js` define el arreglo `reservas` (entrada), lo procesa con
  funciones separadas por responsabilidad y termina invocando
  `mostrarResumen()` para imprimir la salida.
- No hay HTML/CSS porque el ejercicio pide un resultado por consola, no una
  interfaz visual.

Flujo: `reservas` (datos) → `validarReserva` / `calcularCostoTotal`
(proceso) → `generarResumen` → `mostrarResumen` (salida).

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: reservas con nombre, destino, actividad, edad y costoBase.
   - Proceso: validar edad minima segun actividad, calcular costo con
     impuesto, filtrar reservas invalidas.
   - Salida: resumen de reservas aprobadas impreso en consola.
2. Separe cada paso en una funcion pequena y con nombre claro
   (`validarReserva`, `calcularCostoTotal`, `filtrarValidas`,
   `generarResumen`, `mostrarResumen`) para que cada una haga una sola cosa.
3. Deje la regla de negocio (edad minima 18 para paracaidismo) como una
   constante al inicio del archivo para que sea facil de encontrar y
   modificar.

## Notas tecnicas

- El impuesto es del 12% y se aplica solo sobre `costoBase`, redondeando a
  2 decimales con `Math.round(valor * 100) / 100`.
- La validacion de edad solo aplica a la actividad `"paracaidismo"`; el
  resto de actividades (bungee, parapente, etc.) no tienen restriccion en
  este ejercicio.
- `filtrarValidas` usa `Array.prototype.filter`, por lo que nunca muta el
  arreglo original `reservas`.

## Validacion (dos casos)

Caso normal — reservas mixtas, una de ellas rechazada por edad
(Karla Xitumul, 16 anios, paracaidismo):

```
Caso normal:
1. Andrea Poc - Interlaken, Suiza - paracaidismo - Q504
2. Diego Us - Queenstown, Nueva Zelanda - bungee - Q336
3. Pablo Son - Chamonix, Francia - parapente - Q425.6
4. Lucia Batz - Interlaken, Suiza - paracaidismo - Q504
```

Caso limite — lista de reservas vacia: no se produce ningun error y se
muestra un mensaje en lugar de una lista vacia.

```
Caso limite (lista vacia):
No hay reservas validas para mostrar.
```

También se valido el limite exacto de la regla: Lucia Batz tiene 18 anios
justos y su reserva de paracaidismo si se aprueba, confirmando que la
condicion es `edad < 18` y no `edad <= 18`.

## Evidencia de Git

```
$ git checkout -b logica/ejercicio-11-juan-lema dev
Switched to a new branch 'logica/ejercicio-11-juan-lema'

$ git add resoluciones/juan-lema/
$ git commit -m "feat(ejercicio-11): validar reservas de viajes extremos - Juan Lema"

$ git log --oneline
8d7a9c9 feat(ejercicio-11): validar reservas de viajes extremos - Juan Lema
9c52b4a chore: base del ejercicio 11
```