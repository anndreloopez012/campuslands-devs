# Solución: Ranking de Escuadras Battle Royale

**Desarrollador:** Evelyn Barrios  
**Módulo:** Lógica 

---

## Explicación del Razonamiento

Para resolver este problema, dividí la solución en tres fases lógicas y manejables, garantizando la legibilidad, el orden y la mantenibilidad del software:

1. **Aislamiento del Cálculo de Puntos:** Creé una función específica encargada exclusivamente de transformar las estadísticas individuales en puntajes numéricos. Utilicé estructuras condicionales simples para asignar los puntos del sistema de posicionamiento (Top 1, 2, 3 u otros), asegurando que la lógica sea fácil de depurar. Las bajas se multiplican por 3, ya que representan el rendimiento ofensivo de la escuadra.
2. **Transformación de Datos:** Utilicé el método .map() para generar una nueva colección de datos que acople el nombre de la escuadra directamente con su puntaje total ya procesado. Esto evita mutar o alterar destructivamente los objetos de entrada originales.
3. **Algoritmo de Ordenamiento:** Apliqué el método .sort() configurado de forma descendente (b - a) para posicionar automáticamente a las escuadras con mayor rendimiento en la cima de la tabla, terminando con un ciclo iterable .forEach() para imprimir el ranking de forma limpia.

---

## Flujo Lógico del Programa (Explicación de Funciones)

### 1. Función calcularPuntosEscuadra(escuadra)
Esta función actúa como una calculadora individual. Recibe un único objeto (representado por el parámetro genérico "escuadra") y extrae sus valores internos mediante el uso del punto.
* **Fórmula de bajas:** Toma el valor numérico de la propiedad bajas y lo multiplica por 3.
* **Evaluación de posición:** Mediante una estructura if/else, evalúa el número de lugar en el que quedó el equipo. Si es 1 asigna 20 puntos, si es 2 asigna 14 puntos, si es 3 asigna 10 puntos, y para cualquier otro lugar asigna 4 puntos.
* **Retorno:** Devuelve la sumatoria final de ambos valores.

### 2. Función generarRankingEsports(escuadras)
Esta función es el controlador principal que organiza todo el torneo. Recibe el arreglo completo de equipos.
* **Validación de seguridad:** Verifica si la longitud del arreglo es igual a 0. Si no hay datos, detiene la ejecución inmediatamente para evitar errores en el sistema.
* **Mapeo (.map):** Transforma la lista original en una nueva lista optimizada que solo contiene el nombre y el puntaje calculado de cada escuadra. El parámetro interno representa cada elemento del arreglo original conforme es recorrido.
* **Ordenamiento (.sort):** Utiliza los parámetros comparativos alternos (a, b) para restar sus puntuaciones totales. Al restar el segundo elemento menos el primero (b - a), Git ordena el arreglo de mayor a menor de forma automática.
* **Impresión (.forEach):** Recorre el arreglo final ordenado. Utiliza el parámetro de contenido y el parámetro de índice (la posición física en el casillero, empezando desde 0). Suma un 1 al índice para mostrar un ranking con numeración humana natural (1, 2, 3...) y concatena los textos usando el operador de suma (+).

---

### Caso 1: Validación Normal (Datos del Torneo)
Al ejecutar el programa con la lista de escuadras de prueba, el sistema procesa los datos y arroja el siguiente orden en la consola, validando que Delta toma el liderato gracias a sus 12 bajas acumuladas:

```text
=== RANKING FINAL DEL TORNEO BATTLE ROYALE ===
1. Delta - 50 pts.
2. Nova - 44 pts.
3. Alpha - 22 pts.
4. Omega - 10 pts.