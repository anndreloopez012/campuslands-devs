# Reglas de precios — Menu urbano

Este documento explica como se calculan y actualizan los precios del menu,
independientemente de los datos que viven en `menu/*.json`.

## Reglas generales

1. Todo precio se expresa en quetzales (GTQ) con dos decimales.
2. Un **plato** o **bebida** nunca lleva descuento por si solo; el descuento
   solo aparece dentro de un **combo**.
3. Un **combo** siempre referencia un `platoId` que existe en `platos.json`
   y un `bebidaId` que existe en `bebidas.json`. No se permite un combo con
   ids inventados o que no existan en esos archivos.
4. El `precioCombo` siempre debe ser menor al `precioNormal` (la suma del
   plato + bebida por separado). Si no lo es, el combo no es valido y no
   deberia publicarse.
5. Los precios no se guardan dentro de las fotos ni en `assets/`; las fotos
   solo se referencian por ruta (`fotoRef`) para no duplicar informacion.

## Por que los precios viven en `menu/` y no en `docs/`

`docs/` es para reglas y explicaciones (texto), mientras que `menu/` es para
datos que una aplicacion real leeria y procesaria (JSON). Mezclarlos
obligaria a un programa a "leer" un markdown para sacar precios, lo cual es
fragil. Separarlos permite que el dato (precio) y la regla (como se calcula
o valida ese precio) cambien de forma independiente.

## Validacion de un combo (ejemplo manual)

Combo Pupusero (`c001`):
- Plato referenciado: `p001` → Pupusas revueltas, Q25.00
- Bebida referenciada: `b001` → Horchata, Q12.00
- Suma normal: Q37.00 (coincide con `precioNormal`)
- Precio combo: Q32.00 → es menor a Q37.00, por lo tanto el combo es valido.
