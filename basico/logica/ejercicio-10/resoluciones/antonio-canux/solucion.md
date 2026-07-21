# Resolución - Ejercicio 10: Maratón de películas de miedo

**Camper:** Antonio Canux

## 1. Comandos Git Utilizados

Para mantener el orden del repositorio, creé mi entorno de trabajo ejecutando:

```bash
git checkout dev
git pull origin dev
git checkout -b alumno/antonio-canux/ejercicio-10cd basico/logica/ejercicio-10/resoluciones/antonio-canux/
touch solucion.md maraton_peliculas.js
```

## 2. Solución en Código (JavaScript)
El documento `maraton_peliculas.js` contiene la solución del problema cumpliendo con los requisitos de legibilidad y lógica paso a paso.

## 3. Explicación del Proceso
El problema requería validar dos restricciones distintas: calidad (rating) y capacidad (tiempo).

Filtrado inicial: Utilicé el método `.filter()` de los arrays de JavaScript para crear primero un arreglo limpio (peliculasAptas) que solo contuviera películas con calificación igual o mayor a 7. Esto optimiza el proceso porque descarta elementos inválidos antes de hacer cálculos matemáticos.

Acumulación condicional: Para llenar la maratón, utilicé un bucle `for` tradicional junto con una estructura `if`. La condición verifica si el tiempoAcumulado más la duración de la película en evaluación supera los 360 minutos. Si no los supera, la película ingresa a la lista final (listaMaraton) y sus valores se suman a los totales acumulados.

## 4. Evidencia de Validación
Al ejecutar el archivo en la terminal con node maraton.js, la salida de la consola valida que la lógica funciona, excluyendo a "La Monja" por mal rating y a "El Conjuro" porque su tiempo excedía el bloque de 6 horas:

```text
=== PLAN DE MARATÓN DE TERROR ===
Películas seleccionadas: El Exorcista, Scream, Halloween
Duración total: 324 minutos
Total de sustos esperados: 19
```