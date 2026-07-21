# Organización del Proyecto: Música

Imagina que este proyecto es como un **estudio de grabación profesional**. Cada carpeta guarda una parte del proceso de producción para evitar pérdidas de archivos o errores en la canción final.

---

## 1. Las Carpetas del Proyecto

* **`tracks/`**: Las grabaciones individuales (voz, guitarra, batería por separado).
* **`samples/`**: Sonidos cortos y efectos usados para construir la canción.
* **`mixes/`**: Pruebas de mezcla donde se ajustan los volúmenes y efectos.
* **`masters/`**: Las versiones finales terminadas y pulidas, listas para publicar en Spotify o YouTube.
* **`docs/`**: Documentación técnica del proyecto.

---

## 2. Documentación (`docs/versionado-audio.md`)

Para saber qué cambio se hizo en cada avance, los archivos se nombran siguiendo una regla fija:

* **Regla de nomenclatura:** `[NombreCancion]_v[Numero].[extension]`
* **Ejemplos de borradores en mezcla:** `cancion-v01.wav`, `cancion-v02.wav`
* **Ejemplo de mezcla terminada:** `cancion-mezcla-final-v01.wav`

---

## 3. Ejemplo de README del Proyecto (`README.md`)

# Proyecto Musical - Álbum 2026

## Información General
- **Artista / Banda:** Los Sonidos
- **Género:** Rock Progresivo
- **Estado:** En proceso de mezcla

## Estructura de Trabajo
- **Nombres de archivos de mezcla:** Usar siempre el formato `cancion-v01.wav`.
- **Archivos finales:** Se guardan únicamente en la carpeta `masters/`.

---

## 4. ¿Por qué los MASTERS no se mezclan con los BORRADORES?

* **Evitar errores graves:** Si envías un borrador por error a una radio o plataforma digital, la canción sonará mal o incompleta.
* **Proteger el trabajo final:** La carpeta `masters/` es como la caja fuerte del estudio. Solo contiene lo que ya fue aprobado y no debe modificarse accidentalmente.