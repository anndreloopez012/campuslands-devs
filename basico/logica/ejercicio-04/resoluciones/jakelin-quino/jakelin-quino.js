// Datos de jugadores: nombre, rol, kills, deaths, assists, oro, objetivos
const jugadores = [
  { nombre: "Carlos", rol: "top", kills: 5, deaths: 3, assists: 7, oro: 10500, objetivos: 2 },
  { nombre: "Luis", rol: "jungla", kills: 8, deaths: 2, assists: 10, oro: 13200, objetivos: 4 },
  { nombre: "Ana", rol: "mid", kills: 12, deaths: 4, assists: 6, oro: 14800, objetivos: 1 },
  { nombre: "Marta", rol: "ADC", kills: 9, deaths: 5, assists: 3, oro: 12500, objetivos: 0 },
  { nombre: "Jorge", rol: "soporte", kills: 1, deaths: 6, assists: 15, oro: 8500, objetivos: 3 }
];

// Calcular KDA, evaluar oro, ordenar por KDA
const resultado = jugadores.map(j => ({
  ...j,
  kda: (j.kills + j.assists) / Math.max(j.deaths, 1), // Evita división por cero
  oroAlto: j.oro > 12000
})).sort((a, b) => b.kda - a.kda); // Orden descendente

// Filtrar alertas: objetivos < 2
const alertas = resultado.filter(j => j.objetivos < 2);

// Mostrar resultados
console.log("Ranking:", resultado.map(j => `${j.nombre} KDA:${j.kda.toFixed(2)}`));
console.log("Oro alto:", resultado.filter(j => j.oroAlto).map(j => j.nombre));
console.log("Alertas:", alertas.length ? alertas.map(j => `${j.nombre} (${j.objetivos} obj)`) : "✅ Todos ok");