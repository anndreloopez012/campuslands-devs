# Ejercicio 08 - Estructura

## Análisis de Proyecto
Un equipo tecnico necesita preparar la base de un proyecto:

Menu
Precios
Fotografias

Requerimientos:
1. Crea menu, assets/photos, docs y scripts.
2. Separa platos, bebidas y combos.
3. Crea docs/reglas-precios.md.
4. Incluye ejemplo de archivo menu/platos.json.
5. Explica por qué no conviene mezclar imágenes con datos.

## Resolución
├── daniel-borja.md                   <-- Archivo entregable de la solución
├── menu/
│   ├── platos.json                   <-- Base de datos de platos principales (burgers, tacos, etc.)
│   ├── bebidas.json                  <-- Base de datos de refrescos y licores
│   └── combos.json                   <-- Base de datos de paquetes promocionales
├── assets/
│   └── photos/
│       ├── burger-clasica.jpg        <-- Recurso binario optimizado
│       └── soda-cola.jpg             <-- Recurso binario optimizado
├── docs/
│   └── reglas-precios.md             <-- Documentación de políticas comerciales e impuestos
└── scripts/
    └── calcular-total.js             <-- Lógica operativa de cálculos de caja