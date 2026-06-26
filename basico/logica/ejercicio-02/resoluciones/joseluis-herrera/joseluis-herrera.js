const armas = [
    {nombre: "AK47", tipo: "Rifle", municiones: 40, rareza: "Normal"},
    {nombre: "M1014", tipo: "Escopeta", municiones: 20, rareza: "Epica"},
    {nombre: "Lanzadardos", tipo: "Rifle", municiones: 100, rareza: "Legendaria"},
    {nombre: "MP40", tipo: "Subfusil Automaico", municiones: 30, rareza:"Mitica"},
    {nombre: "MP5", tipo: "Subfusil Automatico", municiones: 15, rareza: "Normal"}
]

//Filtrar Municiones
const filtrar_municiones = armas.filter(armas => armas.municiones >= 30)

const porRareza = armas.reduce((acumulador, armas) => {
    const rareza = armas.rareza;
    if(!acumulador[rareza]) acumulador[rareza] = [];
    acumulador[rareza].push(armas);
    return acumulador;
}, {});

console.log("=====RESUMEN====")
console.log("Las armas disponibles son las siguientes")
armas.forEach(armas => console.log(armas))



