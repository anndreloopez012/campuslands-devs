# Ejercicio: Filtrado y Análisis de Autos

## Objetivo

Desarrollar un programa en JavaScript que permita analizar una colección de autos deportivos utilizando los métodos de arreglos más comunes.

Durante el ejercicio se trabajará con:

- `filter()`
- `map()`
- `reduce()`
- `sort()`
- `slice()`

---

# Objetivos de aprendizaje

Al finalizar este ejercicio podrás:

- Crear arreglos de objetos.
- Filtrar información.
- Agregar nuevas propiedades a los objetos.
- Calcular estadísticas.
- Ordenar datos.
- Obtener subconjuntos de información.

---

# Estructura del objeto

Cada automóvil posee la siguiente información:

| Propiedad | Descripción |
|-----------|-------------|
| marca | Fabricante del automóvil |
| modelo | Modelo |
| ceroACien | Tiempo de aceleración de 0-100 km/h |
| precioUSD | Precio en dólares |
| unidades | Cantidad de unidades producidas |

Ejemplo:

```javascript
{
    marca: "Bugatti",
    modelo: "Chiron Super Sport",
    ceroACien: 2.4,
    precioUSD: 3900000,
    unidades: 500
}
```

---

# Paso 1. Crear la lista de autos

Se define un arreglo llamado `autos` que contiene varios objetos con la información de distintos vehículos.

```javascript
const autos = [
   ...
];
```

---

# Paso 2. Filtrar autos con aceleración menor a 3 segundos

Utilizando `filter()` se obtienen únicamente los automóviles que aceleran de 0 a 100 km/h en menos de tres segundos.

```javascript
const rapidos = autos.filter(auto => auto.ceroACien < 3);
```

Resultado esperado:

- Rimac Nevera
- Tesla Model S Plaid
- Bugatti Chiron Super Sport
- Koenigsegg Jesko Absolut
- Ferrari SF90
- Lamborghini Revuelto

---

# Paso 3. Clasificar la exclusividad

Con `map()` se agrega una nueva propiedad llamada `exclusividad`.

Regla:

- Menos de 500 unidades → **Extrema**
- 500 unidades o más → **Normal**

```javascript
const clasificados = autos.map(auto => ({
    ...auto,
    exclusividad: auto.unidades < 500
        ? "Extrema"
        : "Normal"
}));
```

---

# Paso 4. Calcular el precio promedio

Con `reduce()` se suman todos los precios.

```javascript
const sumaPrecios = autos.reduce(
    (total, auto) => total + auto.precioUSD,
    0
);
```

Después se divide entre la cantidad de vehículos.

```javascript
const promedio = sumaPrecios / autos.length;
```

---

# Paso 5. Obtener el Top 3 por aceleración

Primero se ordena el arreglo.

```javascript
.sort((a, b) => a.ceroACien - b.ceroACien)
```

Posteriormente se obtienen únicamente los primeros tres elementos.

```javascript
.slice(0, 3)
```

---

# Métodos utilizados

| Método | Función |
|---------|----------|
| filter() | Filtrar elementos |
| map() | Transformar objetos |
| reduce() | Acumular valores |
| sort() | Ordenar información |
| slice() | Obtener una parte del arreglo |
| console.table() | Mostrar tablas en consola |

---

# Ejecución

Guardar el archivo como:

```
autos.js
```

Ejecutar con Node.js:

```bash
node autos.js
```

---

# Salida esperada

El programa mostrará:

1. Los autos que aceleran en menos de 3 segundos.
2. La clasificación de exclusividad de cada automóvil.
3. El precio promedio de todos los vehículos.
4. El Top 3 de autos con mejor aceleración.

---

# Resultado esperado

Al finalizar este ejercicio habrás practicado el uso de los principales métodos para manipular arreglos de objetos en JavaScript, permitiéndote filtrar, transformar, ordenar y resumir información de manera eficiente.
