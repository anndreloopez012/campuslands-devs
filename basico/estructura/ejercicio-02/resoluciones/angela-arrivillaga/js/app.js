async function cargarRanking() {
    try {
        const respuesta = await fetch('data/players.json');
        if (!respuesta.ok) {
            throw new Error('Error al conectar con la base de datos de jugadores');
        }
        const jugadores = await respuesta.ok ? await respuesta.json() : [];
        console.log("Datos cargados exitosamente:", jugadores);
    } catch (error) {
        console.error("Notas técnicas de error:", error.message);
    }
}

document.addEventListener('DOMContentLoaded', cargarRanking);