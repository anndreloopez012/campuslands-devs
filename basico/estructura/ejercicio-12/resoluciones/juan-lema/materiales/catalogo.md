# Catalogo de materiales — Soldadura

Inventario de referencia usado en las practicas. Cada fila indica el material,
su uso principal y el estado disponible al momento de documentar este ejercicio.

| Codigo | Material            | Tipo de proceso   | Uso principal                          | Cantidad | Estado      |
|--------|----------------------|-------------------|-----------------------------------------|----------|-------------|
| E6011  | Electrodo revestido  | SMAC (arco manual)| Soldadura de penetracion en campo       | 45 uds   | Disponible  |
| E6013  | Electrodo revestido  | SMAC (arco manual)| Acabado y soldaduras generales          | 60 uds   | Disponible  |
| ER70S-6| Alambre solido       | MIG/MAG           | Union de acero al carbono               | 5 kg     | Disponible  |
| ER308L | Alambre solido       | TIG/MIG           | Acero inoxidable                        | 2 kg     | Bajo stock  |
| Placa A36 | Lamina de acero   | Base/probeta      | Piezas de practica y probetas de prueba | 10 piezas| Disponible  |
| Gas CO2/Ar (80/20) | Gas de proteccion | MIG/MAG   | Proteccion del arco en soldadura MIG    | 1 cilindro| Disponible |
| Argon puro | Gas de proteccion | TIG            | Proteccion del arco en soldadura TIG    | 1 cilindro| Agotado    |

## Como se relaciona con las practicas

Cada registro en `practicas/registro.md` debe indicar el codigo de material
usado (columna `Codigo`) para poder rastrear consumo y disponibilidad sin
duplicar la informacion en dos archivos.

## Caso limite considerado

Si un material aparece como **Agotado** (ver Argon puro), la practica que lo
requiera no puede registrarse como completada; debe anotarse en
`practicas/registro.md` con el estado "pendiente por falta de material".
