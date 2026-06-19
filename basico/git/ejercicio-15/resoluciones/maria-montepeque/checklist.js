// Ejercicio 15 - Checklist final de flujo profesional
// Nombre: Maria Montepeque

const coleccionRopa = [
  { id: 1, nombre: "Camiseta básica", talla: "M", precio: 85, enStock: true },
  { id: 2, nombre: "Pantalón de mezclilla", talla: "32", precio: 320, enStock: true },
  { id: 3, nombre: "Vestido floral", talla: "S", precio: 250, enStock: false },
  { id: 4, nombre: "Sudadera con capucha", talla: "L", precio: 180, enStock: true },
];

function verificarEntregaProyecto(prendas) {
  const checklist = {
    tieneNombre: false,
    tienePrecio: false,
    tieneTalla: false,
    tieneStock: false,
    totalPrendas: 0,
    prendasDisponibles: 0,
    valorInventario: 0,
    errores: [],
  };

  if (!prendas || prendas.length === 0) {
    checklist.errores.push("La colección está vacía o no fue proporcionada.");
    return checklist;
  }

  checklist.totalPrendas = prendas.length;

  for (const prenda of prendas) {
    if (!prenda.nombre || prenda.nombre.trim() === "") {
      checklist.errores.push(`Prenda ID ${prenda.id} no tiene nombre.`);
    } else {
      checklist.tieneNombre = true;
    }

    if (prenda.precio === null || prenda.precio === undefined || prenda.precio < 0) {
      checklist.errores.push(`Prenda ID ${prenda.id} tiene precio inválido: ${prenda.precio}`);
    } else {
      checklist.tienePrecio = true;
    }

    if (!prenda.talla || prenda.talla.trim() === "") {
      checklist.errores.push(`Prenda ID ${prenda.id} no tiene talla definida.`);
    } else {
      checklist.tieneTalla = true;
    }

    if (typeof prenda.enStock !== "boolean") {
      checklist.errores.push(`Prenda ID ${prenda.id} no tiene estado de stock válido.`);
    } else {
      checklist.tieneStock = true;
    }

    if (prenda.enStock === true) {
      checklist.prendasDisponibles += 1;
      checklist.valorInventario += prenda.precio || 0;
    }
  }

  return checklist;
}

function mostrarResultado(etiqueta, resultado) {
  console.log(`\n=== ${etiqueta} ===`);
  console.log(`Total de prendas:       ${resultado.totalPrendas}`);
  console.log(`Prendas disponibles:    ${resultado.prendasDisponibles}`);
  console.log(`Valor en inventario:    Q${resultado.valorInventario.toFixed(2)}`);
  console.log(`Nombre presente:        ${resultado.tieneNombre}`);
  console.log(`Precio presente:        ${resultado.tienePrecio}`);
  console.log(`Talla presente:         ${resultado.tieneTalla}`);
  console.log(`Stock presente:         ${resultado.tieneStock}`);

  if (resultado.errores.length > 0) {
    console.log("Errores encontrados:");
    for (const error of resultado.errores) {
      console.log(`  - ${error}`);
    }
  } else {
    console.log("Sin errores. Colección lista para entrega.");
  }
}

// Caso 1: colección normal con datos completos
const resultadoNormal = verificarEntregaProyecto(coleccionRopa);
mostrarResultado("Caso normal - colección completa", resultadoNormal);

// Caso 2: prenda con precio en cero y sin talla (caso límite)
const coleccionLimite = [
  { id: 10, nombre: "Prenda sin talla", talla: "", precio: 0, enStock: true },
  { id: 11, nombre: "Prenda con precio negativo", talla: "XL", precio: -50, enStock: false },
];
const resultadoLimite = verificarEntregaProyecto(coleccionLimite);
mostrarResultado("Caso límite - datos incompletos o inválidos", resultadoLimite);

// Caso 3: colección vacía
const resultadoVacio = verificarEntregaProyecto([]);
mostrarResultado("Caso vacío - sin prendas", resultadoVacio);
