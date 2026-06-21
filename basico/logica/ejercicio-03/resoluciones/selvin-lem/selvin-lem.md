# Resolución: Gestor de Personajes RPG

**Desarrollador:** Selvin Lem

---

## Breve explicación del proceso
Para resolver este gestor, dividí el problema en tres capas lógicas:

1. **Cálculo:** Implementé una función matemática para determinar el poder basado en las estadísticas base.

2. **Análisis:** Utilicé una estructura de condiciones para clasificar a los personajes entre "Aptos" o "Débiles" según el umbral de 60 puntos.

3. **Optimización:** Creé una función de sugerencia que compara ataque vs defensa para indicar qué estadística priorizar en el entrenamiento.

---
## Solución técnica
El código procesa un arreglo de objetos transformándolo en un nuevo reporte.

1. **Entrada:** Arreglo de objetos con estadísticas de personajes.

2. **Proceso:** map() para iterar, lógica condicional para filtrado y comparación.

3. **Salida:** Tabla con estado del personaje y ruta de mejora sugerida.