# Service: destinos-service

## Proposito

Aisla el acceso a los datos (`data/destinos.json`) del resto de la app.
Ninguna page ni component deberia leer el JSON directamente; siempre
pasan por este service.

## Funciones que expondria

- `obtenerDestinos()` — lee `data/destinos.json` y devuelve el arreglo
  completo.
- `obtenerDestinoPorId(id)` — busca un destino especifico, usado por la
  futura vista de detalle.
- `filtrarPorCategoria(categoria)` — devuelve solo los destinos de una
  categoria (cultural, naturaleza, playa).
- `ordenarPorCalificacion(destinos)` — ordena de mayor a menor
  calificacion, dejando al final los que tienen `calificacion: 0`.

## Por que separarlo de las pages

Si mas adelante los datos dejan de venir de un archivo local y pasan a
venir de una API real, solo este archivo cambia. Las pages y components
no se enteran de ese cambio porque siguen llamando a las mismas
funciones.

## Como crecería este servicio

Con mas tiempo, `destinos-service` se conectaria a un backend real vía
`fetch` a un endpoint como `/api/destinos`, manteniendo la misma firma
de funciones para no romper el resto del proyecto.
