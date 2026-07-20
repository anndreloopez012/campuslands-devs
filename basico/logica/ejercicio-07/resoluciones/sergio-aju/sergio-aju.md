# Ejercicio 07: Diagnóstico Rápido de Mecánica

**Autor:** 

Sergio Ajú
  
**Módulo:** Lógica de Programación

## Descripción
Script diseñado para asistir a mecánicos de competición mediante el análisis de síntomas reportados por pilotos. El sistema procesa un arreglo de síntomas y devuelve un reporte técnico detallado.

## Lógica del Sistema
1. **Diccionario de fallos:** Se utiliza un objeto que actúa como base de datos técnica para mapear síntomas con sus causas probables.
2. **Procesamiento:** La función `diagnosticar` recorre el arreglo de entrada y extrae las recomendaciones correspondientes.
3. **Reporte:** Se genera una salida formateada que agrupa todas las acciones necesarias.

## Ejemplo de uso
Entrada: `['no enciende', 'vibra']`  
Salida: 
- Revisar batería y sistema de ignición.
- Revisar balanceo de llantas y tornillería.