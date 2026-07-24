
// Lógica para validar la integridad de los precios del menú urbano
function validarPreciosPlatos(listaPlatos) {
    listaPlatos.forEach(plato => {
        // Caso límite y normal: validación de precios en cero o negativos
        if (plato.precioUSD <= 0) {
            throw new Error(`El plato "${plato.nombre}" tiene un precio inválido: $${plato.precioUSD}`);
        }
    });
    console.log("Validación de precios completada con éxito. Todos los montos son correctos.");
    return true;
}

module.exports = { validarPreciosPlatos };