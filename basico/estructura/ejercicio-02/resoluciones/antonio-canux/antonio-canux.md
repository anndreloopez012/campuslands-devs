# Proyecto de estructuración - Ranking de Jugadores
 
**Nombre del Camper:**Marco Antonio Canux Raquec

## Estructura del proyecto
```
antonio-canux/
├── css/
│   └── styles.css      
├── data/
│   └── players.json          
├── js/
│   └── app.js
├── index.html
└── antonio-canux.md
```

## Conexión entre archivos
- Nuestro archivo principal es `index.html`, el cual recibe sus estilos apartir de una hoja css ubicada en `/css/styles.css`. Al mismo tiempo recibe las funciones de script de una hoja js ubicada en `/js/app.js`.
- La hoja de js recibe datos de la hoja JSON ubicada en `/data/players.json`, mediante un `fetch` que entrega la lista de los jugadores para su posterior renderización en el HTML, con sus respectivos estilos css.

## Procesamiento del problema
1. Identificar los elementos de entrada, proceso y salida, que en este caso, los elementos de entrada serían los datos contenidos dentro del archivo JSON; el proceso se conformaría de las funciones que calculen el winrate y su posterior ordenamiento; y finalmente, la salida es una lista ordenada de los jugadores según su posición.
2. Como siguiente paso dentro del procesamiento del problema, separamos las responsabilidades de cada archivo, para evitar confusiones, para ello creamos la estructura actual de las carpetas.
3. Por último, se llevo a la ejecución del proceso anterior, empezando con la escritura del código necesario, apoyandonos en la IA, para una redacción mejorada.
