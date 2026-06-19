// validar.js — Pipeline de animación 3D

const fs = require("fs");
const path = require("path");

const BASE = path.join(__dirname);

// Carpetas obligatorias del pipeline
const carpetasRequeridas = [
  "docs",
  "referencias",
  "referencias/concept-art",
  "referencias/moodboard",
  "referencias/videos",
  "01-modelado",
  "01-modelado/personajes",
  "01-modelado/escenarios",
  "01-modelado/props",
  "02-texturas",
  "02-texturas/personajes",
  "02-texturas/escenarios",
  "02-texturas/props",
  "03-renders",
  "03-renders/_wip",
  "03-renders/_final",
  "04-entregas",
  "04-entregas/_wip",
  "04-entregas/_final",
];

// Archivos de documentación obligatorios
const archivosRequeridos = [
  "docs/pipeline.md",
  "solucion.md",
];

let errores = 0;
let advertencias = 0;

function verificarCarpeta(ruta) {
  const rutaCompleta = path.join(BASE, ruta);
  if (!fs.existsSync(rutaCompleta)) {
    console.error(`  ✗ FALTA carpeta: ${ruta}`);
    errores++;
    return false;
  }
  console.log(`  ✓ ${ruta}`);
  return true;
}

function verificarArchivo(ruta) {
  const rutaCompleta = path.join(BASE, ruta);
  if (!fs.existsSync(rutaCompleta)) {
    console.error(`  ✗ FALTA archivo: ${ruta}`);
    errores++;
    return false;
  }
  console.log(`  ✓ ${ruta}`);
  return true;
}

function verificarConvencionNombres(carpetaFinal) {
  const rutaCompleta = path.join(BASE, carpetaFinal);

  if (!fs.existsSync(rutaCompleta)) {
    return;
  }

  const archivos = fs.readdirSync(rutaCompleta).filter(
    (f) => f !== ".gitkeep" && !fs.statSync(path.join(rutaCompleta, f)).isDirectory()
  );

  if (archivos.length === 0) {
    console.log(`  ℹ  ${carpetaFinal}/ está vacía (válido si el proyecto es nuevo)`);
    return;
  }

  for (const archivo of archivos) {
    if (!archivo.includes("_APROBADO")) {
      console.warn(`  ⚠  En _final/ hay un archivo sin "_APROBADO": ${archivo}`);
      advertencias++;
    } else {
      console.log(`  ✓ Nombre correcto en _final/: ${archivo}`);
    }
  }
}

function verificarWipSinAprobado(carpetaWip) {
  const rutaCompleta = path.join(BASE, carpetaWip);

  if (!fs.existsSync(rutaCompleta)) {
    return;
  }

  const archivos = fs.readdirSync(rutaCompleta).filter(
    (f) => f !== ".gitkeep" && !fs.statSync(path.join(rutaCompleta, f)).isDirectory()
  );

  for (const archivo of archivos) {
    if (archivo.includes("_APROBADO")) {
      console.warn(`  ⚠  En _wip/ hay un archivo con "_APROBADO" (debería estar en _final/): ${archivo}`);
      advertencias++;
    }
  }
}

// ─── Ejecución ───────────────────────────────────────────────

console.log("\n══════════════════════════════════════════");
console.log(" Validación: Pipeline de animación 3D");
console.log("══════════════════════════════════════════\n");

console.log("► Verificando carpetas del pipeline...");
for (const carpeta of carpetasRequeridas) {
  verificarCarpeta(carpeta);
}

console.log("\n► Verificando archivos de documentación...");
for (const archivo of archivosRequeridos) {
  verificarArchivo(archivo);
}

console.log("\n► Verificando convención de nombres en carpetas _final/...");
verificarConvencionNombres("03-renders/_final");
verificarConvencionNombres("04-entregas/_final");

console.log("\n► Verificando que _wip/ no contenga archivos aprobados...");
verificarWipSinAprobado("03-renders/_wip");
verificarWipSinAprobado("04-entregas/_wip");

console.log("\n──────────────────────────────────────────");
if (errores === 0 && advertencias === 0) {
  console.log("✅ Todo correcto. El pipeline está bien estructurado.");
} else if (errores === 0) {
  console.log(`⚠️  Sin errores críticos, pero hay ${advertencias} advertencia(s) de convención.`);
} else {
  console.log(`❌ Se encontraron ${errores} error(es) y ${advertencias} advertencia(s).`);
}
console.log("══════════════════════════════════════════\n");
