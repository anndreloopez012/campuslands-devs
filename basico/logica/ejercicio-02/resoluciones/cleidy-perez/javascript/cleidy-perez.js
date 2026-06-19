9const armas = [
    {
        nombre: "AK-47",
        tipo: "Rifle de asalto",
        municion: 45,
        rareza: "Común"
    },
    {
        nombre: "AWM",
        tipo: "Rifle de francotirador",
        municion: 34,
        rareza: "Épica"
    },
    {
        nombre: "UMP45",
        tipo: "Subfusil",
        municion: 6,
        rareza: "Poco común"
    },
    {
        nombre: "SPAS-12",
        tipo: "Escopeta",
        municion: 55,
        rareza: "Rara"
    }
];

const armasMunicion= armas.filter(
    arma=>arma.municion >=30
);
console.log("municiones mayor e igual de 30:");
console.log(armasMunicion)

const rifles = armas.filter(arma=>arma.tipo=== "rifles");
const pistola= armas.filter(arma=>arma.tipo==="pistola");
const francotiradores= armas.filter(arma=>arma.tipo==="francotiradores");

console.log("Rifles;", rifles);
console.log("Pistolas:", pistola);
console.log("Francotiradores: ",  francotiradores);

const recomendadas = armas.map(arma => ({
    ...arma,
    recomendada:
    arma.rareza=== "Rara" || arma.rareza ==="Épica"
}))

console.log("Armas recomendadas: ", recomendadas);

const resumen =armas. reduce ((armas, arma)=>{
    a[arma.tipo]= (a[arma.tip] || 0)+1;
    return a;
}, {})

console.log("Resumen por tipo: ");
for (const tipo in resumen){
    console.log(`${tipo}: ${resumen[tipo]} arma(s)`)
}