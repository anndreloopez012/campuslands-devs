# Ejercicio 06 — App de reservas turísticas

**Nombre:** Maria Montepeque
## Solución: árbol de carpetas

```
app-reservas-turisticas/
├── pages/
│   └── listado-destinos.js      
├── components/
│   └── card-destino.md          
├── services/
│   └── servicio-destinos.js    
└── data/
    └── destinos.json           
```

## Responsabilidad de cada capa

| Carpeta | Responsabilidad |
|---|---|
| `pages/` | **Vistas.** Cada archivo es una pantalla de la app (listado, detalle, confirmación de reserva). Solo orquestan: piden datos a `services/` y los pintan con `components/`. No contienen reglas de negocio. |
| `components/` | **Piezas reutilizables de UI.** Bloques visuales que se repiten en varias páginas, como `CardDestino`. Reciben datos por props y emiten eventos; nunca leen `data/` directamente. |
| `services/` | **Lógica.** Única capa que toca los datos. Aquí viven las reglas: filtrar destinos con cupo, validar una reserva, calcular el total de noches. Si mañana los datos vienen de una API en vez de un JSON, solo cambia esta capa. |
| `data/` | **Datos.** Fuente de información de la app. Hoy es un JSON estático; las demás capas no saben (ni les importa) de dónde salen los datos. |

El flujo de la app siempre es: `pages → services → data`, y las páginas usan `components` para renderizar.

## Cómo crecería el proyecto

1. **Más pantallas:** `pages/detalle-destino.js`, `pages/mis-reservas.js`, `pages/confirmacion-reserva.js`. Cada pantalla nueva es un archivo nuevo en `pages/`, sin tocar lo existente.
2. **Más componentes:** `components/buscador-destinos`, `components/calendario-fechas`, `components/resumen-reserva`. Cada uno con su `.md` de documentación junto al código, igual que `card-destino.md`.
3. **Más servicios:** `services/servicio-reservas.js` (crear/cancelar reservas) y `services/servicio-pagos.js`. La lógica nueva nunca se mete en las páginas.
4. **Datos reales:** `data/destinos.json` se reemplaza por una API. Como las páginas solo hablan con `services/`, el cambio queda aislado en una sola capa.
5. **Si las carpetas crecen mucho**, se agrupan por funcionalidad: `services/destinos/`, `services/reservas/`, manteniendo el mismo criterio de separación.

## Cómo pensé el problema

1. Leí el README dos veces e identifiqué: entrada = requisitos de estructura, proceso = separar vistas/datos/lógica, salida = árbol documentado con archivos de ejemplo.
2. Usé la regla "cada capa con una sola responsabilidad": las páginas pintan, los servicios piensan, los datos solo existen. Eso hace que el componente `CardDestino` no necesite saber de dónde vienen los destinos.
3. Elegí nombres del contexto turístico (`destinos`, `listado-destinos`, `servicio-destinos`, `cuposDisponibles`, `precioPorNoche`) y evité genéricos como `cosas`, `varios`, `utils` o `data1`.
4. Dejé un archivo de ejemplo por carpeta, conectados entre sí con `require`, para que la estructura se lea como un proyecto real y no como carpetas vacías.

## Evidencia de validación

Comandos ejecutados (copiados como texto):

```
$ git checkout dev
$ git checkout -b feature/ejercicio-06-nombre-apellido
$ mkdir -p pages components services data
$ git status
On branch feature/ejercicio-06-nombre-apellido
Untracked files:
  basico/estructura/ejercicio-06/resoluciones/nombre-apellido/
```

Validación ejecutando el código de ejemplo con Node:

```
$ node validar.js
--- Caso normal: listado completo ---
CardDestino -> Antigua Guatemala ($85/noche)
CardDestino -> Lago de Atitlán ($60/noche)
CardDestino -> Tikal ($95/noche)
--- Caso límite: destino agotado (Tikal, cupos = 0) excluido del filtro ---
[ 'Antigua Guatemala', 'Lago de Atitlán' ]
--- Caso límite: id vacío ---
null
```

Casos validados:

- **Caso normal:** el listado renderiza una tarjeta por cada destino del JSON. ✔
- **Caso límite 1:** Tikal tiene `cuposDisponibles: 0` y queda fuera del filtro de destinos con cupo. ✔
- **Caso límite 2:** buscar con un `id` vacío devuelve `null` en lugar de romper la app. ✔

Validación de nombres (sin genéricos):

```
$ grep -riE "cosas|varios" app-reservas-turisticas/ | wc -l
0
```

## Checklist de entrega

- [x] Carpeta dentro de `resoluciones/nombre-apellido/`
- [x] `pages/`, `components/`, `services/` y `data/` creadas
- [x] `data/destinos.json` con estructura de ejemplo
- [x] `components/card-destino.md` como documentación de componente
- [x] Explicación de cómo crecería el proyecto
- [x] Sin nombres genéricos como `cosas` o `varios`
- [x] Explicación del razonamiento y evidencia de validación
- [x] No se modificaron archivos base del ejercicio ni `.gitkeep`
