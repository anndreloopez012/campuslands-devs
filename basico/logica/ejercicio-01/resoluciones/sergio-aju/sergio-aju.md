# Ejercicio 01: Ranking de Escuadras Battle Royale

## 👤 Información del Alumno
* **Nombre:** Sergio Ajú
* **Especialidad:** Backend Developer
* **Ruta de Entrega:** `basico/logica/ejercicio-01/resoluciones/sergio-aju/`

---

## 🎮 Contexto del Problema
El objetivo de este ejercicio es desarrollar un programa que automatice el sistema de puntuación y clasificación (ranking) para un torneo del género **Battle Royale**. El software debe procesar un conjunto de datos correspondientes al rendimiento de diferentes escuadras (basado en sus bajas y su posición de supervivencia) y ordenarlas de forma descendente para determinar las posiciones oficiales del podio.

### 📊 Sistema de Puntuación (Reglas de Negocio)
Los puntos de cada escuadra se calculan bajo los siguientes criterios matemáticos fijados por el torneo:
* **Puntos por Bajas:** Cada baja acumulada equivale a **3 puntos**.
* **Puntos por Supervivencia (Posición):**
    * **Top 1 (Ganador):** 20 puntos.
    * **Top 2:** 14 puntos.
    * **Top 3:** 10 puntos.
    * **Cualquier otra posición:** 4 puntos.

---

## 🧠 Análisis y Razonamiento Lógico

Para estructurar la solución de software (desarrollada de forma modular dividiendo la interfaz HTML de la lógica en JavaScript), apliqué el siguiente enfoque por etapas:

1.  **Modelado de Datos (Entrada):** Se representó a cada equipo como un objeto JavaScript con propiedades bien definidas (`nombre`, `bajas`, `posicion`, `revividos`), agrupados dentro de un arreglo estructural principal.
2.  **Encapsulamiento de Reglas (Proceso):** Diseñé la función puramente matemática `calcularPuntajeTotal(escuadra)`. Al aislar los condicionales (`if / else if`) encargados de evaluar la posición en el Top, el código se vuelve legible, escalable y fácil de auditar.
3.  **Algoritmo de Clasificación:** Utilicé el método nativo de ordenamiento predictivo `.sort()` aplicando una función de comparación por diferencia de propiedades (`bajas` y `supervivencia`), asegurando un ordenamiento de mayor a menor puntaje de forma exacta.
4.  **Inyección Dinámica (Salida):** Se mapearon los objetos resultantes para limpiar el nodo del DOM y renderizar los datos procesados en tiempo