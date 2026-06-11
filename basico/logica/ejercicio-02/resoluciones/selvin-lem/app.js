document.addEventListener("DOMContentLoaded", () => {
    cargarYProcesarArsenal();
});

/**
 * Trae los datos desde el archivo JSON externo, filtra por munición y clasifica las armas.
 */
async function cargarYProcesarArsenal() {
    try {
        const respuesta = await fetch('armas.json');
        const armas = await respuesta.json();

        const armasAptas = armas.filter(arma => arma.municion >= 30);

        const arsenalClasificado = {
            rifles: armasAptas.filter(arma => arma.tipo === "rifle"),
            pistolas: armasAptas.filter(arma => arma.tipo === "pistola"),
            francotiradores: armasAptas.filter(arma => arma.tipo === "francotirador")
        };

        renderizarResumen(arsenalClasificado);

    } catch (error) {
        console.error("Error al cargar el arsenal de armas:", error);
    }
}

/**
 * Toma las armas ya clasificadas y genera las etiquetas HTML para mostrarlas en la interfaz.
 */
function renderizarResumen(arsenal) {
    const contenedor = document.getElementById("contenedor-resumen");
    contenedor.innerHTML = ""; 

    for (const tipo in arsenal) {
        const listaArmas = arsenal[tipo];
        
        if (listaArmas.length === 0) continue;

        const bloque = document.createElement("div");
        bloque.className = "categoria-bloque";

        const titulo = document.createElement("h3");
        titulo.className = "categoria-titulo";
        titulo.textContent = tipo;
        bloque.appendChild(titulo);

        const lista = document.createElement("ul");

        listaArmas.forEach(arma => {
            const item = document.createElement("li");
            const esRecomendada = arma.rareza === "rara" || arma.rareza === "epica";
            
            if (esRecomendada) {
                item.className = "recomendada";
                item.innerHTML = `<span>${arma.nombre} (Balas: ${arma.municion}) - <em>${arma.rareza}</em></span> <span class="badge-recomendado">Recomendado</span>`;
            } else {
                item.innerHTML = `<span>${arma.nombre} (Balas: ${arma.municion}) - <em>${arma.rareza}</em></span>`;
            }
            
            lista.appendChild(item);
        });

        bloque.appendChild(lista);
        contenedor.appendChild(bloque);
    }
}