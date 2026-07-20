# Gestión y Clasificación de Armas

## Descripción

Este programa administra un conjunto de armas representadas mediante un arreglo de objetos en JavaScript. A partir de esta información, realiza diferentes operaciones para filtrar, clasificar y resumir los datos.

## Objetivo

Procesar un listado de armas para:

- Filtrar las armas con mayor cantidad de munición.
- Clasificarlas según su tipo.
- Identificar las armas recomendadas según su rareza.
- Mostrar un resumen de la cantidad de armas por categoría.

## Estructura de los datos

Cada arma está representada por un objeto con las siguientes propiedades:

| Propiedad | Descripción |
|-----------|-------------|
| `nombre` | Nombre del arma. |
| `tipo` | Categoría del arma (Rifle, Pistola o Francotirador). |
| `municion` | Cantidad de munición disponible. |
| `rareza` | Nivel de rareza del arma. |

Ejemplo:

```javascript
{
    nombre: "AK-47",
    tipo: "Rifle",
    municion: 30,
    rareza: "Épica"
}
```

## Funcionalidades

### 1. Creación del arreglo de armas

Se define un arreglo que almacena la información de todas las armas disponibles. Cada elemento del arreglo es un objeto con sus características principales.

### 2. Filtrado por cantidad de munición

Se seleccionan únicamente las armas cuya cantidad de munición es mayor o igual a **30** utilizando el método `filter()`.

**Resultado esperado:**

- AK-47
- M4A1
- Barrett M82

### 3. Clasificación por tipo

Las armas se agrupan en tres categorías mediante el método `filter()`:

- Rifles
- Pistolas
- Francotiradores

Esta clasificación permite trabajar con cada grupo de manera independiente.

### 4. Identificación de armas recomendadas

Se utiliza el método `map()` para crear un nuevo arreglo de armas agregando la propiedad:

```text
recomendada
```

Esta propiedad tendrá el valor:

- `true` si la rareza es **Rara** o **Épica**.
- `false` para cualquier otra rareza.

De esta forma es posible identificar rápidamente las armas recomendadas sin modificar el arreglo original.

### 5. Resumen por categoría

Finalmente, el programa muestra la cantidad de armas que existen en cada tipo:

- Rifles
- Pistolas
- Francotiradores

Para ello se utiliza la propiedad `length` de cada arreglo filtrado.

## Métodos de JavaScript utilizados

| Método | Función |
|---------|---------|
| `filter()` | Filtra elementos que cumplen una condición. |
| `map()` | Crea un nuevo arreglo agregando o modificando propiedades. |
| `console.log()` | Muestra información en la consola. |
| `console.table()` | Presenta los datos en formato de tabla para facilitar su lectura. |

## Flujo del programa

1. Crear el arreglo de armas.
2. Filtrar las armas con munición mayor o igual a 30.
3. Clasificar las armas según su tipo.
4. Marcar como recomendadas las armas de rareza **Rara** o **Épica**.
5. Mostrar la información procesada en la consola.
6. Imprimir un resumen con la cantidad de armas por categoría.

## Resultado esperado

Al ejecutar el programa se obtiene:

- Un listado de las armas con munición mayor o igual a 30.
- Una tabla con todas las armas indicando cuáles son recomendadas.
- Un resumen con la cantidad de rifles, pistolas y francotiradores registrados.