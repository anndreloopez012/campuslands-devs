# 🎮 Solución: Estructura de Estudio Indie de Videojuegos

## 👤 Información del Alumno
- **Nombre Completo:** Angela Sofia de la Cruz Arrivillaga  
- **Ruta del Archivo:** `basico/estructura/ejercicio-01/resoluciones/angela-arrivillaga.md`  

---

## 🧠 Explicación de cómo pensé el problema

Al leer el problema, entendí que un equipo de desarrollo de videojuegos de acción y aventura necesita una base limpia para no perder sus archivos cuando el proyecto crezca. Para resolverlo de forma ordenada, dividí el trabajo en estos pasos:

1. **Ubicación correcta:** Me aseguré en la terminal de estar parada exactamente dentro de mi carpeta `angela-arrivillaga` en la ruta de `resoluciones/` para cumplir la regla de no tocar el trabajo de otros compañeros.
2. **Creación del código y documentos:** Creé las carpetas principales (`src`/`docs`/`tests`).
3. **Organización del arte y sonido:** Creé la carpeta de `assets` y le hice tres subcarpetas específicas (`images`, `audio` y `maps`), todo escrito estrictamente en minúsculas.
4. **Engañar a Git:** Como las carpetas estaban vacías y Git no las sube así, les creé un archivo oculto `.gitkeep` a cada una para obligar a Git a registrar mi estructura.
5. **Guía de uso:** Creé un `README.md`  dentro para explicarle a cualquiera del equipo qué va en cada lugar.

---

## 🛠️ Solución Completa (Estructura Final)

La estructura final de archivos y carpetas que quedó creada en el proyecto es la siguiente:

```text
angela-arrivillaga/
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
└── angela-arrivillaga.md (Este archivo de solución)
```

### 💻 Historial de Comandos Ejecutados 

Aquí tienes la lista limpia de todos los comandos que utilicé durante el ejercicio:

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
mkdir tests
ni tests/.gitkeep
ls
ni README.md
ni angela-arrivillaga.md