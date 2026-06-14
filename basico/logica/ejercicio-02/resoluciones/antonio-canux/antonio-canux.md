# Resolución: Inventario Táctico de Shooter
**Estudiante:** Marco Antonio Canux Raquec
**Ruta del archivo:** `basico/logica/ejercicio-02/resoluciones/antonio-canux/antonio-canux.md`

## 1. Explicación del Razonamiento

Para resolver este problema, dividí la lógica en cuatro fases conceptuales:
1. **Modelado de Datos:** Diseñar un arreglo de objetos donde cada arma tenga propiedades claras (`nombre`, `tipo`, `municion`, `rareza`), simulando la base de datos del inventario de un shooter.
2. **Filtrado Inicial:** El primer corte es la viabilidad en combate. Si un arma tiene menos de 30 balas, se descarta inmediatamente usando un filtro condicional.
3. **Clasificación y Recomendación:** Iterar sobre las armas aprobadas para separarlas por su categoría (`rifle`, `pistola`, `francotirador`) y, al mismo tiempo, evaluar si su rareza ("rara" o "épica") merece una marca de recomendación táctica.
4. **Formateo de Salida:** Crear un reporte limpio y legible en consola que agrupe los resultados por tipo.

## 2. Solución en Código (JavaScript)

```javascript
const inventarioArmas = [
    { nombre: "AK-47", tipo: "rifle", municion: 45, rareza: "epica" },
    { nombre: "M4A1", tipo: "rifle", municion: 30, rareza: "comun" },
    { nombre: "Glock-18", tipo: "pistola", municion: 15, rareza: "comun" },
    { nombre: "Desert Eagle", tipo: "pistola", municion: 35, rareza: "rara" },
    { nombre: "AWM", tipo: "francotirador", municion: 5, rareza: "legendaria" },
    { nombre: "Barrett .50", tipo: "francotirador", municion: 32, rareza: "epica" },
    { nombre: "P90", tipo: "rifle", municion: 0, rareza: "rara" }
];

const armasConMunicionSuficiente = inventarioArmas.filter(arma => arma.municion >= 30);

const resumen = {
    rifles: [],
    pistolas: [],
    francotiradores: []
};

armasConMunicionSuficiente.forEach(arma => {
    const esRecomendada = arma.rareza === "rara" || arma.rareza === "epica";

    const armaProcesada = {
        nombre: arma.nombre,
        municion: arma.municion,
        rareza: arma.rareza,
        recomendada: esRecomendada ? "SÍ" : "NO"
    };

    if (arma.tipo === "rifle") {
        resumen.rifles.push(armaProcesada);
    } else if (arma.tipo === "pistola") {
        resumen.pistolas.push(armaProcesada);
    } else if (arma.tipo === "francotirador") {
        resumen.francotiradores.push(armaProcesada);
    }
});

console.log("=== RESUMEN DE CARGAS DE COMBATE RECOMENDADAS ===");
console.log("\n--- RIFLES ---");
console.table(resumen.rifles);
console.log("\n--- PISTOLAS ---");
console.table(resumen.pistolas);
console.log("\n--- FRANCOTIRADORES ---");
console.table(resumen.francotiradores);
```

## 3. Evidencia de Validación y Casos Límite

Para comprobar el correcto funcionamiento del script, se analizaron los siguientes escenarios en la salida de la consola:

**Casos evaluados:**
Caso Normal: El AK-47 (45 balas, épica) pasa el filtro y aparece como Recomendada: SÍ.

Caso Límite (Exactamente 30): La M4A1 tiene exactamente 30 balas. Pasa el filtro de munición, pero al ser de rareza "común", aparece como Recomendada: NO.

Caso Excluido por Munición: El AWM es "legendaria", pero al tener sólo 5 balas, queda fuera del inventario utilizable.

Caso Cero (0): La P90 tiene munición 0, por lo que es correctamente ignorada y no genera errores en el sistema.

## Salida esperada en Consola:

=== RESUMEN DE CARGAS DE COMBATE RECOMENDADAS ===

--- RIFLES ---
┌─────────┬─────────┬──────────┬──────────┬─────────────┐
│ (index) │ nombre  │ municion │  rareza  │ recomendada │
├─────────┼─────────┼──────────┼──────────┼─────────────┤
│    0    │ 'AK-47' │    45    │ 'epica'  │     'SÍ'    │
│    1    │ 'M4A1'  │    30    │ 'comun'  │    'NO'     │
└─────────┴─────────┴──────────┴──────────┴─────────────┘

--- PISTOLAS ---
┌─────────┬──────────────┬──────────┬────────┬─────────────┐
│ (index) │    nombre    │ municion │ rareza │ recomendada │
├─────────┼──────────────┼──────────┼────────┼─────────────┤
│    0    │ 'Desert Eg.' │    35    │ 'rara' │     'SÍ'    │
└─────────┴──────────────┴──────────┴────────┴─────────────┘

--- FRANCOTIRADORES ---
┌─────────┬──────────────┬──────────┬─────────┬─────────────┐
│ (index) │    nombre    │ municion │ rareza  │ recomendada │
├─────────┼──────────────┼──────────┼─────────┼─────────────┐
│    0    │ 'Barrett .50'│    32    │ 'epica' │     'SI'    │
└─────────┴──────────────┴──────────┴─────────┴─────────────┘

## Comandos Git Utilizados
A continuación, documento el flujo de trabajo realizado en la terminal para respetar la estructura del repositorio:

```Bash
git checkout dev
git pull origin dev
git checkout -b alumno/antonio-canux/ejercicio-02
mkdir -p basico/logica/ejercicio-02/resoluciones/antonio-canux/
git status
git add basico/logica/ejercicio-02/resoluciones/tu-nombre-tu-apellido/solucion.md
git commit -m "feat: Agregar resolucion y logica de inventario tactico para antonio-canux"
```