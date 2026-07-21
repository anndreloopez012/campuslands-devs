# Gestor de personajes RPG — Juan Lema

## Tematica

Videojuegos RPG. Programa que calcula el poder de cada personaje de una party,
detecta cuales estan debiles antes de entrar a una mazmorra y sugiere que
estadistica entrenar.

## Estructura de carpetas

​```
juan-lema/
├── rpg.js          # logica: calculo de poder, filtro de debiles, sugerencias y reporte
└── juan-lema.md    # este archivo (explicacion y evidencia)
​```

## Como esta organizado el archivo

- `rpg.js` contiene todo en un solo script porque el ejercicio es de logica pura,
  sin interfaz.
- Las funciones estan separadas por responsabilidad: `calcularPoder`, `esDebil`,
  `obtenerDebiles`, `sugerirMejora` y `generarReporte`.
- Al final del archivo hay datos de ejemplo (`party`) y las llamadas que generan
  la salida por consola, para poder ejecutar el archivo directamente con
  `node rpg.js` y ver el resultado.

Flujo: datos de la party (array de objetos) → funciones de calculo → `generarReporte`
→ salida en consola.

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: personajes con nombre, clase, nivel, ataque y defensa.
   - Proceso: calcular poder, filtrar debiles, decidir que entrenar.
   - Salida: reporte de texto de la party completa.
2. Separe cada regla del enunciado en una funcion pequena y con nombre claro,
   para que cada una se pueda probar por separado.
3. La sugerencia de mejora compara ataque contra defensa y entrena la mas baja;
   decidi que en caso de empate se sugiera ataque, para tener una regla fija y
   evitar resultados ambiguos.

## Notas tecnicas

- El poder se calcula como `nivel * 2 + ataque + defensa`.
- El umbral de "personaje debil" es poder menor a 60 (`UMBRAL_PODER_DEBIL`).
- La sugerencia usa `<=` en vez de `<` para que el empate tenga una salida
  predecible en lugar de indefinida.
- Si la party llega vacia, `generarReporte` devuelve el mensaje
  "No hay personajes en la party." en vez de fallar o mostrar una lista vacia.

## Validacion (dos casos)

Caso normal — party con 4 personajes, poder mixto:

​```
Aranok (Mago) — Poder: 69
Brenna (Guerrera) — Poder: 51 — DEBIL — sugerencia: entrenar defensa
Corvin (Pícaro) — Poder: 30 — DEBIL — sugerencia: entrenar defensa
Doria (Clériga) — Poder: 58 — DEBIL — sugerencia: entrenar ataque
Personajes debiles: [ 'Brenna', 'Corvin', 'Doria' ]
​```

Caso limite — party vacia (`[]`): `generarReporte([])` devuelve
"No hay personajes en la party." sin lanzar error. Tambien se probo un
personaje con ataque igual a defensa (ej. ataque 10, defensa 10) y la
sugerencia devuelve "entrenar ataque" de forma consistente, sin ambiguedad.