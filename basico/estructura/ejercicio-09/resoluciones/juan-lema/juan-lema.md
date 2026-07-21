# Organizacion de estudio de tatuajes — Juan Lema

## Tematica

Tatuajes y dibujo. Estructura de carpetas para ordenar el trabajo de un
estudio de tatuajes: referencias, disenos, clientes y agenda.

## Estructura de carpetas

```
juan-lema/
├── referencias/              # estilos, ideas y moodboards
│   └── .gitkeep
├── disenos/                  # bocetos documentados con la plantilla
│   └── .gitkeep
├── clientes/                 # fichas con placeholders, sin datos reales
│   └── .gitkeep
├── agenda/                   # citas de ejemplo
│   └── .gitkeep
├── README.md                 # explica privacidad y proposito de cada carpeta
├── plantilla-ficha-diseno.md # formato para documentar cada diseno
└── juan-lema.md               # este archivo (explicacion y evidencia)
```

## Como se conecta cada carpeta

- `referencias/` es la entrada: material de inspiracion para nuevos disenos.
- `disenos/` es el proceso: cada boceto se documenta copiando
  `plantilla-ficha-diseno.md` y completandola con ID, cliente y estado.
- `clientes/` conecta cada diseno con la persona (placeholder) que lo pidio.
- `agenda/` es la salida: una vez aprobado el diseno, se agenda la cita.

Flujo: `referencias/` (entrada) → `disenos/` (proceso, con la plantilla)
→ `clientes/` → `agenda/` (salida).

## Como pense el problema

1. Identifique entrada, proceso y salida del negocio, no solo del codigo:
   - Entrada: ideas y referencias visuales.
   - Proceso: convertir esas ideas en un diseno documentado y asociarlo a un cliente.
   - Salida: una cita agendada para realizar el tatuaje.
2. Separe cada responsabilidad en su propia carpeta para no mezclar
   inspiracion, trabajo en progreso, datos de clientes y calendario.
3. Cree una plantilla reutilizable (`plantilla-ficha-diseno.md`) en vez de
   escribir cada ficha desde cero, para mantener consistencia entre disenos.
4. Antes de nada, defini las reglas de privacidad en el `README.md` para que
   quede claro que no se sube informacion real de clientes.

## Notas tecnicas

- Todos los nombres de carpeta van en minusculas y sin espacios ni tildes
  (`disenos`, no `diseños`), para evitar problemas de compatibilidad entre
  sistemas operativos y en rutas de Git.
- Cada carpeta contiene un `.gitkeep` para que Git la registre aunque este
  vacia, ya que Git no versiona carpetas vacias por si solas.
- Los "datos de clientes" siempre son placeholders (`cliente-001`,
  `cliente-002`, ...), nunca nombres o contactos reales.
- Las imagenes se representan como archivos de texto placeholder
  (`placeholder-imagen.txt`) en lugar de fotos reales.

## Validacion (dos casos)

Caso normal — un diseno completo documentado de principio a fin:

```
referencias/moodboard-blackwork.txt
disenos/diseno-001.md        (cliente-001, estilo blackwork, estado: agendado)
clientes/cliente-001.md
agenda/cita-2026-08-03.md
```

Caso limite — carpeta sin disenos todavia (estudio recien iniciado): las
carpetas `disenos/`, `clientes/` y `agenda/` existen y estan versionadas
gracias a `.gitkeep`, aunque no tengan fichas aun. El `README.md` sigue
siendo valido como guia para cuando se agregue el primer diseno.
