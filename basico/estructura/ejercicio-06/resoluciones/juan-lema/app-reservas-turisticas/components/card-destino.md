# Componente: card-destino

## Proposito

Muestra la informacion de un solo destino turistico dentro del listado
principal de la app. Es la unidad visual que se repite por cada elemento
de `data/destinos.json`.

## Props que recibiria

| Prop            | Tipo   | Descripcion                                  |
|------------------|--------|-----------------------------------------------|
| `nombre`         | string | Nombre del destino                            |
| `pais`           | string | Pais donde se ubica                           |
| `precioPorNoche` | number | Precio por noche en USD                       |
| `calificacion`   | number | Calificacion de 0 a 5, puede ser 0 (sin resenas) |
| `categoria`      | string | cultural, naturaleza o playa                  |

## Estructura visual esperada

```
┌───────────────────────────────┐
│ [imagen del destino]           │
│ Nombre del destino              │
│ Pais · Categoria                │
│ ★ 4.8   $45 / noche             │
└───────────────────────────────┘
```

## Estados a considerar

- **Normal:** destino con calificacion mayor a 0, se muestra la estrella
  y el numero tal cual.
- **Limite:** destino con `calificacion: 0` (sin resenas todavia). En vez
  de mostrar "★ 0", el componente deberia mostrar el texto
  "Sin calificaciones aun" para no confundir al usuario con un destino
  de mala calidad.

## Como crecería este componente

Si el proyecto avanza, `card-destino` se dividiria en subcomponentes mas
pequenos (`badge-categoria`, `precio-noche`, `estrellas-calificacion`)
para reutilizarlos tambien en la vista de detalle del destino.
