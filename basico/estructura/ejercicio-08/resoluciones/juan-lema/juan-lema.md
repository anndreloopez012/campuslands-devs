# Gestion de menu urbano — Juan Lema

## Tematica

Comida. Estructura de proyecto para un menu urbano: platos, bebidas, combos,
fotos de cada producto y las reglas de negocio que definen como se calculan
los precios.

## Estructura de carpetas

```
juan-lema/
├── menu/
│   ├── platos.json     # platos individuales (id, nombre, precio, foto)
│   ├── bebidas.json    # bebidas individuales (id, nombre, precio, foto)
│   └── combos.json     # combos que referencian un platoId y un bebidaId
├── assets/
│   └── photos/
│       └── .gitkeep    # carpeta vacia registrada en Git para las fotos reales
├── docs/
│   └── reglas-precios.md # explica como se calculan y validan los precios
├── scripts/
│   └── validar-combos.js # valida que los combos referencien ids existentes
└── juan-lema.md         # este archivo (explicacion y evidencia)
```

## Como se conecta cada carpeta

- `menu/platos.json` y `menu/bebidas.json` son los catalogos base: cada
  producto tiene su propio `id`, que es lo que despues se referencia desde
  otros archivos en vez de repetir toda la informacion.
- `menu/combos.json` no duplica los datos de un plato o una bebida; solo
  guarda `platoId` y `bebidaId` apuntando al catalogo correspondiente, junto
  con el precio normal y el precio del combo.
- Cada producto en `menu/` tiene un campo `fotoRef` que apunta a una ruta
  dentro de `assets/photos/`, pero la imagen en si nunca vive junto al dato:
  las fotos son binarios pesados y los datos son texto liviano, por lo que
  mezclarlos en la misma carpeta dificultaria versionar y respaldar cada
  cosa por separado.
- `docs/reglas-precios.md` no contiene precios propios; explica en texto las
  reglas que `menu/*.json` debe cumplir (por ejemplo, que un combo siempre
  sea mas barato que la suma de sus partes).
- `scripts/validar-combos.js` lee los tres archivos de `menu/` y confirma
  que esas reglas se cumplan realmente, en vez de confiar en que se
  cumplieron "a ojo".

Flujo: `menu/platos.json` + `menu/bebidas.json` (catalogos) → `menu/combos.json`
(combinaciones que los referencian) → `docs/reglas-precios.md` (reglas que
deben cumplir) → `scripts/validar-combos.js` (verificacion automatica).

## Como pense el problema

1. Separe primero entrada, proceso y salida antes de crear una sola carpeta:
   - Entrada: datos de platos, bebidas y combos (JSON).
   - Proceso: reglas de precios y validacion de que los combos sean
     coherentes con los catalogos.
   - Salida: un menu estructurado listo para que una app lo consuma, mas
     documentacion legible para un humano.
2. Decidi no mezclar imagenes con datos: `assets/photos/` guarda solo
   binarios, `menu/` solo guarda JSON con referencias a esas imagenes.
3. Separe "dato" (`menu/*.json`) de "regla sobre el dato"
   (`docs/reglas-precios.md`), porque cambian con frecuencias distintas: los
   precios pueden cambiar cada semana, las reglas del negocio casi nunca.
4. Agregue `scripts/validar-combos.js` para no dejar la regla solo escrita
   en markdown; el script la comprueba contra los datos reales.

## Notas tecnicas

- `assets/photos/` esta vacia a proposito (todavia no hay fotos reales
  subidas), por eso lleva un `.gitkeep`: Git no versiona carpetas vacias,
  solo archivos, entonces sin ese archivo la carpeta desaparecerian del
  repositorio.
- Los precios se guardan como numeros (`25.00`), no como texto (`"Q25.00"`),
  para que se puedan sumar y comparar directamente sin parsear strings.
- `combos.json` valida su propia regla de negocio: `precioCombo` siempre
  debe ser menor que `precioNormal`; si no lo es, el combo no deberia
  publicarse (ver `docs/reglas-precios.md`).

## Validacion (dos casos)

Caso normal — ejecutar `node scripts/validar-combos.js` con los datos
actuales de `menu/`:

```
Todos los combos son validos.
```

Caso limite — si a un combo se le pusiera un `platoId` que no existe en
`platos.json` (por ejemplo `"p999"`) o un `precioCombo` mayor al
`precioNormal`, el script no lanza una excepcion ni se cae: recolecta el
problema y lo reporta por consola, por ejemplo:

```
Se encontraron problemas:
 - Combo c001: platoId "p999" no existe.
 - Combo c002: el precio combo no es menor al precio normal.
```
