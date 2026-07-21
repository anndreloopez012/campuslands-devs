# Laboratorio de fórmulas químicas

## Nombre
Estiben Ixen

## Objetivo

Crear una solución que permita calcular la masa total de compuestos químicos y detectar fórmulas incompletas mediante validaciones de sus componentes.

## Descripción de la solución

La solución trabaja con una lista de compuestos químicos.  
Cada compuesto contiene componentes con un símbolo químico y una cantidad en gramos.

El proceso realizado fue:

1. Crear compuestos con sus respectivos componentes.
2. Calcular la masa total sumando los gramos de cada componente.
3. Validar que todos los componentes tengan gramos mayores a cero.
4. Identificar compuestos con información inválida.

## Validaciones realizadas

Caso normal:

- Compuesto "Agua".
- Componentes con valores mayores a cero.
- Resultado esperado: masa total calculada correctamente.

Caso límite:

- Compuesto con un componente de 0 gramos.
- Resultado esperado: fórmula detectada como incompleta.

## Evidencia de ejecución

Comandos utilizados:

```bash
git status
git add .
git commit -m "Agrega solución laboratorio de fórmulas químicas"
git push origin nombre-rama