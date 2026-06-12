1. Guarda jugadores con rol, kills, deaths, assists, oro y objetivos.
2. Calcula KDA = (kills + assists) / max(deaths, 1).
3. Valida si el oro supera 12000.
4. Ordena por KDA.
5. Muestra alertas para roles con pocos objetivos.

``` javascript
const jugadores = [
  {
    id: 1,
    nombre: "Ragnar",
    rol: "Top",
    kills: 2,
    deaths: 1,
    assists: 3,
    oro: 1200,
    obje: "torre"
  },
  {
    id: 2,
    nombre: "Nyx",
    rol: "Jg",
    kills: 4,
    deaths: 2,
    assists: 5,
    oro: 980,
    obje: "drake"
  },
  {
    id: 3,
    nombre: "Vesper",
    rol: "Mid",
    kills: 6,
    deaths: 3,
    assists: 2,
    oro: 1500,
    obje: "baron"
  },
  {
    id: 4,
    nombre: "Echo",
    rol: "ADC",
    kills: 5,
    deaths: 4,
    assists: 6,
    oro: 1400,
    obje: "torre"
  },
  {
    id: 5,
    nombre: "Bram",
    rol: "Support",
    kills: 1,
    deaths: 2,
    assists: 12,
    oro: 700,
    obje: "ninguno"
  }
];

function kda(arreglo){
    let elementos = []
    let kdas = []
    let names = []
    let kda = 0
    arreglo.forEach(elemento=>{
        elementos.push(elemento)
    })
    elementos.forEach(item=>{
        kda = (item.kills + item.assists)/ Math.max(item.deaths, 1)
        kdas.push(kda)
        names.push(item.nombre)
        return console.log(`Id:${item.id}, Nombre: ${item.nombre}, KDA:${kda.toFixed(2)}`)
    })
}

kda(jugadores)
```