const reservas = [
    { nombre: "Juan", destino: "Alpes", actividad: "paracaidismo", edad: 25, costoBase: 500 },
    { nombre: "Ana", destino: "Costa Rica", actividad: "paracaidismo", edad: 17, costoBase: 500 },
    { nombre: "Luis", destino: "Patagonia", actividad: "trekking", edad: 16, costoBase: 200 }
];

const IMPUESTO = 0.12;

function procesarReservas(listaReservas) {
    return listaReservas
        .filter(reserva => {
            if (reserva.actividad === "paracaidismo" && reserva.edad < 18) {
                console.log(`Reserva rechazada: ${reserva.nombre} no cumple la edad mínima.`);
                return false;
            }
            return true;
        })
        .map(reserva => {
            const costoTotal = reserva.costoBase * (1 + IMPUESTO);
            return {
                ...reserva,
                costoTotal: costoTotal.toFixed(2)
            };
        });
}

const reservasAprobadas = procesarReservas(reservas);
console.log("Resumen de reservas aprobadas:", reservasAprobadas);