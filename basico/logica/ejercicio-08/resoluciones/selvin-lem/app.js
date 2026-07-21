function clasificarExclusividad(unidades) {
  return unidades < 500 ? "extrema" : "estandar";
}

function catalogarHiperdeportivos(autos) {
  const filtrados = autos
    .filter((auto) => auto.ceroACien < 3)
    .map((auto) => ({ ...auto, exclusividad: clasificarExclusividad(auto.unidades) }));

  const precioPromedio =
    filtrados.length === 0
      ? 0
      : filtrados.reduce((suma, auto) => suma + auto.precioUSD, 0) / filtrados.length;

  const top3PorAceleracion = [...filtrados]
    .sort((a, b) => a.ceroACien - b.ceroACien)
    .slice(0, 3);

  return { filtrados, precioPromedio, top3PorAceleracion };
}

// Caso normal
const autos = [
  { 
    marca: "Bugatti", 
    modelo: "Chiron", 
    ceroACien: 2.4, 
    precioUSD: 3000000, 
    unidades: 500 
},
  { 
    marca: "Koenigsegg", 
    modelo: "Jesko", 
    ceroACien: 2.5, 
    precioUSD: 3400000, 
    unidades: 125 
  },
  { 
    marca: "Ferrari", 
    modelo: "SF90", 
    ceroACien: 2.5, 
    precioUSD: 625000, 
    unidades: 3000 
  },
  { 
    marca: "Toyota", 
    modelo: "Corolla", 
    ceroACien: 9.0, 
    precioUSD: 25000, 
    unidades: 100000 
  },
];

console.log(catalogarHiperdeportivos(autos));

// Caso límite: ningún auto cumple el filtro
const autosLimite = [
  { 
    marca: "Nissan", 
    modelo: "Versa", 
    ceroACien: 10.5, 
    precioUSD: 18000, 
    unidades: 50000 
  },
];

console.log(catalogarHiperdeportivos(autosLimite));