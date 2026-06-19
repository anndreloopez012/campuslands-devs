// Módulo de clientes — registro y consulta de clientes del taller

const clientes = [
  {
    id: "cli-001",
    nombre: "Carlos Méndez",
    telefono: "5512-3344",
    correo: "carlos.mendez@example.com",
  },
  {
    id: "cli-002",
    nombre: "Ana López",
    telefono: "4477-8899",
    correo: "ana.lopez@example.com",
  },
];

function obtenerClientePorId(idCliente) {
  if (!idCliente) {
    return null;
  }
  return clientes.find((cliente) => cliente.id === idCliente) || null;
}

function listarClientes() {
  return clientes;
}

module.exports = { obtenerClientePorId, listarClientes };
