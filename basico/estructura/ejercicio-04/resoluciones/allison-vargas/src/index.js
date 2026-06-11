import autosData from '../data/autos.json' assert { type: 'json' };
import { mostrarCatalogo } from './visualizacion.js';

function inicializarApp() {
    // Caso normal
    mostrarCatalogo(autosData);

    // Caso límite (arreglo vacío) para cumplir con las reglas de validación
    console.log("\n--- Probando caso límite (Catálogo vacío) ---");
    const catalogoVacio = [];
    mostrarCatalogo(catalogoVacio);
}

inicializarApp();