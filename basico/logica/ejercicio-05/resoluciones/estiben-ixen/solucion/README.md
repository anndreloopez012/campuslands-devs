# Resolución: Tabla de Posiciones Fútbol Sala

**Autor:** estiben ixen
**Fecha:** 11 de junio de 2026
**Ejercicio:** 05 - Lógica de programación (Tabla de fútbol sala)

## 1. Planteamiento del problema
El objetivo es procesar una lista de equipos de fútbol sala para calcular su rendimiento y generar una tabla de posiciones ordenada bajo criterios de puntos y diferencia de goles.

## 2. Lógica de cálculo
Para la resolución, he desglosado el problema en tres operaciones atómicas:
1.  **Cálculo de Puntos:** `(victorias * 3) + (empates * 1)`
2.  **Cálculo de Diferencia de Goles:** `golesFavor - golesContra`
3.  **Ordenamiento:**
    * Prioridad 1: Puntos (descendente).
    * Prioridad 2: Diferencia de goles (descendente) como criterio de desempate.

## 3. Implementación (JavaScript)

```javascript
const equipos = [
  { nombre: "Leones", victorias: 4, empates: 1, derrotas: 0, golesFavor: 10, golesContra: 2 },
  { nombre: "Tigres", victorias: 3, empates: 2, derrotas: 0, golesFavor: 8, golesContra: 3 },
  { nombre: "Águilas", victorias: 1, empates: 1, derrotas: 3, golesFavor: 5, golesContra: 9 }
];

const procesarTabla = (data) => {
  return data
    .map(eq => ({
      ...eq,
      puntos: (eq.victorias * 3) + eq.empates,
      difGoles: eq.golesFavor - eq.golesContra
    }))
    .sort((a, b) => b.puntos - a.puntos || b.difGoles - a.difGoles);
};

console.table(procesarTabla(equipos));

```

# commit 
