
// Importamos los datos
const catalogo = require('../data/autos.json');

// Función para validar que los autos tengan un precio real
function validarCatalogo(lista) {
    return lista.filter(auto => {
        if (auto.precio > 0) {
            return true;
        } else {
            console.log(`Error: El auto ${auto.modelo} tiene un precio inválido.`);
            return false;
        }
    });
}

// Ejecutamos la validación
console.log("Catálogo validado:", validarCatalogo(catalogo));