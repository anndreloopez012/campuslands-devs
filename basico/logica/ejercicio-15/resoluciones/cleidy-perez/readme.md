# Presupuesto de Estudio de Animación 3D

## Nombre

Cleidy Pérez

## Análisis

### Entrada

Un arreglo de escenas con:

- nombre
- horasModelado
- horasRender
- artistas

### Proceso

1. Recorrer cada escena.
2. Calcular el costo usando la fórmula:

Costo = (horasModelado × 40000) + (horasRender × 25000) + (artistas × 120000)

3. Acumular el costo total del proyecto.
4. Filtrar las escenas con costo mayor a Q1,000,000.
5. Encontrar la escena con el mayor costo.

### Salida

- Costo de cada escena.
- Costo total del proyecto.
- Lista de escenas costosas.
- Escena más costosa.

## Reglas identificadas

- El costo se calcula con la fórmula indicada.
- Una escena es costosa cuando supera Q1,000,000.

## Pruebas

### Caso normal

**Entrada:**

Escenas con diferentes horas y artistas.

**Resultado esperado:**

Se calcula correctamente el costo y el total del proyecto.

### Caso límite

**Entrada:**

Una escena con costo exactamente Q1,000,000.

**Resultado esperado:**

No se incluye como costosa porque la condición es **mayor** a Q1,000,000.

## Explicación final

Se utiliza un recorrido del arreglo para calcular el costo de cada escena, acumular el total, identificar las escenas costosas y encontrar la de mayor costo.

## Sugerencia

Se puede ordenar las escenas por costo o calcular el costo promedio del proyecto.