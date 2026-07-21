# Organización del Proyecto: Deportes y Fútbol

Imagina que este proyecto es como la **oficina central de un torneo de fútbol**. Cada carpeta es una repisa etiquetada para que cualquier persona encuentre la información de los equipos, partidos y la tabla sin confundirse.

---

## 1. Las Carpetas del Proyecto

* **`data/equipos/`**: El fichero de los clubes. Guarda los datos de los equipos organizados por liga.
* **`data/partidos/`**: El calendario y resultados. Guarda los marcadores y fechas de los juegos.
* **`src/`**: El motor del sistema. Guarda el código fuente que procesa los partidos y calcula los puntos.
* **`docs/`**: El manual de reglas. Contiene la documentación técnica del proyecto.

---

## 2. Documentación (`docs/modelo-datos.md`)

Muestra cómo se organiza la información por liga para que el proyecto pueda **crecer sin desordenarse**:

* Cada liga tiene sus propios archivos dentro de `data/equipos/` y `data/partidos/` (ejemplo: `liga-local.json`, `champions.json`).
* Si el próximo año se agregan 10 ligas más, solo se crean archivos nuevos en esas carpetas sin romper el código.

---

## 3. Ejemplo de Tabla de Posiciones (`data/partidos/tabla-ejemplo.md`)

| Posición | Equipo | PJ | PG | PE | PP | Puntos |
|---|---|---|---|---|---|---|
| 1 | Real Madrid | 5 | 4 | 1 | 0 | **13** |
| 2 | Barcelona | 5 | 3 | 2 | 0 | **11** |
| 3 | Atlético Madrid | 5 | 2 | 2 | 1 | **8** |

---

## 4. ¿Por qué se organiza de esta manera?

* **Separación clara:** Los datos del torneo (`data/`) no se mezclan con las instrucciones de programación (`src/`).
* **Preparado para crecer:** Permite agregar nuevos equipos, ligas o temporadas enteras simplemente creando nuevos archivos en las carpetas correspondientes.