const tabla = document.getElementById('tabla-jugadores');

fetch('data/players.json')
    .then(respuesta => respuesta.json())
    .then(jugadores => {
        tabla.innerHTML = jugadores.map(j => `
            <tr>
                <td>${j.nombre}</td>
                <td>${j.apellido}</td>
                <td>${j.puntos}</td>
                <td>${j.deporte}</td>
            </tr>
        `).join('');
    })
    .catch(error => console.error("Error:", error));