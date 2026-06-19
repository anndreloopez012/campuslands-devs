// Punto de entrada — muestra las órdenes de reparación válidas del taller

const { ordenes, validarOrden, construirResumenOrden } = require("./modules/ordenes/ordenes");

function mostrarOrdenes() {
  console.log("=== Órdenes de reparación del taller ===\n");

  ordenes.forEach((orden) => {
    const errores = validarOrden(orden);
    if (errores.length > 0) {
      console.log(`Orden ${orden.id} rechazada: ${errores.join("; ")}\n`);
      return;
    }
    console.log(construirResumenOrden(orden));
    console.log("");
  });

  const ordenInvalida = {
    id: "ord-999",
    idCliente: "cli-999",
    idMoto: "moto-001",
    descripcionFalla: "",
    estado: "volando",
    fechaIngreso: "2026-06-11",
    costoEstimadoQ: 100,
  };
  console.log("=== Caso límite: orden inválida ===");
  console.log(validarOrden(ordenInvalida).join("\n"));
}

mostrarOrdenes();
