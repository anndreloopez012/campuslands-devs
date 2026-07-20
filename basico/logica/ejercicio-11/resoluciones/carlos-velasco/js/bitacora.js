    const reservas = [
    { nombre: "Carlos", destino: "Alpes", actividad: "paracaidismo", edad: 25, costoBase: 500 },
    { nombre: "Ana", destino: "Alpes", actividad: "paracaidismo", edad: 17, costoBase: 500 },
    { nombre: "Luis", destino: "Costa", actividad: "buceo", edad: 20, costoBase: 300 },
    { nombre: "Sara", destino: "Selva", actividad: "trekking", edad: 16, costoBase: 150 }
    ];

    const IMPUESTO = 0.12;

    const procesarReservas = (lista) => {
    return lista
        .filter(r => !(r.actividad === "paracaidismo" && r.edad < 18))
        .map(r => ({
        ...r,
        costoTotal: r.costoBase * (1 + IMPUESTO)
        }));
    };

    const reservasAprobadas = procesarReservas(reservas);

    console.log("Resumen de reservas aprobadas:");
    reservasAprobadas.forEach(r => {
    console.log(`${r.nombre} | Actividad: ${r.actividad} | Total a pagar: $${r.costoTotal.toFixed(2)}`);
    });