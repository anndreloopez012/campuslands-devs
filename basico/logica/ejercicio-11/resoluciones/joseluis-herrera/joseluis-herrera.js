const reservas = [
  { nombre: "Carlos", destino: "Dubai", actividad: "paracaidismo", edad: 25, costoBase: 300 },
  { nombre: "Ana", destino: "Alpes", actividad: "senderismo", edad: 16, costoBase: 150 },
  { nombre: "Luis", destino: "Interlaken", actividad: "paracaidismo", edad: 17, costoBase: 350 },
  { nombre: "Sofia", destino: "Hawaii", actividad: "buceo", edad: 22, costoBase: 200 }
];

const reservasAprobadas = [];

for (let i = 0; i < reservas.length; i++) {
  let r = reservas[i];
  let esValida = true;

  if (r.actividad === "paracaidismo" && r.edad < 18) {
    esValida = false;
  }

  if (esValida) {
    r.costoTotal = r.costoBase + (r.costoBase * 0.12);
    reservasAprobadas.push(r);
  }
}

console.log("--- RESUMEN DE RESERVAS APROBADAS ---");
for (let i = 0; i < reservasAprobadas.length; i++) {
  let r = reservasAprobadas[i];
  console.log("Viajero: " + r.nombre + " | Destino: " + r.destino + " | Actividad: " + r.actividad + " | Costo Total: $" + r.costoTotal);
}