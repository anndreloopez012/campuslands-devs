const equipo = [
    {
        equipo: "Brazil",
        victorias: 5,
        derrotas: 1,
        empates: 2, 
        golesFavor: 18,
        golesContra: 9
    },
    {
        equipo: "Arrgentina",
        victorias: 3,
        derrotas: 2,
        empates: 3, 
        golesFavor: 8,
        golesContra: 9
    },
    {
        equipo: "Mexico",
        victorias: 6,
        derrotas: 0,
        empates: 2, 
        golesFavor: 15,
        golesContra: 6
    }
]

const puntos = (e) => e.victorias * 3 + e.empates;
const dif = (e) => e.golesFavor - e.golesContra;

const base = equipo.map(e => ({ nombre: e.equipo, puntos: puntos(e), dif: dif(e), golesFavor: e.golesFavor, golesContra: e.golesContra }));

const ordenPorPuntos = [...base].sort((a, b) => b.puntos - a.puntos);
console.log("Por puntos:", ordenPorPuntos.map(x => ({ nombre: x.nombre, puntos: x.puntos })));

const ordenPorDif = [...base].sort((a, b) => b.dif - a.dif);
console.log("Por diferencia:", ordenPorDif.map(x => ({ nombre: x.nombre, dif: x.dif })));
