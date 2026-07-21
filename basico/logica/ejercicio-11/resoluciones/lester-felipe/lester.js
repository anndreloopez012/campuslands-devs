const inventarioReservas = [
    { nombre: "Sofía Martínez", destino: "Pucón", actividad: "paracaidismo", edad: 25, costoBase: 150000 },
    { nombre: "Lucas Gomez", destino: "Mendoza", actividad: "trekking", edad: 16, costoBase: 80000 },
    { nombre: "Mateo Díaz", destino: "Iquique", actividad: "paracaidismo", edad: 17, costoBase: 160000 },
    { nombre: "Valentina Silva", destino: "Cuzco", actividad: "paracaidismo", edad: 32, costoBase: 180000 },
    { nombre: "Nicolás Torres", destino: "Punta Cana", actividad: "buceo", edad: 15, costoBase: 120000 }
];

function procesarReservas(reservas) {
    const IMPUESTO = 0.12;
    const EDAD_MINIMA_PARACAIDISMO = 18;

    return reservas
        .map(reserva => {
            const esValida = reserva.actividad !== "paracaidismo" || reserva.edad >= EDAD_MINIMA_PARACAIDISMO;
            const costoTotal = Number((reserva.costoBase * (1 + IMPUESTO)).toFixed(2));
            
            return {
                ...reserva,
                costoTotal,
                esValida
            };
        })
        .filter(reserva => reserva.esValida)
        .map(({ esValida, ...datosAprobados }) => datosAprobados);
}

function imprimirResumen(reservasAprobadas) {
    console.log("=== RESUMEN DE RESERVAS APROBADAS ===");
    reservasAprobadas.forEach(reserva => {
        console.log(`Pasajero: ${reserva.nombre.padEnd(18)} | Destino: ${reserva.destino.padEnd(12)} | Actividad: ${reserva.actividad.padEnd(13)} | Costo Final: $${reserva.costoTotal}`);
    });
}

const reservasProcesadas = procesarReservas(inventarioReservas);
imprimirResumen(reservasProcesadas);