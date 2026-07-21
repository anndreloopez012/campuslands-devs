# README - Sistema de Análisis de Motocicletas

## Descripción

Este programa en JavaScript analiza un conjunto de motocicletas para ayudar a identificar cuáles ofrecen el mejor rendimiento y cuáles representan la opción más económica de mantener.

Cada motocicleta almacena información básica como su marca, modelo, potencia, peso y costo de mantenimiento mensual.

---

## Objetivos del programa

El código realiza las siguientes tareas:

1. Guarda la información de varias motocicletas.
2. Calcula la relación peso-potencia de cada una.
3. Filtra las motocicletas cuyo mantenimiento mensual es menor a **Q500,000**.
4. Ordena las motocicletas según su relación peso-potencia, de mayor a menor.
5. Muestra:

   * La mejor motocicleta para pista.
   * La motocicleta más económica de mantener.

---

## Estructura de los datos

Cada motocicleta contiene las siguientes propiedades:

| Propiedad              | Descripción                               |
| ---------------------- | ----------------------------------------- |
| `marca`                | Fabricante de la motocicleta.             |
| `modelo`               | Modelo específico.                        |
| `hp`                   | Potencia del motor en caballos de fuerza. |
| `pesoKg`               | Peso de la motocicleta en kilogramos.     |
| `mantenimientoMensual` | Costo mensual estimado de mantenimiento.  |

---

## Funcionamiento del programa

### 1. Registro de motocicletas

Se crea un arreglo llamado `motos` que almacena varios objetos, donde cada objeto representa una motocicleta con toda su información.

---

### 2. Cálculo de la relación peso-potencia

Para cada motocicleta se calcula:

```
Relación = hp / pesoKg
```

Este valor indica cuánta potencia tiene la motocicleta por cada kilogramo de peso.

Mientras mayor sea el resultado, mejor será su desempeño.

---

### 3. Filtrado de motocicletas económicas

El programa utiliza el método `filter()` para seleccionar únicamente aquellas motocicletas cuyo mantenimiento mensual sea menor a **Q500,000**.

---

### 4. Ordenamiento

Posteriormente utiliza el método `sort()` para ordenar todas las motocicletas desde la mejor relación peso-potencia hasta la menor.

Esto permite identificar rápidamente cuál tiene el mejor rendimiento.

---

### 5. Selección de las mejores opciones

Finalmente el programa obtiene:

* **Mejor opción para pista:** la motocicleta con la mayor relación peso-potencia.
* **Mejor opción económica:** la motocicleta con el menor costo de mantenimiento mensual entre las filtradas.

---

## Métodos de JavaScript utilizados

* `forEach()` para recorrer las motocicletas y calcular la relación peso-potencia.
* `filter()` para seleccionar las motocicletas económicas.
* `sort()` para ordenar por rendimiento y por costo de mantenimiento.
* `toFixed()` para mostrar la relación con tres decimales.
* `toLocaleString()` para presentar los valores monetarios con separadores de miles.

---

## Salida del programa

El programa muestra en la consola:

* El listado de motocicletas ordenadas por rendimiento.
* Las motocicletas con mantenimiento menor a Q500,000.
* La mejor motocicleta para pista.
* La mejor motocicleta económica.

---

## Complejidad

* Recorrido para calcular relaciones: **O(n)**
* Filtrado de motocicletas: **O(n)**
* Ordenamiento: **O(n log n)**
* Selección de resultados: **O(1)**

La operación más costosa corresponde al ordenamiento de las motocicletas.

---

## Conclusión

Este programa demuestra el uso de arreglos de objetos y de los métodos `forEach()`, `filter()` y `sort()` para procesar información de manera eficiente. Además, aplica cálculos sencillos para comparar el rendimiento de diferentes motocicletas y seleccionar tanto la mejor opción para pista como la alternativa más económica de mantener.
