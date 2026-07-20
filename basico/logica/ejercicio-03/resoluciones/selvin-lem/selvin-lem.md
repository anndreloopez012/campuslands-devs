# Resolución de Ejercicio: Gestor de Personajes RPG

**Desarrollador:** Selvin Lem  
**Rama de trabajo:** `alumno/selvin-lem/ejercicio-03`  

---

## 1. Breve explicación del proceso

Para resolver este desafío de lógica enfocado en analítica de videojuegos RPG, estructuré la solución en tres capas de procesamiento lógico:

1. **Fase de Consolidación e Ingesta:** Diseñé un arreglo de objetos que simula la party de héroes. Incluí casos diversos: un héroe estándar con el puntaje exacto del ejemplo (Mago nivel 12), personajes altamente competitivos, y personajes en condiciones críticas o con valores en cero para comprobar la robustez del código.
2. **Fase de Diagnóstico Matemático:** Implementé una función pura encargada de ejecutar la fórmula de cálculo de poder de combate. Se incorporaron condicionales de protección para interceptar datos vacíos, nulos o negativos antes de que alteren las estadísticas de la party.
3. **Fase de Filtrado y Asignación Estratégica:** Desarrollé la lógica de evaluación que separa a los miembros aptos de los vulnerables (poder menor a 60). Mediante una condicional de comparación estricta de atributos, el sistema dictamina automáticamente una sugerencia de entrenamiento personalizada orientada a mitigar su estadística más deficiente.

---

## 2. Evidencia de Validación de Casos de Prueba

El script fue testeado en consola bajo entornos normales y límites, arrojando los siguientes resultados analíticos:

* **Caso Normal (Validación del Ejemplo):** El mago *Eldrin* (Nivel 12, Ataque 35, Defensa 10) procesó un poder exacto de `69`, marcando un estado de **APTO** al superar el umbral de 60 puntos de poder.
* **Caso Crítico de Filtrado (Menor a 60):** El pícaro *Pip* generó un poder de `30`. El sistema lo detectó de inmediato como personaje débil, aisló sus datos y emitió la alerta en el gremio sugiriendo *"Potenciar Ataque"* debido a que su ataque (12) es menor que su defensa.
* **Caso Límite (Valores en cero o nulos):** El paladín *Kael* inició con nivel y estadísticas en `0`. Las cláusulas de guarda del código impidieron desbordamientos matemáticos, asignándole un poder final de `0` y catalogándolo en estado de peligro de forma segura, recomendando un entrenamiento balanceado.

---