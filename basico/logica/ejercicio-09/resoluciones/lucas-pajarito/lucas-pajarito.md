# Ejercicio: Análisis de una Playlist Musical

## Objetivo

Desarrollar un programa en JavaScript para analizar una colección de canciones utilizando los principales métodos de arreglos (`filter`, `map`, `reduce`) y realizar una validación sobre la duración total de una playlist.

Durante este ejercicio se pondrán en práctica conceptos fundamentales de manipulación de datos mediante objetos y arreglos.

---

# Objetivos de aprendizaje

Al finalizar este ejercicio podrás:

- Crear arreglos de objetos.
- Filtrar información utilizando `filter()`.
- Transformar datos con `map()`.
- Calcular valores acumulados con `reduce()`.
- Validar condiciones mediante estructuras de control.
- Mostrar información organizada en la consola.

---

# Estructura de cada canción

Cada canción contiene la siguiente información:

| Propiedad | Descripción |
|-----------|-------------|
| titulo | Nombre de la canción |
| artista | Intérprete |
| bpm | Beats Per Minute (ritmo de la canción) |
| duracionSeg | Duración en segundos |

Ejemplo:

```javascript
{
    titulo: "Titanium",
    artista: "David Guetta ft. Sia",
    bpm: 126,
    duracionSeg: 245
}
```

---

# Paso 1. Crear la playlist

Se define un arreglo llamado `canciones` que almacena varios objetos con la información de distintas canciones.

```javascript
const canciones = [
    ...
];
```

---

# Paso 2. Filtrar canciones con BPM mayor a 135

Se utiliza el método `filter()` para obtener únicamente las canciones con un ritmo superior a 135 BPM.

```javascript
const cancionesRapidas = canciones.filter(
    cancion => cancion.bpm > 135
);
```

Este filtro permite identificar las canciones con mayor intensidad.

---

# Paso 3. Clasificar las canciones por intensidad

Se utiliza `map()` para agregar una nueva propiedad llamada `intensidad`.

La clasificación utilizada es:

| BPM | Intensidad |
|------|------------|
| 0 - 120 | Media |
| 121 - 140 | Alta |
| Mayor a 140 | Explosiva |

Ejemplo:

```javascript
const cancionesClasificadas = canciones.map(...);
```

Cada objeto conservará su información original e incluirá la nueva categoría.

---

# Paso 4. Calcular la duración total

Con el método `reduce()` se suman todas las duraciones de las canciones.

```javascript
const duracionTotalSeg = canciones.reduce(
    (total, cancion) => total + cancion.duracionSeg,
    0
);
```

Posteriormente, la duración se convierte de segundos a minutos y segundos para facilitar su lectura.

---

# Paso 5. Validar la duración de la playlist

La duración total debe encontrarse entre:

- **15 minutos**
- **25 minutos**

Se realiza la validación mediante una estructura `if`.

```javascript
if (duracionTotalSeg >= minimo && duracionTotalSeg <= maximo) {
    ...
}
```

Si la duración cumple con el rango establecido, el programa mostrará un mensaje de confirmación; de lo contrario, indicará que la playlist no cumple con el requisito.

---

# Métodos utilizados

| Método | Descripción |
|---------|-------------|
| `filter()` | Filtrar elementos de un arreglo |
| `map()` | Transformar objetos agregando propiedades |
| `reduce()` | Acumular valores |
| `console.table()` | Mostrar datos en formato tabular |
| `if` | Validar condiciones |

---

# Ejecución

Guardar el archivo como:

```
playlist.js
```

Ejecutar con Node.js:

```bash
node playlist.js
```

---

# Salida esperada

El programa mostrará:

1. La lista completa de canciones.
2. Las canciones con más de **135 BPM**.
3. La clasificación por intensidad de cada canción.
4. La duración total de la playlist.
5. Un mensaje indicando si la duración se encuentra entre **15 y 25 minutos**.

---

# Resultado esperado

Al finalizar este ejercicio habrás practicado el uso de los métodos más importantes para manipular arreglos de objetos en JavaScript. Además, aprenderás a transformar información, calcular estadísticas y validar reglas de negocio de manera sencilla y eficiente.
