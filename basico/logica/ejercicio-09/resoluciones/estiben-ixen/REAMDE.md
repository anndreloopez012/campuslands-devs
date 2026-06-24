# solucion de ejercicio

* **Estudiante:** Brandon Estiben Ixen Teleguario
* **Fecha:** Junio 2026
* **Módulo:** estructura basica.


* **Contexto:**
  *  Automatización de la creación de playlists para el gimnasio, filtrando por intensidad (BPM) y controlando la duración total del entrenamiento.

Solución Propuesta (JavaScript)
   
```javascript

    const canciones = [
    { titulo: "Eye of the Tiger", artista: "Survivor", bpm: 109, duracionSeg: 245 }, // Filtrada
    { titulo: "Thunderstruck", artista: "AC/DC", bpm: 134, duracionSeg: 292 },      // Filtrada
    { titulo: "Till I Collapse", artista: "Eminem", bpm: 171, duracionSeg: 297 },  // Explosiva
    { titulo: "Power", artista: "Kanye West", bpm: 154, duracionSeg: 292 },        // Alta
    { titulo: "Enter Sandman", artista: "Metallica", bpm: 139, duracionSeg: 331 }  // Media
    ];

    // 1. Filtrar canciones (> 135 BPM)
    const playlistFiltrada = canciones.filter(c => c.bpm > 135);

    // 2. Clasificar por intensidad
    const clasificar = (bpm) => {
    if (bpm >= 170) return "explosiva";
    if (bpm >= 150) return "alta";
    return "media";
    };

    const playlistFinal = playlistFiltrada.map(c => ({
    ...c,
    intensidad: clasificar(c.bpm)
    }));

    // 3. Sumar duración total (segundos a minutos)
    const duracionTotalSeg = playlistFinal.reduce((acc, c) => acc + c.duracionSeg, 0);
    const duracionTotalMin = (duracionTotalSeg / 60).toFixed(2);
    console.log(`Duración total: ${duracionTotalMin} minutos`);
```

* **1. Razonamiento del Problema**
Análisis: Primero determiné el punto de corte para el filtrado (135 BPM). Cualquier canción por debajo de este valor se descarta por no cumplir con la energía mínima requerida para el entrenamiento.

- Proceso: * Utilicé .filter() para limpiar la lista.

- Utilicé .map() para enriquecer el objeto original añadiendo la propiedad intensidad.

- Utilicé .reduce() para sumar el tiempo total de forma eficiente.

- Validación: El tiempo total obtenido es de ~15.33 minutos, lo cual cumple satisfactoriamente con el rango objetivo de 15 a 25 minutos.

3.**Evidencia de Validación**
Para validar la lógica, ejecuté la función con el conjunto de datos de prueba:

Entrada: 5 canciones.

Proceso: Se filtraron 2 canciones (bajas BPM) y se procesaron 3.

Salida: playlistFinal con 3 objetos clasificados y una duración de 15.33 minutos.