# solucion.
---
 * Estudiante: Estiben Ixen
 * Reto: Gestor de personajes RPG
  
---

# Explicación del razonamiento:


   * 1. Definí un arreglo de objetos para representar a la 'party' de personajes.
   * 2. Utilicé funciones para separar las responsabilidades: una calcula el poder, 
   otra busca mejoras de estadísticas y una principal genera el reporte completo.
   * 3. Se incluyeron los casos del ejemplo (Mago) y se validaron las reglas del negocio.


# 1. Definición de la party de personajes

const party = [
    { nombre: "Gandalf", clase: "Mago", nivel: 12, ataque: 35, defensa: 10 }, // Caso ejemplo: Poder 69
    { nombre: "Aragorn", clase: "Guerrero", nivel: 15, ataque: 40, defensa: 30 }, // Caso fuerte
    { nombre: "Frodo", clase: "Picaro", nivel: 3, ataque: 12, defensa: 8 },  // Caso débil: Poder 26
    { nombre: "Legolas", clase: "Arquero", nivel: 10, ataque: 20, defensa: 14 } // Caso límite: Poder 54
];


# 2. Función para calcular el poder total
function calcularPoder(personaje) {
 
     return (personaje.nivel * 2) + personaje.ataque + personaje.defensa;
}

function sugerirMejora(personaje) {
    if (personaje.ataque < personaje.defensa) {
        return "Sugerencia: Entrenar ATAQUE";
    } else if (personaje.defensa < personaje.ataque) {
        return "Sugerencia: Entrenar DEFENSA";
    } else {
        return "Sugerencia: Entrenar ambas por igual";
    }
}

# 5. Función para procesar y mostrar el reporte de la party

function generarReporteParty(listaPersonajes) {
    console.log("=== REPORTE DE LA PARTY RPG ===");
    
    listaPersonajes.forEach(personaje => {
        const poderTotal = calcularPoder(personaje);
        const esDebil = poderTotal < 60; // 3. Filtrar menores a 60
        
        console.log(`\n• [${personaje.clase}] ${personaje.nombre}`);
        console.log(`  Nivel: ${personaje.nivel} | Ataque: ${personaje.ataque} | Defensa: ${personaje.defensa}`);
        console.log(`  Poder Total: ${poderTotal}`);
        
        if (esDebil) {
            console.log(`   ESTADO: DÉBIL (Poder menor a 60)`);
            console.log(`   ${sugerirMejora(personaje)}`);
        } else {
            console.log(`   ESTADO: LISTO PARA LA MAZMORRA`);
        }
    });
}

// Ejecución de la validación
generarReporteParty(party);

# Evidencia de comandos echos en la terminal

 705  git init
  706  git pull
  707  git brach
  708  git branch
  709  touch basico/logica/ejercicio-03/resoluciones/estiben-ixen.md
  710  pull dev
  711  git pull dev
  712  git remote -v
  713  git branch
  714  git brach
  715  git branch
  716  git branch -a
  717  git checkout dev
  718  git fetch
  719  git status
  720  git brach
  721  git branch
  722  git init
  723  git pull
  724  git init
  725  git pull 
  726  git branch -a
  727  git status
  728  cd basico
  729  cd logica
  730  cd ejercicio-03
  731  cd resoluciones
  732  touch estibenixen.md
  733   cd ..
  734  git status
  735  git add .
  736  git status
  737  history

 # commit
    camper@campus-H610M-K-V2:~/Documentos/shen/ejercicio/campuslands-devs-1$ git commit -m ":sparkles :feat ejercicio tres de logica"
    [estibenixen-ejercicio-03 0c67ef5] :sparkles :feat ejercicio tres de logica
    1 file changed, 102 insertions(+)
    create mode 100644 basico/logica/ejercicio-03/resoluciones/estibenixen.md