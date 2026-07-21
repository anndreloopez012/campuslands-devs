# Laboratorio de Fórmulas Químicas

## Nombre

Cleidy Pérez

## Análisis

### Entrada

Un arreglo de compuestos. Cada compuesto tiene un nombre y una lista de componentes con su símbolo y gramos.

### Proceso

1. Recorrer cada compuesto.
2. Sumar los gramos de sus componentes.
3. Validar que todos los gramos sean mayores que 0.
4. Identificar los compuestos incompletos.
5. Mostrar la masa total y el estado.

### Salida

- Masa total de cada compuesto.
- Estado (Completo o Incompleto).
- Lista de compuestos incompletos.

## Reglas identificadas

- Los gramos deben ser mayores que 0.
- Si un componente tiene gramos <= 0, el compuesto es incompleto.

## Pruebas

### Caso normal

**Entrada:**

Agua y Dióxido de Carbono con gramos válidos.

**Resultado esperado:**

Compuestos completos con masa total calculada.

### Caso límite

**Entrada:**

Un componente con 0 gramos.

**Resultado esperado:**

El compuesto aparece como incompleto.

## Explicación final

Se recorren todos los compuestos, se calcula la masa total y se valida que cada componente tenga una cantidad válida.

## Sugerencia

Se puede agregar la validación de símbolos químicos repetidos o componentes vacíos.