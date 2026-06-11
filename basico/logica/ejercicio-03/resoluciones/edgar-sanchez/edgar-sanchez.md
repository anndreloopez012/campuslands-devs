# Solución: Gestor de Personajes RPG

**Desarrollador:** [Edgar sanchez]

Este documento detalla la estructura lógica y el análisis realizado para solventar el sistema de auditoría interna de estadísticas para la party RPG antes de ingresar a la mazmorra.

---

## 1. Explicación del Razonamiento

Para resolver este ejercicio de lógica, dividí el problema siguiendo el principio de responsabilidad única en funciones limpias y legibles:

1. **Modelado de Datos:** Se estructuró a los miembros de la party en un arreglo de objetos nativos de JavaScript. Cada personaje cuenta con propiedades explícitas y semánticas (`nombre`, `clase`, `nivel`, `ataque`, `defensa`).
2. **Abstracción del Cálculo:** En lugar de saturar el bucle principal de impresión, delegué la fórmula de asignación de fuerza en una función pura matemática `calcularPoder(personaje)`.
3. **Algoritmo de Decisiones:** La función `sugerirMejora` utiliza condicionales analizando exclusivamente cuál de las dos estadísticas de combate se encuentra rezagada con respecto a la otra para emitir recomendaciones personalizadas de entrenamiento.
4. **Ciclo de Reporte:** Un recorrido ordenado (`forEach`) evalúa cada caso, guarda un sub-registro de aquellos que no alcanzan el umbral mínimo exigido (Poder < 60) y entrega un desglose final con planes de acción claros.

---

## 2. Evidencia de Validación

Para garantizar que el programa responde de forma robusta bajo escenarios idóneos y hostiles, se validaron los siguientes casos integrados en el set de datos principal:

### Caso 1: Comprobación del Ejemplo Base
* **Entrada:** `Mago Eldrin` -> Nivel 12, Ataque 35, Defensa 10.
* **Proceso de Fórmula:** $(12 \times 2) + 35 + 10 = 24 + 35 + 10 = 69$.
* **Resultado:** Poder total de 69. Al ser mayor que 60, el programa lo categoriza correctamente con estado `✅ Listo para el combate`.

### Caso 2: Caso Normal Rezagado (Filtrado de Debilidad)
* **Entrada:** `Pícaro Lyra` -> Nivel 8, Ataque 20, Defensa 8.
* **Proceso de Fórmula:** $(8 \times 2) + 20 + 8 = 16 + 20 + 8 = 44$.
* **Resultado:** Poder de 44. Al ser inferior a 60, el script la añade a la lista de vulnerabilidad, detecta que su defensa (8) es menor que su ataque (20) y emite la recomendación exacta: `💡 Sugerencia: Entrenar Defensa (+ por debajo del ataque)`.

### Caso 3: Caso Límite (Estadísticas en Cero / Recién Creado)
* **Entrada:** `Clérigo Zephyr` -> Nivel 1, Ataque 0, Defensa 0.
* **Proceso de Fórmula:** $(1 \times 2) + 0 + 0 = 2$.
* **Resultado:** Poder de 2. El script no colapsa ni produce errores de división por cero o datos indefinidos (`NaN`). Identifica correctamente la igualdad en sus estadísticas de combate y sugiere un `Entrenamiento balanceado (Ataque y Defensa son iguales)`.