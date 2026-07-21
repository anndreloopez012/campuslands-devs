# Diagnóstico rápido de mecánica — Juan Lema

## Tematica

Mecanica de motos. Un mecanico recibe los sintomas que reportan los pilotos
despues de una carrera y el sistema sugiere posibles causas y recomendaciones.

## Estructura de carpetas

```
juan-lema/
├── diagnostico.js   # logica: catalogo de sintomas, diagnostico y reporte
└── juan-lema.md     # este archivo (explicacion y evidencia)
```

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: uno o varios sintomas reportados (arreglo de strings).
   - Proceso: buscar cada sintoma en un catalogo de causas/recomendaciones.
   - Salida: un reporte de texto con la causa probable y la recomendacion
     para cada sintoma.
2. Separe la logica en funciones pequenas:
   - `evaluarSintoma`: revisa un sintoma contra el catalogo.
   - `diagnosticar`: aplica `evaluarSintoma` a todo el arreglo.
   - `generarReporte`: arma el texto final legible para el mecanico.
3. Guarde los sintomas conocidos ('no enciende', 'vibra', 'pierde aceite',
   'frena poco') en un objeto `CATALOGO_SINTOMAS` para no repetir
   condicionales largos y poder agregar sintomas nuevos facilmente.

## Notas tecnicas

- Si el sintoma no esta en el catalogo, `evaluarSintoma` no lanza error:
  devuelve `reconocido: false` con una recomendacion generica de consultar
  a un especialista.
- `diagnosticar` valida que el parametro sea un arreglo con al menos un
  elemento; si no, devuelve un arreglo vacio en vez de fallar.
- `generarReporte` es la unica funcion que arma texto para mostrar; las
  demas solo devuelven datos, para mantener la logica separada de la
  presentacion.

## Validación (dos casos + uno extra)

Caso normal — dos sintomas reconocidos:

```
diagnosticar(['vibra', 'frena poco'])
=== Reporte de diagnostico ===
1. Sintoma: vibra
   Posible causa: desbalance en las llantas o piezas sueltas
   Recomendacion: revisar balanceo de llantas y ajuste de tornilleria
2. Sintoma: frena poco
   Posible causa: pastillas desgastadas o aire en el sistema de frenos
   Recomendacion: revisar pastillas de freno y purgar el sistema
```

Caso limite — arreglo vacio:

```
diagnosticar([])
=> "No se reportaron sintomas. No es posible generar un diagnostico."
```

Caso extra — sintoma no registrado en el catalogo:

```
diagnosticar(['motor recalienta'])
1. Sintoma: motor recalienta (no reconocido)
   Posible causa: sintoma no registrado en el catalogo
   Recomendacion: consultar con un mecanico especializado
```