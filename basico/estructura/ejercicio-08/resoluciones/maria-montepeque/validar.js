// validar.js — Ejercicio 08: Gestión de menú urbano

const fs = require("fs");
const path = require("path");

const BASE = path.join(__dirname);

function existe(ruta) {
  return fs.existsSync(path.join(BASE, ruta));
}

function leerJSON(ruta) {
  try {
    const contenido = fs.readFileSync(path.join(BASE, ruta), "utf8");
    return JSON.parse(contenido);
  } catch {
    return null;
  }
}

function ok(mensaje) {
  console.log(`  ✅ ${mensaje}`);
}

function error(mensaje) {
  console.log(`  ❌ ${mensaje}`);
}

function titulo(texto) {
  console.log(`\n── ${texto}`);
}

let errores = 0;

function verificar(condicion, mensajeOk, mensajeError) {
  if (condicion) {
    ok(mensajeOk);
  } else {
    error(mensajeError);
    errores++;
  }
}

titulo("Estructura de carpetas");

const carpetasRequeridas = [
  "menu/platos",
  "menu/bebidas",
  "menu/combos",
  "assets/photos/platos",
  "assets/photos/bebidas",
  "assets/photos/combos",
  "docs",
  "scripts",
];

for (const carpeta of carpetasRequeridas) {
  verificar(existe(carpeta), `Carpeta existente: ${carpeta}`, `Falta la carpeta: ${carpeta}`);
}

titulo("Archivos requeridos");

verificar(existe("solucion.md"), "solucion.md presente", "Falta solucion.md");
verificar(existe("docs/reglas-precios.md"), "docs/reglas-precios.md presente", "Falta docs/reglas-precios.md");
verificar(existe("menu/platos/platos.json"), "menu/platos/platos.json presente", "Falta menu/platos/platos.json");

titulo("Caso normal: plato con todos los campos");

const platos = leerJSON("menu/platos/platos.json");

verificar(
  Array.isArray(platos) && platos.length > 0,
  "platos.json es un arreglo con al menos un elemento",
  "platos.json está vacío o no es un arreglo"
);

if (Array.isArray(platos) && platos.length > 0) {
  const platoNormal = platos.find(p => p.disponible === true && p.precio > 0);

  verificar(platoNormal !== undefined, "Existe al menos un plato disponible con precio > 0", "No se encontró ningún plato disponible con precio positivo");

  if (platoNormal) {
    const camposRequeridos = ["id", "nombre", "descripcion", "categoria", "precio", "disponible", "foto"];
    for (const campo of camposRequeridos) {
      verificar(campo in platoNormal, `Campo "${campo}" presente en plato normal`, `Falta el campo "${campo}" en el plato normal`);
    }

    verificar(
      typeof platoNormal.precio === "number" && platoNormal.precio >= 0,
      "El precio es un número no negativo",
      "El precio debe ser un número mayor o igual a cero"
    );

    verificar(
      typeof platoNormal.foto === "string" && platoNormal.foto.startsWith("assets/"),
      'La ruta de foto empieza con "assets/"',
      'La ruta de foto debe ser relativa y empezar con "assets/"'
    );
  }
}

titulo("Caso límite: plato fuera de carta (precio 0, foto null)");

if (Array.isArray(platos)) {
  const platoLimite = platos.find(p => p.precio === 0 && p.disponible === false);

  verificar(
    platoLimite !== undefined,
    "Existe un plato con precio 0 y disponible: false",
    "No se encontró un caso límite (precio 0, disponible: false)"
  );

  if (platoLimite) {
    verificar(
      platoLimite.precio === 0,
      "precio es exactamente 0 en el caso límite",
      "El precio del caso límite debería ser 0"
    );

    verificar(
      platoLimite.foto === null || platoLimite.foto === "",
      "foto es null o vacía en el caso límite",
      "La foto del caso límite debería ser null o cadena vacía"
    );
  }
}

titulo("Separación de imágenes y datos");

if (Array.isArray(platos)) {
  const conBase64 = platos.some(p => typeof p.foto === "string" && p.foto.startsWith("data:image"));

  verificar(
    !conBase64,
    "Ningún plato embebe imágenes en base64 dentro del JSON",
    "Se encontró una imagen en base64 dentro del JSON — las imágenes deben ir en assets/"
  );
}

console.log("\n──────────────────────────────────────");

if (errores === 0) {
  console.log("✅ Validación completada sin errores.\n");
} else {
  console.log(`❌ Se encontraron ${errores} error(es). Revisa los puntos marcados.\n`);
  process.exit(1);
}
