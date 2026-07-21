# App de reservas turísticas — Juan Lema

## Tematica

Turismo. Base ordenada de una app de reservas de destinos, separando
vistas, componentes, servicios y datos como lo haria un proyecto real.

## Estructura de carpetas

```
juan-lema/
├── pages/
│   └── inicio.md            # vista principal: lista de destinos
├── components/
│   └── card-destino.md      # tarjeta individual de un destino
├── services/
│   └── destinos-service.md  # acceso y transformacion de datos
├── data/
│   └── destinos.json        # datos de los destinos
└── juan-lema.md              # este archivo (explicacion y evidencia)
```

## Como se conecta cada carpeta

- `data/destinos.json` es la unica fuente de datos del proyecto.
- `services/destinos-service.md` es el unico que lee `data/`. Expone
  funciones (`obtenerDestinos`, `filtrarPorCategoria`,
  `ordenarPorCalificacion`) para que nadie mas toque el JSON directo.
- `pages/inicio.md` usa el service para pedir los datos y luego
  renderiza un `card-destino` por cada destino recibido.
- `components/card-destino.md` solo sabe pintar un destino individual;
  no sabe de donde vienen los datos ni como se ordenan.

Flujo: `data/destinos.json` (datos) → `services/destinos-service`
(proceso) → `pages/inicio` (orquesta) → `components/card-destino`
(salida visual repetida).

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: lista de destinos turisticos (JSON).
   - Proceso: leer, filtrar y ordenar esos destinos.
   - Salida: tarjetas visuales dentro de la pagina de inicio.
2. Separe cada responsabilidad en su propia carpeta para que el
   proyecto pueda crecer sin mezclar datos, logica y vista:
   - `data/` no sabe nada de como se muestra la informacion.
   - `services/` no sabe nada de HTML ni de estilos.
   - `components/` no sabe de donde vienen los datos.
   - `pages/` es la unica que conecta todo.
3. Evite nombres genericos como `cosas/` o `varios/`; cada carpeta
   describe exactamente su responsabilidad (`pages`, `components`,
   `services`, `data`).

## Notas tecnicas

- `destinos.json` incluye un destino con `calificacion: 0` a proposito,
  para dejar documentado el caso limite de "sin resenas todavia".
- Ningun archivo de `pages/` o `components/` deberia acceder al JSON
  directamente; siempre pasan por `services/destinos-service`.

## Validacion (dos casos)

Caso normal — destino con datos completos:

```
Antigua Guatemala — cultural — ★ 4.8 — $45/noche
```

Caso limite — destino con `calificacion: 0` ("Destino sin resenas"):
en vez de mostrar "★ 0", la tarjeta muestra el texto
"Sin calificaciones aun", documentado en `components/card-destino.md`.
Si `data/destinos.json` llegara vacio, `pages/inicio.md` muestra el
mensaje "No hay destinos disponibles por ahora." en lugar de una
pantalla en blanco.
