async function obtenerAutos(){
    const respuesta= await fetch("../data/autos.json");
    return await respuesta.json();
}

export{ obtenerAutos};