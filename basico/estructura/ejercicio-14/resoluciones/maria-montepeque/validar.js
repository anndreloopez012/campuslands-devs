// validar.js - Ejercicio 14: Archivo musical para productores

const CARPETAS_REQUERIDAS = ["tracks", "samples", "mixes", "masters", "docs"];

const PATRON_NOMBRE_AUDIO = /^[a-z][a-z0-9-]+-v\d{2}\.wav$/;

function validarNombreArchivo(nombreArchivo) {
  if (!nombreArchivo || typeof nombreArchivo !== "string") {
    return { valido: false, razon: "El nombre de archivo está vacío o no es texto." };
  }

  const cumplePatron = PATRON_NOMBRE_AUDIO.test(nombreArchivo);
  if (!cumplePatron) {
    return {
      valido: false,
      razon: `"${nombreArchivo}" no sigue el patrón [nombre]-v[XX].wav (ejemplo: tormenta-v01.wav).`,
    };
  }

  return { valido: true, razon: "Nombre correcto." };
}

function validarUbicacionArchivo(nombreArchivo, carpetaDestino) {
  if (!nombreArchivo || !carpetaDestino) {
    return { valido: false, razon: "Faltan el nombre del archivo o la carpeta destino." };
  }

  const carpetasPermitidas = CARPETAS_REQUERIDAS;
  if (!carpetasPermitidas.includes(carpetaDestino)) {
    return {
      valido: false,
      razon: `"${carpetaDestino}" no es una carpeta reconocida del proyecto.`,
    };
  }

  return { valido: true, razon: `"${nombreArchivo}" puede ir en "${carpetaDestino}".` };
}

function validarMasterNoEsBorrador(nombreArchivo, carpetaDestino) {
  if (!nombreArchivo || !carpetaDestino) {
    return { valido: false, razon: "Datos incompletos para validar master vs borrador." };
  }

  // Un master se reconoce porque está en la carpeta "masters"
  // Un borrador está en "tracks" o "mixes"
  const esMaster = carpetaDestino === "masters";
  const esBorrador = carpetaDestino === "tracks" || carpetaDestino === "mixes";

  if (esMaster && esBorrador) {
    return { valido: false, razon: "Una carpeta no puede ser masters y borrador al mismo tiempo." };
  }

  return {
    valido: true,
    razon: esMaster
      ? `"${nombreArchivo}" es un master: no se mezcla con borradores.`
      : `"${nombreArchivo}" es un borrador en "${carpetaDestino}".`,
  };
}

// --- Casos de prueba ---

const casos = [
  // Caso 1: archivo normal y válido en tracks
  { nombreArchivo: "tormenta-v01.wav", carpeta: "tracks" },

  // Caso 2: archivo master válido, separado de borradores
  { nombreArchivo: "amanecer-v04.wav", carpeta: "masters" },

  // Caso 3: nombre sin versión (no cumple convención)
  { nombreArchivo: "cancion.wav", carpeta: "mixes" },

  // Caso 4: carpeta inválida
  { nombreArchivo: "loop-bajo-v01.wav", carpeta: "archivos_varios" },

  // Caso 5: nombre vacío (caso vacío/nulo)
  { nombreArchivo: "", carpeta: "tracks" },

  // Caso 6: carpeta vacía (caso vacío/nulo)
  { nombreArchivo: "tormenta-v02.wav", carpeta: "" },
];

console.log("=== Validación: Archivo Musical para Productores ===\n");

for (const caso of casos) {
  const { nombreArchivo, carpeta } = caso;
  const label = `Archivo: "${nombreArchivo}" | Carpeta: "${carpeta}"`;
  console.log(`--- ${label} ---`);

  const resultadoNombre = validarNombreArchivo(nombreArchivo);
  console.log(`  Nombre    → ${resultadoNombre.valido ? "✓" : "✗"} ${resultadoNombre.razon}`);

  const resultadoUbicacion = validarUbicacionArchivo(nombreArchivo, carpeta);
  console.log(`  Ubicación → ${resultadoUbicacion.valido ? "✓" : "✗"} ${resultadoUbicacion.razon}`);

  const resultadoMaster = validarMasterNoEsBorrador(nombreArchivo, carpeta);
  console.log(`  Master    → ${resultadoMaster.valido ? "✓" : "✗"} ${resultadoMaster.razon}`);

  console.log();
}
