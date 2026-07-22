# Laboratorio de fórmulas químicas — Juan Lema

## Tematica

Quimica basica. Registro de compuestos con sus componentes (simbolo y gramos)
para calcular masa total y detectar formulas incompletas.

## Estructura de carpetas

```
juan-lema/
├── solucion.js          # logica: calcula masa, valida y filtra compuestos
└── juan-lema.md          # este archivo (explicacion y evidencia)
```

## Como se conecta cada archivo

- `solucion.js` define la lista de `compuestos` (datos), las funciones de
  calculo/validacion (proceso) y al final imprime el resultado en consola
  (salida).
- No hay separacion en varios archivos porque el ejercicio es puramente
  logico, sin interfaz visual: entrada, proceso y salida viven en el mismo
  script, mismo enfoque que en las resoluciones lógicas anteriores.

Flujo: `compuestos` (datos) → `procesarLaboratorio` (proceso) → `console.log`
(salida)

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: lista de compuestos, cada uno con un nombre y componentes
     (simbolo + gramos).
   - Proceso: sumar gramos por compuesto y validar que ningun componente
     tenga gramos <= 0 ni que la lista de componentes este vacia.
   - Salida: dos listas, una de compuestos validos con su masa total y otra
     de compuestos incompletos.
2. Separe responsabilidades en funciones pequenas (`calcularMasaTotal`,
   `esCompuestoValido`, `filtrarCompuestosIncompletos`, `procesarLaboratorio`)
   para que cada una resuelva una sola cosa y sea facil de leer y probar.
3. Decidi que "incompleto" significa dos cosas: no tener componentes, o tener
   algun componente con gramos en cero o negativo.

## Notas tecnicas

- `calcularMasaTotal` usa `reduce` para sumar los gramos de todos los
  componentes de un compuesto.
- `esCompuestoValido` corta temprano con `every`: si un solo componente tiene
  gramos <= 0, el compuesto completo se marca invalido.
- Un compuesto sin componentes (`componentes: []`) tambien se considera
  incompleto, no solo los que tienen gramos en cero.

## Validacion (dos casos)

Caso normal — compuestos con todos sus componentes en gramos positivos:

```
Agua: 18g
Sal:  58.5g
```

Caso limite — un compuesto con un componente en 0 gramos y otro compuesto sin
componentes (`componentes: []`): ambos caen en la lista de incompletos sin
provocar errores ni `NaN`, gracias a la validacion en `esCompuestoValido`.

```
Compuesto invalido
Compuesto vacio
```