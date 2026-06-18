const escuadrasparticipantes = [
    {nombre: 'nova', bajas: 8, posision: 1, revividos: 2 },
    {nombre: 'alfa', bajas: 6, posision: 12, revividos: 2 },
    {nombre: 'omega', bajas: 1, posision: 10, revividos: 2 },
    {nombre: 'oraculo', bajas: 8, posision: 2, revividos: 2 },
    {nombre: 'espectro', bajas: 5, posision: 6, revividos: 2 },
    
];

function calcularpuntajetotal(escuadra){
    const puntosporbajas = escuadra.bajas * 3;

    let puntosporposiscion =0;

    if (escuadra.posision === 1){
        puntosporposiscion = 20;
    } else if (escuadra.posision === 2){
        puntosporposiscion = 14;
    } else if (escuadra.posision === 6){
        puntosporposiscion = 1;
    }else if (escuadra.posision === 12){
        puntosporposiscion = 30;
    }else{
        puntosporposiscion = 4;
    };
    return puntosporbajas + puntosporposiscion;
    

}

function generarRankingTorneo(listaescuadras){

    const escuadraConPuntaje = listaescuadras.map(escuadra =>{
        return{
            nombre: escuadra.nombre,

            puntosTotales: calcularpuntajetotal(escuadra)
        };
    });

    escuadraConPuntaje.sort((a,b) => b.puntosTotales - a.puntosTotales)

    console.log(" ====RANKING FINAL DEL TORMEO =======");
    escuadraConPuntaje.forEach((escuadra, indice) => {
    
        const posisionRanking = indice +1;
        console.log(`${posisionRanking}. ${escuadra.nombre} - ${escuadra.puntosTotales} pts.`);

    });
}

generarRankingTorneo(escuadrasparticipantes);


