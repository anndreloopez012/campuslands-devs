# Sistema de taller de motos — Juan Lema

## Tematica

Mecanica de motos. Estructura de proyecto para gestionar las ordenes de
reparacion de un taller: clientes, sus motos y las ordenes que se abren
sobre esas motos.

## Estructura de carpetas

```
juan-lema/
├── modules/
│   ├── clientes/
│   │   └── clientes.md      # datos de clientes y como se relacionan con motos
│   ├── motos/
│   │   └── motos.md         # datos tecnicos de cada moto
│   └── ordenes/
│       └── ordenes.md       # ordenes de reparacion e historial por moto
├── docs/
│   └── flujo-reparacion.md  # explica el recorrido completo de una moto
├── config/
│   └── settings.example.json # configuracion general del taller (ejemplo)
└── juan-lema.md              # este archivo (explicacion y evidencia)
```

## Como se conecta cada modulo

- `modules/clientes` guarda a las personas duenas de las motos.
- `modules/motos` guarda cada moto y la referencia (`clienteId`) al cliente
  que es su dueno.
- `modules/ordenes` guarda cada reparacion y la referencia (`motoPlaca`) a
  la moto que la origino.
- `docs/flujo-reparacion.md` explica en texto y con un diagrama simple como
  esos tres modulos se conectan de principio a fin.
- `config/settings.example.json` no pertenece a ningun cliente, moto u orden;
  guarda valores generales del taller (nombre, horario, estados validos).

Flujo: `clientes` (quien es el dueno) → `motos` (que vehiculo entra) →
`ordenes` (que reparacion se hace) → `docs/flujo-reparacion.md` documentando
todo el recorrido.

## Como pense el problema

1. Identifique las tres entidades reales del negocio: cliente, moto y orden
   de reparacion, y note que cada una tiene datos distintos que no deben
   mezclarse.
2. Puse cada entidad en su propio modulo dentro de `modules/` para que cada
   carpeta tenga una sola responsabilidad (organizar clientes, organizar
   motos, u organizar ordenes).
3. Separe la explicacion del flujo completo (`docs/flujo-reparacion.md`) de
   los datos de cada modulo, porque el flujo describe el proceso, no una
   entidad.
4. Cree `config/settings.example.json` para los valores que son del taller
   en general y no de un cliente, moto u orden especifico (evita mezclar
   configuracion con datos de negocio).
5. Evite archivos sueltos: todo archivo vive dentro de la carpeta del modulo
   al que pertenece.

## Notas tecnicas

- La relacion entre modulos se hace por referencia (`clienteId`, `motoPlaca`),
  no duplicando datos completos, para no repetir informacion si un cliente
  o una moto cambian de datos.
- `settings.example.json` es un archivo de ejemplo (no contiene datos reales
  ni credenciales); sirve como plantilla de configuracion.
- El campo `estado` de una orden solo acepta tres valores fijos
  (`recibida`, `en_proceso`, `entregada`) para evitar estados inconsistentes.

## Validacion (dos casos)

Caso normal — cliente con una moto y una orden en proceso:

```
Cliente: Luis Marroquin (C001)
Moto: P-123ABC — Yamaha FZ 150 (2021)
Orden: OR-0001 — estado: en_proceso — mecanico: Ana Gomez
```

Caso limite — cliente sin motos registradas todavia: el arreglo `motos` del
cliente queda vacio (`"motos": []`) y por lo tanto no puede existir ninguna
orden asociada a el hasta que se registre al menos una moto. La estructura
no se rompe ni genera datos huerfanos porque toda orden depende de que
exista primero una moto con `clienteId` valido.