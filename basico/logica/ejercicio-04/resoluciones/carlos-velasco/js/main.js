const jugadores = [
    { nombre: "Carlos", rol: "Top", kills: 5, deaths: 2, assists: 10, oro: 13000, objetivos: 2 },
    { nombre: "Ana", rol: "Jungla", kills: 3, deaths: 5, assists: 8, oro: 11000, objetivos: 10 },
    { nombre: "Pedro", rol: "Mid", kills: 8, deaths: 1, assists: 4, oro: 14000, objetivos: 3 }
];

const evaluar = (pj) => {
    pj.map(p => ({...p, kda: (p.kills + p.assists) / Math.max(p.deaths, 1)}))
      .sort((a, b) => b.kda - a.kda)
      .forEach(p => {
        console.log(`${p.nombre}: KDA ${p.kda.toFixed(2)} | Oro: ${p.oro > 12000 ? 'fuerte' : 'baja'}`);
        if (p.objetivos < 5) console.warn(`¡Alerta! Rol ${p.rol} bajo en objetivos.`);
    });
};

evaluar(jugadores);