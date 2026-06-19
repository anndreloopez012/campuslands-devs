// Simulación de modelo de datos para Órdenes de Servicio
class OrdenModel {
  constructor() {
    this.fields = {
      id: "UUID / Auto-increment",
      numero_orden: "String (Ej: ORD-2026-001)",
      cliente_id: "UUID (Relación -> Clientes)",
      moto_id: "UUID (Relación -> Motos)",
      falla_reportada: "String (Descripción del cliente)",
      diagnostico_mecanico: "String",
      estado: "Enum ['Pendiente', 'En Reparacion', 'Listo', 'Entregado']",
      total_presupuesto: "Decimal",
      fecha_ingreso: "Date",
      fecha_entrega: "Date"
    };
  }
}

module.exports = new OrdenModel();