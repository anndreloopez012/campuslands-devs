# Catálogo de autos de lujo — Juan Lema

## Tematica

Autos de lujo. Estructura de proyecto que organiza un catalogo premium:
datos del vehiculo, imagenes, documentacion de convenciones/validacion y
logica separada de la vista.

## Estructura de carpetas

```
juan-lema/
└── catalogo-autos-lujo/
    ├── assets/
    │   └── cars/
    │       └── .gitkeep               # carpeta vacia trackeada, lista para imagenes
    ├── data/
    │   └── autos.json                 # datos de los autos (marca, modelo, precio, etc.)
    ├── docs/
    │   ├── checklist-validacion.md    # evidencia de validacion (caso normal + limites)
    │   └── convenciones-imagenes.md   # reglas para nombrar imagenes en assets/cars
    └── src/
        ├── logica/
        │   └── catalogo.js            # funciones puras: cargar, formatear, ordenar
        └── vista/
            └── mostrarCatalogo.js     # arma el HTML y lo dibuja en el DOM
```

## Como se conecta cada archivo

- `src/logica/catalogo.js` no toca el DOM: solo trae los datos con
  `fetch("data/autos.json")`, calcula el precio formateado y ordena el
  catalogo de mayor a menor precio. Exporta `cargarAutos`,
  `formatearPrecio` y `ordenarPorPrecio`.
- `src/vista/mostrarCatalogo.js` importa esas funciones
  (`import { ... } from "../logica/catalogo.js"`), arma una tarjeta HTML
  por cada auto y las inyecta en el contenedor `#catalogo` del DOM. Es la
  unica capa que sabe de HTML.
- Cada tarjeta usa el campo `imagen` de `autos.json`, cuya ruta debe
  cumplir las reglas de `docs/convenciones-imagenes.md`.
- `docs/checklist-validacion.md` documenta como se probo todo lo anterior,
  incluyendo los casos limite.

Flujo: `autos.json` (datos) → `logica/catalogo.js` (proceso: cargar,
formatear, ordenar) → `vista/mostrarCatalogo.js` (salida visual) →
contenedor `#catalogo`.

## Como pense el problema

1. Separe el problema en las mismas tres partes de siempre: entrada
   (`autos.json`), proceso (`logica/catalogo.js`) y salida
   (`vista/mostrarCatalogo.js`).
2. Dentro de `src` divido logica y vista en carpetas separadas para que
   `catalogo.js` se pueda probar sin depender del DOM (nada de
   `document.` dentro de ese archivo).
3. Documente primero la convencion de nombres de imagen en `docs/` antes
   de escribir la vista, para que el `onerror` del `<img>` y el campo
   `imagen` coincidieran con la regla ya definida.
4. Escribi funciones pequenas y con nombres claros (`formatearPrecio`,
   `ordenarPorPrecio`, `cargarAutos`, `crearTarjeta`, `mostrarCatalogo`)
   para que cada una resuelva una sola cosa.

## Notas tecnicas

- `catalogo.js` y `mostrarCatalogo.js` usan `import`/`export` (ES
  modules), por lo que el `<script>` que los cargue debe incluir
  `type="module"`.
- El precio se formatea con `toLocaleString("en-US")` para mostrar
  separadores de miles (ejemplo: `$507,300`).
- Si `precioUSD` es `0` o no existe, se muestra "Precio no disponible" en
  vez de `$0`.
- Si una imagen no existe en `assets/cars/`, el atributo `onerror` del
  `<img>` la reemplaza por un placeholder.
- Para probar hace falta un servidor local (por ejemplo Live Server de
  VS Code), ya que tanto el `fetch` de `autos.json` como los modulos ES
  fallan si el archivo se abre directamente con `file://`.

## Validación (dos casos)

Ver evidencia completa en `docs/checklist-validacion.md`. Resumen:

Caso normal — catalogo ordenado de mayor a menor precio:

```
Lamborghini Revuelto     2024  $608,358
Ferrari SF90 Stradale    2023  $507,300
Rolls-Royce Phantom      2021  $460,000
Bentley Continental GT   2022  $232,725
Aston Martin DBS         2020  Precio no disponible
```

Caso limite — el Aston Martin DBS tiene `precioUSD: 0` en `autos.json` a
proposito: `formatearPrecio` detecta el `0` y muestra "Precio no
disponible" en lugar de `$0`, y `ordenarPorPrecio` lo deja al final del
listado sin romper el orden del resto. Si `autos.json` llegara vacio
(`[]`), `mostrarCatalogo` muestra el mensaje "No hay autos para mostrar."
en lugar de dejar el contenedor en blanco.