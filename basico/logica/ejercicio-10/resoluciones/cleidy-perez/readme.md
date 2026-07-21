# Ejercicio 10: Maratón de Películas de Miedo

## 1. Solución Completa

La solución al problema se estructuró mediante una función encargada de procesar un listado de películas disponibles y generar una propuesta óptima para la maratón.

### Lógica de la Solución Paso a Paso:
1. **Modelado de los datos:** Cada película se representa con sus atributos principales: título, duración en minutos, cantidad de sustos y calificación (rating).
2. **Validación de la entrada:** Se verifica que la lista de películas exista y contenga elementos válidos. En caso de recibir datos vacíos o no válidos, se retorna una respuesta controlada indicando que no hay películas por procesar.
3. **Filtro por calificación:** Se evalúa cada película de la lista inicial y se descartan todas aquellas cuyo rating sea menor a 7.0.
4. **Selección y acumulación por tiempo:** Con la lista de películas aptas, se inicia un recorrido ordenado evaluando si la suma del tiempo acumulado más la duración de la película en evaluación supera el límite de 360 minutos (6 horas). 
   * Si la película cabe dentro del límite de tiempo, se suma a la lista definitiva, agregando su tiempo al acumulador de duración y sus sustos al contador de sustos totales.
   * Si la película sobrepasa el límite de 360 minutos, se ignora y se continúa evaluando las siguientes.
5. **Generación del resultado:** Se entrega un reporte final con la lista de películas elegidas, la duración total acumulada y la cantidad de sustos lograda.

---

## 2. Explicación del Razonamiento

Para resolver este ejercicio se dividió el problema en dos fases principales: **calidad** y **capacidad**.

* **Criterio de Calidad (Filtro):** Lo primero era garantizar que la noche de películas fuera buena. Por ello, el primer paso lógico fue descartar todo lo que no cumpliera con la calificación mínima ( rating ≥ 7 ). Esto redujo el grupo de opciones únicamente a las películas relevantes.
* **Criterio de Capacidad (Acumulación):** Una vez obtenido el grupo de calidad, el siguiente reto era el tiempo disponible. En lugar de intentar combinaciones complejas, se optó por un enfoque secuencial: tomar las películas aptas e ir sumando sus duraciones una a una. Antes de aceptar cualquier película, se hace una comprobación previa sumando su duración al total actual; si la suma no supera los 360 minutos, se confirma su inclusión.
* **Manejo de Errores y Casos Especiales:** Se consideró fundamental proteger el programa contra datos vacíos o no válidos para garantizar que la solución sea robusta frente a diferentes escenarios.

---

## 3. Evidencia de Validación

Para confirmar que la lógica funciona correctamente, se realizaron pruebas analizando las entradas, el proceso y los resultados esperados:

### Caso 1: Flujo Normal con Catálogo de Prueba
* **Entrada:** Un listado de 8 películas con duraciones entre 80 y 135 minutos, y calificaciones entre 5.1 y 7.5.
* **Análisis del proceso:**
  1. **Filtro de calidad:** Tres películas con calificaciones de 5.1, 6.8 y 6.8 fueron descartadas automáticamente por no alcanzar el rating de 7.0.
  2. **Evaluación de tiempo (Límite: 360 min):**
     * Primera película (112 min) -> Cabe. Acumulado: **112 min**.
     * Segunda película (127 min) -> Cabe. Acumulado: **239 min**.
     * Tercera película (90 min) -> Cabe. Acumulado: **329 min**.
     * Cuarta película (111 min) -> **No cabe** (329 + 111 = 440 min, excede los 360 min). Se descarta.
     * Quinta película (135 min) -> **No cabe** (329 + 135 = 464 min, excede los 360 min). Se descarta.
* **Resultado Esperado / Validado:**
  * **Películas seleccionadas:** 3 películas en total.
  * **Duración total:** 329 minutos de 360 disponibles (aprovechamiento óptimo sin excederse).
  * **Sustos totales:** Suma correcta de los sustos de las tres películas seleccionadas (37 sustos).

### Caso 2: Prueba con Datos Vacíos o Sin Filtro Exitoso
* **Entrada:** Una lista vacía de películas o una lista donde ninguna cumple con el rating de 7.0.
* **Resultado Esperado / Validado:**
  * La solución no genera fallos ni interrupciones.
  * Devuelve una lista seleccionada vacía, duraciones y sustos en cero, y un mensaje explicativo al usuario.