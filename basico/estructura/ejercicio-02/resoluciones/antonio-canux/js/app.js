// Calcula el porcentaje de victorias (winrate).
// Caso limite: si no jugo partidas, devuelve 0 y evita dividir entre cero.
function calcularWinrate(victorias, derrotas) {
    const totalPartidas = victorias + derrotas;
    if (totalPartidas === 0) return 0;
    return Math.round((victorias / totalPartidas) * 100);
}

// Ordena de mayor a menor winrate.
function ordenarPorWinrate(jugadores) {
    return [...jugadores].sort(
        (a, b) =>
            calcularWinrate(b.victorias, b.derrotas) -
            calcularWinrate(a.victorias, a.derrotas)
    );
}

// Dibuja la lista en el HTML.
function renderRanking(jugadores) {
    const lista = document.querySelector("#lista-jugadores");
    lista.innerHTML = "";

    // Caso limite: lista vacia.
    if (jugadores.length === 0) {
        lista.innerHTML = '<li class="ranking__empty">No hay jugadores para mostrar.</li>';
        return;
    }

    const ordenados = ordenarPorWinrate(jugadores);

    ordenados.forEach((jugador, indice) => {
        const posicion = indice + 1;
        const winrate = calcularWinrate(jugador.victorias, jugador.derrotas);

        const item = document.createElement("li");
        item.className = `player player--${posicion}`;
        item.innerHTML = `
      <span class="player__rank">${posicion}</span>
      <div class="player__info">
        <span class="player__nick">${jugador.nick}</span>
        <span class="player__rol">${jugador.rol}</span>
      </div>
      <div class="player__stats">
        <div class="player__wr">${winrate}%</div>
        <div class="player__record">
          <span class="w">${jugador.victorias}V</span> /
          <span class="l">${jugador.derrotas}D</span>
        </div>
      </div>
    `;
        lista.appendChild(item);
    });
}

// Carga los datos desde el JSON y maneja errores.
async function iniciar() {
    try {
        const respuesta = await fetch("data/players.json");
        const jugadores = await respuesta.json();
        renderRanking(jugadores);
    } catch (error) {
        const lista = document.querySelector("#lista-jugadores");
        lista.innerHTML =
            '<li class="ranking__empty">No se pudieron cargar los datos. Abre el proyecto con un servidor local (Live Server).</li>';
        console.error("Error al cargar players.json:", error);
    }
}

iniciar();