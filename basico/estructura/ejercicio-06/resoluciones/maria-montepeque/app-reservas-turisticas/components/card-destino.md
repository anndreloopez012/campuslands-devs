# Componente: CardDestino

Tarjeta que muestra la información resumida de un destino turístico dentro del listado de la app de reservas.

## Propósito

Mostrar un destino de forma visual y compacta para que el usuario pueda compararlo con otros y decidir si quiere reservarlo. Es el bloque que se repite por cada elemento de `data/destinos.json` en la página de listado.

## Propiedades (props)

| Prop | Tipo | Obligatoria | Descripción |
|---|---|---|---|
| `destino` | objeto | Sí | Objeto completo del destino tal como viene de `data/destinos.json`. |
| `alReservar` | función | Sí | Callback que se ejecuta al presionar el botón "Reservar". Recibe el `id` del destino. |
| `modoCompacto` | booleano | No | Si es `true`, oculta la descripción y muestra solo nombre, precio y calificación. Por defecto `false`. |

## Estructura visual

```
┌──────────────────────────────┐
│ [ imagen del destino ]       │
│ Nombre del destino     ★ 4.8 │
│ Descripción corta...         │
│ $85 / noche                  │
│ [ Reservar ]                 │
└──────────────────────────────┘
```

## Estados del componente

- **Disponible:** `cuposDisponibles > 0`. El botón "Reservar" está activo.
- **Agotado:** `cuposDisponibles === 0`. El botón se deshabilita y muestra el texto "Sin cupos".
- **Sin imagen:** si el campo `imagen` viene vacío, se muestra una imagen genérica de respaldo.

## Reglas de uso

1. El componente **no** llama directamente a `services/`; solo recibe datos y emite eventos. Quien consulta los datos es la página que lo usa (`pages/listado-destinos`).
2. Nunca formatea precios por su cuenta: usa la utilidad de formato que provee la página, para mantener una sola fuente de verdad.
3. Si `destino` llega vacío o sin `id`, el componente no se renderiza (caso límite cubierto).

## Ejemplo de uso

```jsx
<CardDestino
  destino={destinoSeleccionado}
  alReservar={(idDestino) => servicioReservas.crearReserva(idDestino)}
/>
```
