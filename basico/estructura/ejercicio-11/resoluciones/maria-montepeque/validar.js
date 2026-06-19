// Ejercicio 11 — Validador de estructura: Proyecto de arquitectura 3D

const ESTRUCTURA_ESPERADA = [
  "planos/borradores",
  "planos/finales",
  "modelos/borradores",
  "modelos/finales",
  "materiales/texturas",
  "materiales/paletas",
  "renders/borradores",
  "renders/finales",
  "docs",
];

const ARCHIVOS_CLAVE = [
  "docs/convenciones.md",
  "docs/plantilla-entrega.md",
  "materiales/paletas/paleta-proyecto.json",
];

const VISTAS_VALIDAS = [
  "fachada-principal",
  "fachada-lateral",
  "planta-baja",
  "planta-alta",
  "corte-aa",
  "interior-sala",
];

const EXTENSIONES_POR_CARPETA = {
  planos:    [".dwg", ".dxf"],
  modelos:   [".blend", ".obj", ".fbx"],
  materiales:[".png", ".jpg", ".json"],
  renders:   [".png", ".jpg", ".exr"],
  docs:      [".md", ".txt", ".pdf"],
};

// --- Validaciones ---

function validarEstructura(carpetas) {
  const errores = [];

  for (const ruta of ESTRUCTURA_ESPERADA) {
    if (!carpetas.includes(ruta)) {
      errores.push(`Carpeta faltante: ${ruta}`);
    }
  }

  return errores;
}

function validarArchivesClave(archivos) {
  const errores = [];

  for (const ruta of ARCHIVOS_CLAVE) {
    if (!archivos.includes(ruta)) {
      errores.push(`Archivo clave faltante: ${ruta}`);
    }
  }

  return errores;
}

function validarNombreVista(nombreArchivo) {
  const sinExtension = nombreArchivo.replace(/\.[^.]+$/, "");
  const partes = sinExtension.split("-");

  // El nombre puede ser: vista-estado o vista1-vista2-estado (ej: fachada-principal-final)
  // Buscar si algún prefijo conocido está contenido
  const vistaDetectada = VISTAS_VALIDAS.find((v) =>
    sinExtension.startsWith(v)
  );

  if (!vistaDetectada) {
    return `Nombre de vista no reconocido: "${nombreArchivo}" (vistas válidas: ${VISTAS_VALIDAS.join(", ")})`;
  }

  const estado = sinExtension.slice(vistaDetectada.length + 1); // +1 por el guion
  if (!estado || (!estado.match(/^v\d+$/) && estado !== "final" && estado !== "draft")) {
    return `Estado inválido en "${nombreArchivo}": se esperaba "v1", "v2"... o "final" o "draft"`;
  }

  return null;
}

function validarConvenciones(archivosConRuta) {
  const errores = [];

  for (const rutaCompleta of archivosConRuta) {
    const partes = rutaCompleta.split("/");
    const nombreArchivo = partes[partes.length - 1];
    const carpetaRaiz = partes[0];

    // Planos y renders usan convención de vistas; modelos usan nombre libre con estado
    const carpetasConVistas = ["planos", "renders"];
    if (!carpetasConVistas.includes(carpetaRaiz)) {
      // Para modelos: solo validar que terminen en -vN, -final o -draft
      if (carpetaRaiz === "modelos") {
        const sinExt = nombreArchivo.replace(/\.[^.]+$/, "");
        if (!sinExt.match(/-(v\d+|final|draft)$/)) {
          errores.push(
            `Modelo sin estado válido: "${nombreArchivo}" — debe terminar en -v1, -final, etc.`
          );
        }
        const ext = nombreArchivo.slice(nombreArchivo.lastIndexOf("."));
        const extensionesPermitidas = EXTENSIONES_POR_CARPETA["modelos"] || [];
        if (!extensionesPermitidas.includes(ext)) {
          errores.push(
            `Extensión "${ext}" no permitida en "modelos/" — permitidas: ${extensionesPermitidas.join(", ")}`
          );
        }
      }
      continue;
    }

    // Ignorar archivos de sistema
    if (nombreArchivo.startsWith(".")) continue;

    const errorVista = validarNombreVista(nombreArchivo);
    if (errorVista) {
      errores.push(errorVista);
    }

    // Validar extensión según carpeta
    const extensionesPermitidas = EXTENSIONES_POR_CARPETA[carpetaRaiz] || [];
    const ext = nombreArchivo.slice(nombreArchivo.lastIndexOf("."));
    if (extensionesPermitidas.length > 0 && !extensionesPermitidas.includes(ext)) {
      errores.push(
        `Extensión "${ext}" no permitida en "${carpetaRaiz}/" — permitidas: ${extensionesPermitidas.join(", ")}`
      );
    }
  }

  return errores;
}

function validarPaletaJSON(contenidoJSON) {
  const errores = [];

  if (contenidoJSON === null || contenidoJSON === undefined) {
    errores.push("paleta-proyecto.json está vacío o es nulo");
    return errores;
  }

  if (!contenidoJSON.proyecto) {
    errores.push("paleta-proyecto.json: falta campo 'proyecto'");
  }

  if (!Array.isArray(contenidoJSON.paleta) || contenidoJSON.paleta.length === 0) {
    errores.push("paleta-proyecto.json: 'paleta' debe ser un arreglo con al menos un color");
    return errores;
  }

  for (const [i, color] of contenidoJSON.paleta.entries()) {
    if (!color.nombre) {
      errores.push(`paleta[${i}]: falta campo 'nombre'`);
    }
    if (!color.hex || !/^#[0-9A-Fa-f]{6}$/.test(color.hex)) {
      errores.push(`paleta[${i}]: campo 'hex' inválido o faltante (esperado: #RRGGBB)`);
    }
    if (!color.uso) {
      errores.push(`paleta[${i}]: falta campo 'uso'`);
    }
  }

  return errores;
}

// --- Ejecutar validaciones ---

function ejecutarValidaciones() {
  console.log("=== Validación: Ejercicio 11 — Proyecto de arquitectura 3D ===\n");

  let totalErrores = 0;

  // CASO NORMAL: estructura completa y correcta
  console.log("--- Caso 1: Estructura completa (caso normal) ---");

  const carpetasNormal = [
    "planos/borradores",
    "planos/finales",
    "modelos/borradores",
    "modelos/finales",
    "materiales/texturas",
    "materiales/paletas",
    "renders/borradores",
    "renders/finales",
    "docs",
  ];

  const archivosClaveNormal = [
    "docs/convenciones.md",
    "docs/plantilla-entrega.md",
    "materiales/paletas/paleta-proyecto.json",
  ];

  const archivosConRutaNormal = [
    "planos/finales/fachada-principal-final.dwg",
    "planos/finales/planta-baja-final.dwg",
    "planos/borradores/planta-baja-v1.dwg",
    "renders/finales/fachada-principal-final.png",
    "renders/borradores/fachada-principal-draft.png",
    "modelos/finales/estructura-base-final.blend",
  ];

  const paletaNormal = {
    proyecto: "arquitectura-3d",
    paleta: [
      { nombre: "concreto", hex: "#C0B9B2", uso: "estructura exterior" },
      { nombre: "vidrio",   hex: "#A8C4D4", uso: "fachadas acristaladas" },
    ],
  };

  const errores1 = [
    ...validarEstructura(carpetasNormal),
    ...validarArchivesClave(archivosClaveNormal),
    ...validarConvenciones(archivosConRutaNormal),
    ...validarPaletaJSON(paletaNormal),
  ];

  if (errores1.length === 0) {
    console.log("✓ Estructura válida — caso normal aprobado\n");
  } else {
    errores1.forEach((e) => console.log(`✗ ${e}`));
    totalErrores += errores1.length;
    console.log();
  }

  // CASO LÍMITE: carpetas faltantes, nombres incorrectos, paleta nula
  console.log("--- Caso 2: Datos incompletos o inválidos (caso límite) ---");

  const carpetasLimite = [
    "planos/finales",
    "modelos/finales",
    // faltan: planos/borradores, modelos/borradores, materiales/*, renders/*, docs
  ];

  const archivosClaveVacios = [];

  const archivosConRutaLimite = [
    "renders/finales/render-sin-vista.png",      // nombre sin vista válida
    "planos/finales/planta-baja.dwg",            // sin estado (falta -final o -v1)
    "renders/borradores/fachada-principal-draft.docx", // extensión incorrecta
  ];

  const paletaLimite = null;

  const errores2 = [
    ...validarEstructura(carpetasLimite),
    ...validarArchivesClave(archivosClaveVacios),
    ...validarConvenciones(archivosConRutaLimite),
    ...validarPaletaJSON(paletaLimite),
  ];

  if (errores2.length > 0) {
    console.log(`✓ Caso límite detectado correctamente (${errores2.length} error/es encontrado/s):`);
    errores2.forEach((e) => console.log(`  → ${e}`));
  } else {
    console.log("✗ El caso límite debería haber generado errores pero no lo hizo");
    totalErrores++;
  }

  console.log("\n=== Resumen ===");
  if (totalErrores === 0) {
    console.log("✓ Todas las validaciones pasaron correctamente");
  } else {
    console.log(`✗ ${totalErrores} error/es inesperado/s en las validaciones`);
  }
}

ejecutarValidaciones();
