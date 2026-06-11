# Solución Ejercicio 01 - Stefani Sánchez

## Objetivo

Organizar una estructura base para un proyecto indie de videojuegos de acción y aventura.

---

## Estructura creada

```bash
.
├── assets
│   ├── audio
│   │   └── .gitkeep
│   ├── images
│   │   └── .gitkeep
│   └── maps
│       └── .gitkeep
├── docs
│   └── .gitkeep
├── README.md
├── resoluciones
│   └── stefani-sanchez.md
├── src
│   └── .gitkeep
└── tests
    └── .gitkeep
    ```

---

## Explicación

Primero analicé los requisitos del ejercicio y organicé las carpetas según su función dentro de un proyecto de videojuegos.

- `src`: contiene el código fuente.
- `assets`: almacena recursos multimedia.
- `docs`: documentación del proyecto.
- `tests`: pruebas del sistema.

Luego separé `assets` en:

- `images`
- `audio`
- `maps`

Agregué archivos `.gitkeep` para que Git pudiera reconocer carpetas vacías.

Finalmente validé la estructura usando comandos como:

```bash
find .
git status
```

---

## Evidencia de validación

Comandos utilizados:

```bash
git add .
git commit -m "Organizar estructura base de videojuego aventura"
git push -u origin alumno/stefani-sanchez/ejercicio-01
```

---

## Validación final

✅ Carpetas creadas correctamente  
✅ Uso de nombres en minúscula  
✅ Archivo ubicado en `resoluciones/`  
✅ Rama correcta utilizada  
✅ Commit realizado correctamente