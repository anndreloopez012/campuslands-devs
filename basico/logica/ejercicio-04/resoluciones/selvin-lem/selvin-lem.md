# Resolución: Control de Líneas MOBA
**Desarrollador:** Selvin Lem

---


## Explicación del proceso
Para evaluar el desempeño del equipo, apliqué tres criterios de análisis:

**Cálculo de Eficiencia (KDA):** Utilicé Math.max(deaths, 1) para evitar la división por cero, garantizando que el cálculo sea robusto incluso en partidas perfectas.

**Validación Económica:** Apliqué un filtro booleano (oro > 12000) para identificar a los jugadores con mayor impacto financiero.

**Monitoreo Estratégico:** Implementé una alerta condicional que evalúa si el jugador ha participado en objetivos, incentivando el cumplimiento del meta-juego.

## Solución técnica
El procesamiento sigue un flujo de transformación de datos:

**Entrada:** Arreglo de objetos con estadísticas individuales.

**Proceso:** Mapeo de datos para calcular nuevas propiedades (KDA, estado económico, alertas) y ordenamiento descendente por KDA mediante el método .sort().

**Salida:** Reporte tabular listo para el análisis del coach.