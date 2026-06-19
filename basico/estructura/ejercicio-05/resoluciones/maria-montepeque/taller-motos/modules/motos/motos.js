// Módulo de motos — registro de motocicletas asociadas a un cliente

const motos = [
  {
    id: "moto-001",
    idCliente: "cli-001",
    marca: "Honda",
    modelo: "CB500F",
    anio: 2022,
    placa: "M123ABC",
    kilometraje: 18500,
  },
  {
    id: "moto-002",
    idCliente: "cli-002",
    marca: "Yamaha",
    modelo: "MT-07",
    anio: 2021,
    placa: "M456DEF",
    kilometraje: 32400,
  },
];

function obtenerMotoPorId(idMoto) {
  if (!idMoto) {
    return null;
  }
  return motos.find((moto) => moto.id === idMoto) || null;
}

function listarMotosDeCliente(idCliente) {
  return motos.filter((moto) => moto.idCliente === idCliente);
}

module.exports = { obtenerMotoPorId, listarMotosDeCliente };
