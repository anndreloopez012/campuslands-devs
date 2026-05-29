# Solución: Estructura de Estudio Indie de Videojuegos

## Información del Alumno

* **Nombre Completo:** Pablo López Monzón
* **Ruta del Archivo:** `basico/estructura/ejercicio-01/resoluciones/pablo-lopez.md`

---

## Explicación de cómo pensé el problema

Al leer el problema, entendí que un equipo de desarrollo de videojuegos de acción y aventura necesita una base limpia para no perder sus archivos cuando el proyecto crezca. Para resolverlo de forma ordenada, dividí el trabajo en estos pasos:

1. **Ubicación correcta:** Me aseguré en la terminal de estar exactamente dentro de mi carpeta `pablo-lopez` en la ruta de `resoluciones/` para cumplir la regla de no tocar el trabajo de otros compañeros.
2. **Creación del código y documentos:** Creé las carpetas principales (`src`, `docs` y `tests`).
3. **Organización del arte y sonido:** Creé la carpeta `assets` y dentro agregué tres subcarpetas específicas (`images`, `audio` y `maps`), todo escrito estrictamente en minúsculas.
4. **Uso de `.gitkeep`:** Como Git no sube carpetas vacías, agregué un archivo oculto `.gitkeep` en cada carpeta para asegurar que toda la estructura se guardara correctamente.
5. **Documentación del proyecto:** Creé un archivo `README.md` para explicar el propósito y organización del proyecto.

---

## 🛠️ Solución Completa (Estructura Final)

La estructura final de archivos y carpetas creada en el proyecto es la siguiente:

```text
pablo-lopez/
├── assets/
│   ├── audio/
│   │   └── .gitkeep
│   ├── images/
│   │   └── .gitkeep
│   └── maps/
│       └── .gitkeep
├── docs/
│   └── .gitkeep
├── src/
│   └── .gitkeep
├── tests/
│   └── .gitkeep
├── README.md
└── pablo-lopez.md (Este archivo de solución)
```

---

##  Historial de Comandos Ejecutados

Aquí está la lista de comandos utilizados durante el ejercicio:

```powershell
mkdir assets
mkdir assets/images
mkdir assets/audio
mkdir assets/maps

ni assets/images/.gitkeep
ni assets/audio/.gitkeep
ni assets/maps/.gitkeep

mkdir docs
ni docs/.gitkeep

mkdir src
ni src/.gitkeep

mkdir tests
ni tests/.gitkeep

ni README.md
ni pablo-lopez.md

ls
```
