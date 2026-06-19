# Ejercicio 08 — Gestión de menú urbano

**Autor:** Maria Montepeque

---

## Razonamiento

El objetivo es organizar los archivos de un proyecto de menú de forma que sea escalable, legible y mantenible. Pensé el problema en tres capas:

1. **Datos estructurados** (`menu/`) — lo que el sistema procesa y lee.
2. **Recursos visuales** (`assets/photos/`) — lo que el usuario ve, pero que el código referencia, no almacena.
3. **Documentación y scripts** (`docs/`, `scripts/`) — las reglas del negocio y las herramientas de apoyo.

Separar imágenes de datos es la decisión más importante del ejercicio. Un archivo JSON que referencia rutas de imágenes es portable, versionable y fácil de leer. Un JSON que *contiene* imágenes (en base64, por ejemplo) se vuelve ilegible, lento de parsear y difícil de versionar con Git.

---

## Árbol de carpetas

```
resoluciones/maria-montepeque/
├── solucion.md                        ← este archivo
├── validar.js                         ← script de validación
│
├── menu/
│   ├── platos/
│   │   └── platos.json                ← datos de platos principales
│   ├── bebidas/
│   │   └── bebidas.json               ← datos de bebidas
│   └── combos/
│       └── combos.json                ← combos (plato + bebida)
│
├── assets/
│   └── photos/
│       ├── platos/                    ← fotos de platos (jpg/webp)
│       ├── bebidas/                   ← fotos de bebidas
│       └── combos/                    ← fotos de combos
│
├── docs/
│   └── reglas-precios.md              ← reglas de negocio para precios
│
└── scripts/
    └── (scripts de apoyo futuros)
```

---

## Ejemplo: `menu/platos/platos.json`

Caso normal — plato completo con todos sus campos:

```json
[
  {
    "id": "hamburguesa-clasica",
    "nombre": "Hamburguesa Clásica",
    "descripcion": "Carne de res, lechuga, tomate, cebolla y salsa especial.",
    "categoria": "plato",
    "precio": 65.00,
    "disponible": true,
    "foto": "assets/photos/platos/hamburguesa-clasica.jpg"
  },
  {
    "id": "pasta-alfredo",
    "nombre": "Pasta Alfredo",
    "descripcion": "Fettuccine con salsa cremosa de parmesano.",
    "categoria": "plato",
    "precio": 72.50,
    "disponible": true,
    "foto": "assets/photos/platos/pasta-alfredo.jpg"
  }
]
```

Caso límite — plato sin foto y precio en cero (fuera de carta):

```json
[
  {
    "id": "sopa-del-dia",
    "nombre": "Sopa del Día",
    "descripcion": null,
    "categoria": "plato",
    "precio": 0,
    "disponible": false,
    "foto": null
  }
]
```

---

## `docs/reglas-precios.md`

```markdown
# Reglas de precios — Menú Urbano

## Reglas generales

- Todos los precios se expresan en quetzales (GTQ) con dos decimales.
- Un precio de `0` indica que el plato está fuera de carta o en definición.
- Ningún precio puede ser negativo.

## Combos

- El precio de un combo nunca puede ser mayor que la suma de sus componentes individuales.
- El descuento mínimo aplicable en un combo es del 5 %.
- Si un componente del combo no está disponible, el combo completo se marca como no disponible.

## Actualización de precios

- Solo el equipo de operaciones puede modificar precios.
- Todo cambio debe ir acompañado de un commit con mensaje descriptivo.
- Ejemplo de mensaje válido: `fix(menu): actualiza precio hamburguesa clasica a 70.00`.
```

---

## Por qué no conviene mezclar imágenes con datos

| Criterio | Datos en `menu/` | Imágenes en `assets/photos/` |
|---|---|---|
| Formato | JSON (texto legible) | JPG / WebP (binario) |
| Versionable con Git | Sí, sin problema | Binarios crecen el repositorio |
| Velocidad de parse | Instantánea | No aplica (no se parsean) |
| Reutilización | Un JSON referencia la misma foto en varios lugares | La foto existe una sola vez |
| Responsabilidad | Lógica del negocio | Recursos visuales |

**Conclusión:** los archivos JSON contienen únicamente la *ruta* a la imagen (`"foto": "assets/photos/platos/hamburguesa-clasica.jpg"`). Así el dato y el recurso visual tienen ciclos de vida independientes: puedo actualizar una foto sin tocar el JSON, y puedo cambiar un precio sin tocar ninguna imagen.

---

## Comandos Git utilizados

```bash
git checkout dev
git pull origin dev
git checkout -b feature/ejercicio-08-maria-montepeque

# trabajo en la solución...

git add basico/estructura/ejercicio-08/resoluciones/maria-montepeque/
git commit -m "feat(ejercicio-08): agrega solucion de menu urbano de maria-montepeque"
git push origin feature/ejercicio-08-maria-montepeque
```
