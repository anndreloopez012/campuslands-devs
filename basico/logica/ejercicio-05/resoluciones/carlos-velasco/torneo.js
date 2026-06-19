const equipos = [
    {
        nombre: "rojos",
        integrantes: 11,
        golesFavor: 3,
        golesContra: 1,
        victorias: 2,
        empates: 0,
        derrotas: 0
    },
    {
        nombre: "verde",
        integrantes: 11,
        golesFavor: 6,
        golesContra: 2,
        victorias: 1,
        empates: 1,
        derrotas: 0
    }
];

const calcular_punto = (arr) => {
    if (!arr || arr.length === 0) return "no hay equipos";
    
    return arr
        .map(e => ({
            ...e,
            puntos: (e.victorias * 3) + e.empates,
            difGoles: e.golesFavor - e.golesContra
        }))
        .sort((a, b) => b.puntos - a.puntos || b.difGoles - a.difGoles)
        .map((e, index) => ({ posicion: index + 1, ...e }));
};

console.table(calcular_punto(equipos));