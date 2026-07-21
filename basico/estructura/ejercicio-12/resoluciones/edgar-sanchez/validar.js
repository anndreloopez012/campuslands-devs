// Validador – Ejercicio 12: Registro de soldadura industrial

const fs = require("fs");
const path = require("path");

const BASE = path.join(__dirname);

// ─── Utilidades ───────────────────────────────────────────────────────────────

function existe(ruta) {
  return fs.existsSync(path.join(BASE, ruta));
}

function leerTexto(ruta) {
  const rutaCompleta = path.join(BASE, ruta);
  if (!fs.existsSync(rutaCompleta)) return "";
  return fs.readFileSync(rutaCompleta, "utf8");
}

function reportar(descripcion, ok, detalle = "") {
  const icono = ok ? "✅" : "❌";
  const mensaje = detalle ? `${icono} ${descripcion} — ${detalle}` : `${icono} ${descripcion}`;
  console.log(mensaje);
  return ok;
}

// ─── Validaciones ─────────────────────────────────────────────────────────────

function validarEstructuraDeCarpetas() {
  console.log("\n📁 Estructura de carpetas");

  const carpetasRequeridas = [
    "practicas",
    "materiales",
    "seguridad",
    "evidencias",
    "evidencias/practica-001",
    "evidencias/practica-002",
  ];

  let todas = true;
  for (const carpeta of carpetasRequeridas) {
    const ok = existe(carpeta);
    reportar(`Carpeta: ${carpeta}`, ok);
    if (!ok) todas = false;
  }
  return todas;
}

function validarArchivosRequeridos() {
  console.log("\n📄 Archivos requeridos");

  const archivos = [
    "solucion.md",
    "validar.js",
    "practicas/practica-001.md",
    "practicas/practica-002.md",
    "materiales/catalogo.md",
    "seguridad/checklist.md",
  ];

  let todos = true;
  for (const archivo of archivos) {
    const ok = existe(archivo);
    reportar(`Archivo: ${archivo}`, ok);
    if (!ok) todos = false;
  }
  return todos;
}

function validarCasoNormal() {
  console.log("\n✅ Caso normal – practica-001");

  const contenido = leerTexto("practicas/practica-001.md");
  const checks = [
    ["Tiene encabezado de título",     contenido.includes("# Práctica 001")],
    ["Registra fecha",                 contenido.includes("Fecha:")],
    ["Registra duración mayor a 0",    /Duraci.n:\*{0,2}\s*[1-9]/.test(contenido) ||
                                       /Duraci.n:\*{0,2}\*?\s*[1-9]/.test(contenido) ||
                                       contenido.includes("2 horas") || contenido.includes("1 hora")],
    ["Lista materiales usados",        contenido.toLowerCase().includes("material")],
    ["Describe procedimiento",         contenido.toLowerCase().includes("procedimiento")],
    ["Indica resultado",               contenido.toLowerCase().includes("resultado")],
    ["Referencia evidencias",          contenido.includes("evidencias/practica-001/")],
  ];

  let ok = true;
  for (const [desc, resultado] of checks) {
    reportar(desc, resultado);
    if (!resultado) ok = false;
  }
  return ok;
}

function validarCasoLimite() {
  console.log("\n⚠️  Caso límite – practica-002 (sin ejecución)");

  const contenido = leerTexto("practicas/practica-002.md");
  const checks = [
    ["Tiene encabezado de título",      contenido.includes("# Práctica 002")],
    ["Duración es 0",                   contenido.includes("0 horas") || /Duraci.n:.*0/.test(contenido)],
    ["Documenta motivo de cancelación", contenido.toLowerCase().includes("cancel") ||
                                        contenido.toLowerCase().includes("suspend") ||
                                        contenido.toLowerCase().includes("sin ejecución")],
    ["Indica estado pendiente",         contenido.toLowerCase().includes("pendiente") ||
                                        contenido.toLowerCase().includes("reagendar")],
    ["No lista materiales consumidos",  !(/M0[0-9]/.test(contenido))],
  ];

  let ok = true;
  for (const [desc, resultado] of checks) {
    reportar(desc, resultado);
    if (!resultado) ok = false;
  }
  return ok;
}

function validarCatalogo() {
  console.log("\n📦 Catálogo de materiales");

  const contenido = leerTexto("materiales/catalogo.md");
  const checks = [
    ["Tiene encabezado",          contenido.startsWith("# ")],
    ["Incluye tabla de materiales", contenido.includes("|")],
    ["Registra unidad de medida", contenido.toLowerCase().includes("unidad") ||
                                  contenido.toLowerCase().includes("metro") ||
                                  contenido.toLowerCase().includes("kg")],
    ["Incluye material con stock 0 (caso límite)", /\|\s*0\s*\|/.test(contenido)],
    ["Menciona estado del material", contenido.toLowerCase().includes("estado") ||
                                     contenido.toLowerCase().includes("agotado") ||
                                     contenido.toLowerCase().includes("disponible")],
  ];

  let ok = true;
  for (const [desc, resultado] of checks) {
    reportar(desc, resultado);
    if (!resultado) ok = false;
  }
  return ok;
}

function validarChecklist() {
  console.log("\n🦺 Checklist de seguridad");

  const contenido = leerTexto("seguridad/checklist.md");
  const checks = [
    ["Tiene encabezado",              contenido.startsWith("# ")],
    ["Incluye ítems de verificación", contenido.includes("- [ ]")],
    ["Cubre equipo de protección",    contenido.toLowerCase().includes("careta") ||
                                      contenido.toLowerCase().includes("guantes") ||
                                      contenido.toLowerCase().includes("epp")],
    ["Cubre el área de trabajo",      contenido.toLowerCase().includes("área") ||
                                      contenido.toLowerCase().includes("ventil") ||
                                      contenido.toLowerCase().includes("extintor")],
    ["Menciona qué hacer si falla",   contenido.toLowerCase().includes("no iniciar") ||
                                      contenido.toLowerCase().includes("no soldar") ||
                                      contenido.toLowerCase().includes("suspender")],
  ];

  let ok = true;
  for (const [desc, resultado] of checks) {
    reportar(desc, resultado);
    if (!resultado) ok = false;
  }
  return ok;
}

function validarSeparacionEvidencias() {
  console.log("\n🖼️  Separación reportes / evidencias");

  const reportePractica1 = leerTexto("practicas/practica-001.md");

  const checks = [
    ["El reporte referencia evidencias por ruta, no las embebe",
      reportePractica1.includes("evidencias/") && !reportePractica1.includes(".jpg\n![")],
    ["Las evidencias están en su propia carpeta raíz",
      existe("evidencias")],
    ["No hay imágenes dentro de practicas/",
      !existe("practicas/foto-cordon-01.jpg") && !existe("practicas/video-proceso.mp4")],
  ];

  let ok = true;
  for (const [desc, resultado] of checks) {
    reportar(desc, resultado);
    if (!resultado) ok = false;
  }
  return ok;
}

// ─── Ejecución ────────────────────────────────────────────────────────────────

function main() {
  console.log("═══════════════════════════════════════════════════");
  console.log("  Validador – Ejercicio 12: Registro de soldadura");
  console.log("═══════════════════════════════════════════════════");

  const resultados = [
    validarEstructuraDeCarpetas(),
    validarArchivosRequeridos(),
    validarCasoNormal(),
    validarCasoLimite(),
    validarCatalogo(),
    validarChecklist(),
    validarSeparacionEvidencias(),
  ];

  const total     = resultados.length;
  const aprobados = resultados.filter(Boolean).length;

  console.log("\n───────────────────────────────────────────────────");
  console.log(`  Resultado: ${aprobados}/${total} secciones aprobadas`);

  if (aprobados === total) {
    console.log("  🎉 Solución válida. Lista para entregar.");
  } else {
    console.log("  ⚠️  Revisa las secciones marcadas con ❌.");
  }
  console.log("───────────────────────────────────────────────────\n");
}

main();
