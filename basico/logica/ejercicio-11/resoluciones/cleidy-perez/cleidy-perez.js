// 1. Datos iniciales: Lista de reservas de viajeros
const reservas = [
  { nombre: "Laura", destino: "Mendoza", actividad: "paracaidismo", edad: 25, costoBase: 150 },
  { nombre: "Carlos", destino: "Bariloche", actividad: "paracaidismo", edad: 16, costoBase: 120 }, // No cumple edad
  { nombre: "Ana", destino: "Salta", actividad: "trekking", edad: 17, costoBase: 80 },
  { nombre: "Mateo", destino: "Córdoba", actividad: "paracaidismo", edad: 18, costoBase: 200 }
];

// Constantes del sistema
const IMPUESTO = 0.12; // 12% de impuesto

// 2, 3 y 4. Filtrar reservas válidas y calcular el costo total con impuestos
const reservasAprobadas = reservas
  // Filtrar: si es paracaidismo, la edad debe ser >= 18
  .filter(reserva => {
    if (reserva.actividad.toLowerCase() === "paracaidismo") {
      return reserva.edad >= 18;
    }
    return true; // Otras actividades se aprueban directamente
  })
  // Transformar: agregar el costo final calculado con el impuesto del 12%
  .map(reserva => {
    const costoTotal = reserva.costoBase * (1 + IMPUESTO);
    return {
      ...reserva,
      costoTotal: Number(costoTotal.toFixed(2))
    };
  });

// 5. Generar resumen de reservas aprobadas
console.log("=== RESUMEN DE RESERVAS APROBADAS ===");
console.table(reservasAprobadas);