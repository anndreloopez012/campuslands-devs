# Ejercicio 06: Comparador de Motos Deportivas

**Autor:** Sergio Ajú  
**Módulo:** Lógica de Programación

## Descripción
Este script implementa un sistema para evaluar motos deportivas basado en su relación peso-potencia y costo de mantenimiento. 

## Proceso de Resolución
1.  **Modelado:** Definición de un arreglo de objetos para almacenar las propiedades de cada moto.
2.  **Cálculo:** Se añade una propiedad `relacionPesoPotencia` calculada mediante la fórmula $HP / Peso$.
3.  **Filtrado:** Se aplica un filtro para excluir motos con mantenimiento > 500,000.
4.  **Clasificación:**
    * **Pista:** Moto con el valor más alto de relación peso-potencia.
    * **Económica:** Moto con el costo de mantenimiento mensual más bajo.

## Validación
* **Caso Normal:** Motos dentro del rango de presupuesto.
* **Caso Límite:** Motos con pesos muy bajos o HP muy altos, y filtrado de costos exactos en 500,000.