const loadRanking =async()=> {
  const cardPlayers= document.getElementById("cardPlayers");
  try {
    const responser= await fetch("./data/players.json");
    if (!responser.ok){
      throw new Error ("Error");
      
    }
    const players= await responser.json();
    cardPlayers.innerHTML = '';
    const sortedPlayers= players.sort((a,b)=> b.mmr - a.mmr);

  sortedPlayers.forEach((player, index)=>{
    const nombre = player.nombre || "Jugador Anónimo";
    const rol = player.rol || "Sin rol";
    const mmr = player.mmr !== undefined ? player.mmr : "N/A";
    const card = document.createElement("div");
    card.classList.add("player-card");
    card.innerHTML= `
      <div style: border>
        <p>Nombre: ${nombre}</p>
        <p>Rol:${rol}</p>
        <p>MMR: ${mmr}</p>
      </div>`;

    cardPlayers.appendChild(card);
  });
  } catch(error){
    console.log("ERRROR")
  }
};

document.addEventListener('DOMContentLoaded', loadRanking);
