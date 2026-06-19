# Ejercicio: Procesamiento de datos con Fetch y Array Methods

## Descripción
En este ejercicio se desarrolló una función en JavaScript para procesar información externa de un archivo JSON. El objetivo fue filtrar y categorizar armas basadas en sus propiedades técnicas. El proceso incluyó:

* **Consumo de datos:** Uso de la API `fetch` para cargar de manera asíncrona los datos almacenados en un archivo `.json`.
* **Filtrado y Mapeo:** Aplicación de métodos de arrays para filtrar armas con una munición mínima y añadir una propiedad lógica (`recomendada`) basada en su nivel de rareza.
* **Categorización:** Organización de los datos filtrados en un objeto estructurado según el tipo de arma (rifle, pistola o francotirador).
* **Salida de datos:** Visualización del resumen resultante en la consola del navegador.

### Estructura del Proyecto
```text
raiz/
├── data/
│   └── datos.json
├── js/
│   └── script.js
│
├── index.html
│
└── README.md

```

## Comandos Utilizados

Para implementar esta lógica se utilizaron las siguientes funciones clave:

```javascript
// fetch: Realiza la petición asíncrona para obtener el archivo de datos.
fetch('./data/datos.json')

// filter: Selecciona las armas que cumplen con la condición de munición >= 30.
.filter(a => a.municion >= 30)

// map: Crea un nuevo array transformando cada objeto para incluir la propiedad 'recomendada'.
.map(a => ({ ...a, recomendada: ['rara', 'epica'].includes(a.rareza) }));

// Categorización: Agrupación de los datos procesados en un objeto según su tipo.
const resultado = {
    rifles: armas.filter(a => a.tipo === 'rifle'),
    // ...se repite la lógica para los demás tipos.
};

```

**Hecho por:**

* *Carlos Velasco*

