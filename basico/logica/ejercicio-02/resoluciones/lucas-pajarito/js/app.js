// Importamos subiendo un nivel (..) y entrando a data
import { armas } from '../data/armas.js';

// Pasos 1 y 2: Filtrar por munición (>= 30) y por tipos específicos
const armasFiltradas = armas.filter(arma => {
    const municionSuficiente = arma.municion >= 30;
    
    // Pasamos a minúsculas para evitar errores si está escrito como "Rifle" o "rifle"
    const tipo = arma.tipos.toLowerCase();
    const esTipoValido = tipo.includes('rifle') || tipo.includes('pistola') || tipo.includes('francotirador');

    return municionSuficiente && esTipoValido;
});

// Paso 3: Crear un nuevo arreglo añadiendo la propiedad "recomendada"
const armasProcesadas = armasFiltradas.map(arma => {
    const esRecomendada = arma.rareza === "rara" || arma.rareza === "épica";
    
    return {
        ...arma, // Copiamos todos los datos originales del arma
        recomendada: esRecomendada ? "Sí ⭐" : "No"
    };
});

// Paso 4: Imprimir en la tabla HTML
const cuerpoTabla = document.getElementById('cuerpo-tabla');

// Recorremos el resultado final y creamos las filas
armasProcesadas.forEach(arma => {
    const fila = document.createElement('tr');
    
    fila.innerHTML = `
        <td>${arma.nombre}</td>
        <td>${arma.tipos}</td>
        <td>${arma.rareza}</td>
        <td>${arma.municion}</td>
        <td>${arma.recomendada}</td>
    `;
    
    cuerpoTabla.appendChild(fila);
});