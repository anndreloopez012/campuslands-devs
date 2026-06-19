export function CardDestino(destino) {
    return `
        <div class="card-destino" id="card-${destino.id}">
            <div class="card-header">
                <h3>${destino.nombre}</h3>
                <p class="ubicacion">${destino.pais}</p>
            </div>
            <div class="card-body">
                <p class="precio"><strong>$${destino.precioUSD}</strong> / noche</p>
            </div>
            <div class="card-footer">
                <button class="btn-detalles">Ver itinerario</button>
            </div>
        </div>
    `;
}