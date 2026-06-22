/* Gestor de Party RPG - Sergio Ajú*/

const party = [
    { nombre: "Aldric", clase: "Guerrero", nivel: 10, ataque: 40, defensa: 30 },
    { nombre: "Lyra", clase: "Maga", nivel: 12, ataque: 35, defensa: 10 },
    { nombre: "Finn", clase: "Arquero", nivel: 4, ataque: 18, defensa: 12 },
    { nombre: "Sera", clase: "Clérigo", nivel: 5, ataque: 10, defensa: 20 },
    { nombre: "Kael", clase: "Asesino", nivel: 3, ataque: 14, defensa: 8 },
];

const UMBRAL_PODER = 60;

const calcularPoder = (p) => (p.nivel * 2) + p.ataque + p.defensa;

const obtenerRecomendacion = (p) => 
    p.ataque < p.defensa ? "Potenciar ATAQUE" : "Potenciar DEFENSA";

const ejecutarReporte = (equipo) => {
    console.log("--- Reporte de Preparación para Mazmorra ---");
    
    equipo.forEach(personaje => {
        const poder = calcularPoder(personaje);
        const esApto = poder >= UMBRAL_PODER;
        
        console.log(`> ${personaje.nombre} [${personaje.clase}]: ${poder} pts - ${esApto ? "LISTO" : "NECESITA ENTRENAR"}`);
        
        if (!esApto) {
            console.log(`   * Sugerencia: ${obtenerRecomendacion(personaje)}`);
        }
    });
};

ejecutarReporte(party);