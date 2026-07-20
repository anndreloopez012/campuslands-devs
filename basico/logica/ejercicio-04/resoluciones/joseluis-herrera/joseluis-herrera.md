# Control de lineas MOBA

## Descripcion 
Creacion de un control sobre un juego moba en el cual hay un arreglo de jugadores, ademas de eso se puede observar el KDA de cada jugador de mayor a menor y que jugador tiene menos oro.


## Como pense en la solucion 
Para llegar a la solucion del problema me fui paso a paso y luego me puse a pensar cual seria la mejor manera para poder venir y hacer lo que me pedian asi que obte por hacer un recorrido en el array con un foreach y luego desestructurarlo para hacer lo que me pedian para al final luego ordenarlos con sort de menor a mayor y ademas de eso hice una condicion con if-else sobre si los jugadores tenian mas de 1200 de oro. 


## Codigo
let jugadores = [
  {nombre:"Gok", 
   rol:"Arquero", 
   kills:9, 
   deaths: 0,
   assists: 150, 
   oro: 100, 
   objetivos: "Bandera del rival"},
  {nombre:"Panke", 
   rol:"Espadachin", 
   kills:4, 
   deaths: 1,
   assists: 300, 
   oro: 1300, 
   objetivos: "Bandera del rival"},
  {nombre:"Bagi", 
   rol:"Mago", 
   kills:3, 
   deaths: 2,
   assists: 150, 
   oro: 100, 
   objetivos: "Bandera del rival"}
]

jugadores.sort ((a,b) => {
  let KDAa = (a.kills + a.assists) / Math.max(a.deaths, 1);
  let KDAb = (b.kills + b.assists) / Math.max(b.deaths, 1);
  
  return KDAb - KDAa; 
  }) 
jugadores.forEach((jugador) => {
  
  const KDA = (jugador.kills + jugador.assists) / Math.max(jugador.deaths, 1)
  
  console.log(`${jugador.nombre} ${KDA}`)
  
  let oro = jugador.oro
  
  if(oro >= 1200) {
    console.log("El oro del jugador es mayor a 1200", jugador.nombre)}
  else{ 
    console.log("El oro es menor de 1200", jugador.nombre)
  }
  
})


