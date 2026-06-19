class MotoModel {
  constructor() {
    this.fields = {
      id: "UUID / Auto-increment",
      placa: "String (Único / Requerido)",
      marca: "String (Requerido)",
      modelo: "String (Requerido)",
      anio: "Number",
      color: "String",
      vin: "String (Número de chasis)",
      cliente_id: "UUID (Relación Key -> Clientes.id)" 
    };
  }
}

module.exports = new MotoModel();