const reservas = [
  { nombre: "Laura", destino: "Interlaken", actividad: "paracaidismo", edad: 25, costoBase: 1000 },
  { nombre: "Mateo", destino: "Dubai", actividad: "paracaidismo", edad: 17, costoBase: 1500 },
  { nombre: "Sofía", destino: "Costa Rica", actividad: "bungee jumping", edad: 16, costoBase: 800 },
  { nombre: "Carlos", destino: "Queenstown", actividad: "paracaidismo", edad: 30, costoBase: 1200 }
];

// Función principal para procesar la bitácora
function procesarBitacora(listaReservas) {
  // Validar edad mínima y filtrar reservas no válidas
  const reservasValidas = listaReservas.filter(reserva => {
    // Si la actividad es paracaidismo, la edad debe ser mayor o igual a 18
    if (reserva.actividad.toLowerCase() === 'paracaidismo' && reserva.edad < 18) {
      return false;
    }
    return true;
  });

  // Agregamos impuesto del 12% y generamoa resumen
  const resumenFinal = reservasValidas.map(reserva => {
    const impuesto = reserva.costoBase * 0.12;
    const costoTotal = reserva.costoBase + impuesto;
    
    return {
      viajero: reserva.nombre,
      destino: reserva.destino,
      actividad: reserva.actividad,
      costoTotal: costoTotal
    };
  });

  return resumenFinal;
}

const resultado = procesarBitacora(reservas);
console.log(resultado);