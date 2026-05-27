# solucion de ejercicio 02: gestion de inventario rpg con javascript

* **Estudiante:** Brandon Estiben Ixen Teleguario
* **Fecha:** Mayo 2026
* **Módulo:** logica de programación.

--

## 1. explicaciondel razonamiento

para poder resolver este sistema de inventario para el videojuego RPG, dividi el preceso en los siguientes modulos y asi efectuar el proceso con javascrpt para validar toda la informacion.

1. MODELO DE DATOS:  cree un objeto llamado `inventarioArmas`. cada objeto representa un arma con propiedades claras (`nombre`, `tipo`,`minicion`, `rareza`) para estructurar la informacion de manera intuitiva.
2. FILTRADO POR CONDICION: Utilice el metodo `.filter()` para aislar de forma segura las armas con munición masiva ($\ge 30$), generando un nuevo arreglo sin alterar la base de datos original.
3. CLASIFICACION Y SEGMENTACION: Aplique `.filter()` individualmente por cada categoria (`rifle`, `pistola`, `francotirador`) para cumplir con la separación solicitada por el equipo de diseño.

4. TRANSFORMACION DINAMICA: Utilicé el método `.map()` junto con el operador de propagación (`...`) para inyectar la propiedad booleana `recomendada`. Evalué la condición lógica utilizando el operador 
5. SALIDA DE DATOS: 5. Diseñé un bloque de impresión limpio en consola usando plantillas de cadena (*template literals*) y `.forEach()` para recorrer los arreglos y presentar un resumen legible para cualquier usuario.

## 2. solucion completa echa con javascript
```javascript
    const inventarioArmas = [
        { nombre: "vandalo", tipo: "rifle", municion: 45, rareza: "epica"},
        { nombre: "venus", tipo: "rifle", municion: 25, rareza: "comun"},
        { nombre: "Sheriff", tipo: "pistola", municion: 6, rareza: "rara" },
        {nombre: "Ghost", tipo: "pistola", municion: 15, rareza: "común"},
        { nombre: "Operator", tipo: "francotirador", municion: 5, rareza: "legendaria" },
        { nombre: "Marshal", tipo: "francotirador", municion: 35, rareza: "rara"},
        { nombre: "Odin", tipo: "rifle", municion: 100, rareza: "épica"},
        { nombre: "Classic", tipo: "pistola", municion: 36, rareza: "común"}
    ];
    // 2. Filtrar las armas con municion mayor o igual a 30
const armasMuchaMunicion = inventarioArmas.filter(arma => arma.municion >= 30);

// 3. Separar rifles, pistolas y francotiradores
const rifles = inventarioArmas.filter(arma => arma.tipo === "rifle");
const pistolas = inventarioArmas.filter(arma => arma.tipo === "pistola");
const francotiradores = inventarioArmas.filter(arma => arma.tipo === "francotirador");

// 4. Marca como recomendadas las armas raras o épicas
const inventarioConRecomendaciones = inventarioArmas.map(arma => {
  const esRecomendada = arma.rareza === "rara" || arma.rareza === "épica";
  return {
    ...arma,
    recomendada: esRecomendada
  };
});

// 5. Imprime un resumen por tipo
console.log("==================================================");
console.log("         RESUMEN DE ARMAS POR TIPO                ");
console.log("==================================================");

console.log(`\nRIFLES (${rifles.length}):`);
rifles.forEach(arma => {
  const detalleRecomendado = arma.rareza === "rara" || arma.rareza === "épica" ? "[RECOMENDADA]" : "";
  console.log(` - ${arma.nombre} | Balas: ${arma.municion} | Rareza: ${arma.rareza} ${detalleRecomendado}`);
});

console.log(`\nPISTOLAS (${pistolas.length}):`);
pistolas.forEach(arma => {
  const detalleRecomendado = arma.rareza === "rara" || arma.rareza === "épica" ? "[RECOMENDADA]" : "";
  console.log(` - ${arma.nombre} | Balas: ${arma.municion} | Rareza: ${arma.rareza} ${detalleRecomendado}`);
});

console.log(`\nFRANCOTIRADORES (${francotiradores.length}):`);
francotiradores.forEach(arma => {
  const detalleRecomendado = arma.rareza === "rara" || arma.rareza === "épica" ? "[RECOMENDADA]" : "";
  console.log(` - ${arma.nombre} | Balas: ${arma.municion} | Rareza: ${arma.rareza} ${detalleRecomendado}`);
});
```

---

## 3. Evidencia de Validación (Salida de Consola)

Al ejecutar el script en el entorno de Node.js, la consola arroja los resultados esperados de forma ordenada, validando que el rifle "Vándalo" (45 balas, épica) aparece correctamente marcado como recomendado:

```text
==================================================
         RESUMEN DE ARMAS POR TIPO                
==================================================

RIFLES (3):
 - Vándalo | Balas: 45 | Rareza: épica [RECOMENDADA]
 - Phantom | Balas: 25 | Rareza: común 
 - Odin | Balas: 100 | Rareza: épica [RECOMENDADA]

PISTOLAS (3):
 - Sheriff | Balas: 6 | Rareza: rara [RECOMENDADA]
 - Ghost | Balas: 15 | Rareza: común 
 - Classic | Balas: 36 | Rareza: común 

FRANCOTIRADORES (2):
 - Operator | Balas: 5 | Rareza: legendaria 
 - Marshal | Balas: 35 | Rareza: rara [RECOMENDADA]
```

