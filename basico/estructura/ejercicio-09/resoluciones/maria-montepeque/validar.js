// validar.js — Ejercicio 09: Organización de estudio de tatuajes

const path = require("path");

const BASE = path.join(__dirname, "estudio-tatuajes");

const CARPETAS_REQUERIDAS = [
  "referencias",
  "referencias/estilos",
  "referencias/estilos/blackwork",
  "referencias/estilos/acuarela",
  "referencias/estilos/neotradicional",
  "referencias/estilos/realismo",
  "referencias/anatomia",
  "referencias/flora-fauna",
  "disenos",
  "disenos/plantillas",
  "disenos/bocetos",
  "disenos/arte-final",
  "disenos/archivo-historico",
  "clientes",
  "clientes/cliente-001",
  "clientes/cliente-001/imagenes",
  "clientes/cliente-002",
  "clientes/cliente-002/imagenes",
  "agenda",
];

const ARCHIVOS_REQUERIDOS = [
  "README.md",
  "disenos/plantillas/ficha-diseno.md",
  "clientes/cliente-001/ficha-diseno.md",
  "clientes/cliente-002/ficha-diseno.md",
  "agenda/citas-activas.md",
  "agenda/citas-historial.md",
  "agenda/disponibilidad.md",
];

const CAMPOS_FICHA = [
  "ID de cliente",
  "Zona del cuerpo",
  "Estilo",
  "Estado",
];

const fs = require("fs");

let errores = 0;
let advertencias = 0;

function ok(msg) {
  console.log(`  ✅ ${msg}`);
}

function error(msg) {
  console.log(`  ❌ ERROR: ${msg}`);
  errores++;
}

function advertencia(msg) {
  console.log(`  ⚠️  ADVERTENCIA: ${msg}`);
  advertencias++;
}

function verificarCarpeta(relativa) {
  const absoluta = path.join(BASE, relativa);
  if (fs.existsSync(absoluta) && fs.statSync(absoluta).isDirectory()) {
    ok(`Carpeta existe: ${relativa}/`);
  } else {
    error(`Carpeta faltante: ${relativa}/`);
  }
}

function verificarArchivo(relativa) {
  const absoluta = path.join(BASE, relativa);
  if (fs.existsSync(absoluta) && fs.statSync(absoluta).isFile()) {
    ok(`Archivo existe: ${relativa}`);
    return true;
  } else {
    error(`Archivo faltante: ${relativa}`);
    return false;
  }
}

function verificarCamposFicha(relativa) {
  const absoluta = path.join(BASE, relativa);
  if (!fs.existsSync(absoluta)) return;

  const contenido = fs.readFileSync(absoluta, "utf8");

  for (const campo of CAMPOS_FICHA) {
    if (contenido.includes(campo)) {
      ok(`  Campo "${campo}" presente en ${relativa}`);
    } else {
      error(`  Campo "${campo}" faltante en ${relativa}`);
    }
  }

  // Caso límite: detectar campos con valores vacíos o en cero
  if (contenido.includes("Q0") || contenido.includes("precio:**")) {
    advertencia(`${relativa} tiene precio en Q0 (consulta inicial sin cotizar — aceptable)`);
  }

  if (contenido.includes("AAAA-MM-DD") || contenido.match(/Fecha.*:\s*$/m)) {
    advertencia(`${relativa} tiene fechas sin completar (aceptable en etapa de boceto)`);
  }
}

function verificarNombresConEspacios() {
  function revisarNivel(dir) {
    if (!fs.existsSync(dir)) return;
    for (const nombre of fs.readdirSync(dir)) {
      if (nombre.includes(" ")) {
        error(`Nombre con espacio detectado: ${path.join(dir, nombre)}`);
      } else {
        ok(`Sin espacios: ${nombre}`);
      }
      const ruta = path.join(dir, nombre);
      if (fs.statSync(ruta).isDirectory()) {
        revisarNivel(ruta);
      }
    }
  }
  revisarNivel(BASE);
}

function verificarPrivacidadEnReadme() {
  const readmePath = path.join(BASE, "README.md");
  if (!fs.existsSync(readmePath)) return;

  const contenido = fs.readFileSync(readmePath, "utf8").toLowerCase();
  const palabrasClave = ["privacidad", "confidencial", "datos", "cliente"];

  for (const palabra of palabrasClave) {
    if (contenido.includes(palabra)) {
      ok(`README.md menciona "${palabra}"`);
    } else {
      advertencia(`README.md no menciona "${palabra}" (recomendado para política de privacidad)`);
    }
  }
}

// ─── Ejecución ───────────────────────────────────────────────────────────────

console.log("\n📁 VERIFICANDO ESTRUCTURA: estudio-tatuajes/\n");

console.log("── Carpetas requeridas");
for (const carpeta of CARPETAS_REQUERIDAS) {
  verificarCarpeta(carpeta);
}

console.log("\n── Archivos requeridos");
for (const archivo of ARCHIVOS_REQUERIDOS) {
  verificarArchivo(archivo);
}

console.log("\n── Campos de ficha de diseño");
verificarCamposFicha("disenos/plantillas/ficha-diseno.md");
verificarCamposFicha("clientes/cliente-001/ficha-diseno.md");
verificarCamposFicha("clientes/cliente-002/ficha-diseno.md");

console.log("\n── Nombres sin espacios");
verificarNombresConEspacios();

console.log("\n── README y privacidad");
verificarPrivacidadEnReadme();

// ─── Resumen ─────────────────────────────────────────────────────────────────

console.log("\n══════════════════════════════════════════");
if (errores === 0 && advertencias === 0) {
  console.log("✅ Todo en orden. Ejercicio listo para entregar.");
} else if (errores === 0) {
  console.log(`✅ Sin errores. ${advertencias} advertencia(s) — revisar antes de entregar.`);
} else {
  console.log(`❌ ${errores} error(es) encontrado(s). Corregir antes de entregar.`);
  if (advertencias > 0) {
    console.log(`⚠️  ${advertencias} advertencia(s) adicional(es).`);
  }
}
console.log("══════════════════════════════════════════\n");
