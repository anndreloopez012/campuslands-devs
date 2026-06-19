// Módulo de órdenes — crea y consulta órdenes de reparación

const { obtenerClientePorId } = require("../clientes/clientes");
const { obtenerMotoPorId } = require("../motos/motos");

const ESTADOS_VALIDOS = ["recibida", "en-diagnostico", "en-reparacion", "lista", "entregada"];

const ordenes = [
  {
    id: "ord-001",
    idCliente: "cli-001",
    idMoto: "moto-001",
    descripcionFalla: "Ruido en la cadena y frenos traseros débiles",
    estado: "en-reparacion",
    fechaIngreso: "2026-06-08",
    costoEstimadoQ: 850,
  },
  {
    id: "ord-002",
    idCliente: "cli-002",
    idMoto: "moto-002",
    descripcionFalla: "Servicio mayor de 32,000 km",
    estado: "recibida",
    fechaIngreso: "2026-06-10",
    costoEstimadoQ: 0,
  },
];

function validarOrden(orden) {
  const errores = [];
  if (!obtenerClientePorId(orden.idCliente)) {
    errores.push(`El cliente ${orden.idCliente} no existe`);
  }
  if (!obtenerMotoPorId(orden.idMoto)) {
    errores.push(`La moto ${orden.idMoto} no existe`);
  }
  if (!ESTADOS_VALIDOS.includes(orden.estado)) {
    errores.push(`Estado inválido: ${orden.estado}`);
  }
  if (!orden.descripcionFalla || orden.descripcionFalla.trim() === "") {
    errores.push("La descripción de la falla no puede estar vacía");
  }
  return errores;
}

function construirResumenOrden(orden) {
  const cliente = obtenerClientePorId(orden.idCliente);
  const moto = obtenerMotoPorId(orden.idMoto);
  const costoTexto = orden.costoEstimadoQ > 0 ? `Q${orden.costoEstimadoQ}` : "Pendiente de diagnóstico";
  return [
    `Orden ${orden.id} [${orden.estado}]`,
    `  Cliente: ${cliente.nombre} (${cliente.telefono})`,
    `  Moto: ${moto.marca} ${moto.modelo} ${moto.anio} — placa ${moto.placa}`,
    `  Falla: ${orden.descripcionFalla}`,
    `  Ingreso: ${orden.fechaIngreso} | Costo estimado: ${costoTexto}`,
  ].join("\n");
}

function listarOrdenesValidas() {
  return ordenes.filter((orden) => validarOrden(orden).length === 0);
}

module.exports = { ordenes, validarOrden, construirResumenOrden, listarOrdenesValidas };
