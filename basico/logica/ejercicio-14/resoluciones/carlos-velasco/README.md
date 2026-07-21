# Laboratorio de Fórmulas Químicas

Este ejercicio desarrolla una solución para registrar y validar mezclas químicas simples dentro de un laboratorio educativo. A partir de una colección de compuestos y sus componentes, el programa calcula la masa total de cada fórmula, verifica que todas las cantidades sean válidas y detecta aquellas mezclas que presentan información incompleta.

La implementación simula una tarea común en sistemas de gestión de laboratorios, donde es indispensable validar la integridad de los datos antes de realizar cálculos o registrar experimentos.

---

# Objetivo del ejercicio

Desarrollar una solución que permita administrar una colección de compuestos químicos realizando las siguientes operaciones:

- Registrar compuestos con sus respectivos componentes.
- Calcular la masa total de cada compuesto.
- Validar que ningún componente tenga una cantidad de gramos menor o igual a cero.
- Detectar fórmulas químicas incompletas.
- Mostrar los resultados obtenidos de forma organizada.

---

# Análisis del problema

Cada compuesto químico está formado por uno o varios componentes.

Cada componente contiene dos datos fundamentales:

- Símbolo químico.
- Cantidad de gramos.

Para garantizar la validez de una mezcla química es necesario comprobar que todos sus componentes poseen una cantidad positiva de gramos.

Posteriormente se debe calcular la masa total del compuesto mediante la suma de todos sus componentes y clasificar aquellas fórmulas que contienen datos inválidos.

---

# Lógica de la solución

El algoritmo implementado sigue el siguiente flujo de trabajo:

1. Crear un arreglo de compuestos químicos.
2. Recorrer cada compuesto.
3. Validar los gramos registrados para cada componente.
4. Calcular la masa total utilizando la suma de sus componentes.
5. Identificar los compuestos incompletos.
6. Mostrar un resumen con todas las estadísticas obtenidas.

Este procedimiento permite mantener separados los datos originales del procesamiento realizado por el algoritmo.

---

# Herramientas utilizadas

## JavaScript

JavaScript fue utilizado para desarrollar toda la lógica del ejercicio.

Durante la implementación se emplearon las siguientes características del lenguaje:

- Arrays
- Objetos
- Funciones flecha
- map()
- filter()
- reduce()
- every()
- console.table()

Estas herramientas permiten escribir soluciones claras, reutilizables y fáciles de mantener.

---

# Explicación técnica

## Array de objetos

Cada compuesto se representa mediante un objeto que almacena su nombre y una colección de componentes.

Ejemplo:

```javascript
{
    nombre: "Agua",
    componentes: [
        { simbolo: "H", gramos: 2 },
        { simbolo: "O", gramos: 16 }
    ]
}
```

Esta estructura facilita recorrer cada compuesto y acceder a sus componentes.

---

## map()

El método `map()` genera un nuevo arreglo con las estadísticas calculadas para cada compuesto.

No modifica la información original.

---

## reduce()

El método `reduce()` permite sumar todos los gramos de los componentes para obtener la masa total del compuesto.

Su utilización simplifica el cálculo acumulativo.

---

## every()

El método `every()` verifica que todos los componentes cumplan una condición determinada.

En este ejercicio se utiliza para comprobar que todos los componentes poseen una cantidad de gramos mayor que cero.

---

## filter()

El método `filter()` permite obtener únicamente aquellos compuestos que presentan información incompleta.

Esto facilita generar un listado de registros que requieren corrección.

---

# Fórmulas utilizadas

## Masa total

```text
Masa Total = Σ gramos de todos los componentes
```

---

## Validación

Cada componente debe cumplir:

```text
gramos > 0
```

Si alguno de los componentes no cumple esta condición, el compuesto será considerado incompleto.

---

# Solución implementada

La solución registra una colección de compuestos químicos y procesa automáticamente cada uno de ellos.

Para cada compuesto se calcula:

- masa total;
- estado de validación.

Posteriormente se genera un listado independiente con todos los compuestos incompletos, permitiendo identificar rápidamente los registros que contienen errores.

---

# Código fuente

El archivo `solucion.js` contiene toda la implementación del algoritmo descrito en este documento.

---

# Validación de la solución

## Caso normal

Compuesto:

```text
H₂O
H = 2 g
O = 16 g
```

Resultado esperado:

```text
Masa Total = 18 g
Compuesto válido
```

---

## Caso límite

Compuesto:

```text
CO₂

C = 12 g
O = 0 g
```

Resultado esperado:

```text
Compuesto incompleto
```

La validación detecta correctamente que uno de sus componentes posee una cantidad inválida.

---

# Complejidad del algoritmo

El procesamiento principal recorre todos los compuestos y sus componentes.

Su complejidad temporal corresponde aproximadamente a:

```text
O(n × m)
```

donde:

- **n** representa la cantidad de compuestos.
- **m** representa la cantidad promedio de componentes por compuesto.

---

# Conclusión

Este ejercicio permitió aplicar estructuras de datos compuestas, validaciones, operaciones de agregación y procesamiento funcional utilizando JavaScript.

La solución demuestra cómo validar información antes de realizar cálculos, una práctica esencial en sistemas científicos, laboratorios y aplicaciones donde la integridad de los datos resulta crítica para obtener resultados confiables.

---

## Autor

**Carlos Velasco**