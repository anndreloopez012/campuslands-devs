# Organizacion de estudio de tatuajes — Juan Lema

## Objetivo

Estructurar las carpetas de un estudio de tatuajes para ordenar referencias,
disenos, clientes y agenda, siguiendo un formato que un equipo real podria usar.

## Estructura de carpetas

```
juan-lema/
├── referencias/              # imagenes o notas de estilos, ideas y moodboards
│   └── .gitkeep
├── disenos/                  # bocetos y disenos propios en proceso o finalizados
│   └── .gitkeep
├── clientes/                 # fichas de clientes (solo placeholders, sin datos reales)
│   └── .gitkeep
├── agenda/                   # citas y disponibilidad del estudio
│   └── .gitkeep
├── README.md                 # este archivo (privacidad y proposito de cada carpeta)
├── plantilla-ficha-diseno.md # plantilla para documentar cada diseno solicitado
└── juan-lema.md               # explicacion del proceso y validacion del ejercicio
```

## Privacidad de datos

Esta estructura esta pensada para uso academico, por lo que se siguen estas reglas:

- La carpeta `clientes/` nunca contiene datos reales (nombres completos, telefonos,
  direcciones o fotos de personas). Solo se usan placeholders como
  `cliente-001`, `cliente-002`, etc.
- La carpeta `referencias/` solo guarda material de estilo o inspiracion, nunca
  informacion personal de clientes.
- Cualquier imagen "real" que se necesite para ejemplificar el flujo se reemplaza
  por una nota de texto indicando que ahi iria la imagen (`placeholder-imagen.txt`).
- La carpeta `agenda/` guarda horarios de ejemplo, no datos de contacto reales.

## Como se conecta cada carpeta

1. `referencias/` alimenta el proceso creativo: de ahi salen ideas para `disenos/`.
2. `disenos/` documenta cada boceto usando `plantilla-ficha-diseno.md` como base.
3. `clientes/` asocia cada diseno con un cliente (placeholder) que lo solicito.
4. `agenda/` programa la cita donde se realizara el tatuaje ya aprobado.

Flujo: `referencias/` → `disenos/` (con `plantilla-ficha-diseno.md`) → `clientes/`
→ `agenda/`.
