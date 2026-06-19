// Simulación de modelo de datos / Esquema de Clientes
class ClienteModel {
  constructor() {
    this.fields = {
      id: "UUID / Auto-increment",
      nombre: "String (Requerido)",
      telefono: "String (Requerido)",
      email: "String (Opcional)",
      direccion: "String (Opcional)",
      fecha_registro: "Date"
    };
  }
}

module.exports = new ClienteModel();