# solucion de ejercicio 02: clonar base de torneo RPG

* estudiante: brandon estiben ixen teleguario
* fecha: mayo 2026
modulo: fundamentos de git par aun trabajo colaborativo.

--

## 1. explicacion del razonamiento.

para poder trabajar esto de una mejor manera, dividí el proceso en tres partes muy importantes:

1. **Conexión y Descarga (Aislamiento):** Traer el código base remoto a mi entorno local para no alterar el entorno de producción directamente.

2. **Inspección de Entorno (Contexto):** Diagnosticar en qué punto del mapa de desarrollo (ramas) me encuentro antes de dar cualquier paso en falso.

3. **Documentación Limpia (Entrega):** Registrar de forma fidedigna los comandos aplicados, garantizando la transparencia y la replicabilidad del ejercicio para el resto del equipo de desarrollo.

--

## 2. comandos ejecutivos y evidencia (salida de terminal)

A continuación, se detalla el paso a paso técnico ejecutado en la terminal del sistema:

    ```
    766  git init = para inicializar el repositorio.
    767  git pull = para extraer los documentos, ramas.
    768  git branch -a = para ver las ramas.
    769  git checkout dev = cambiarme a la ma dev.

    771  git branch -a = = ver la rama donde estoy ubicado.
    772  git checkout feature/brandonestibenixenteleguario
    773  cd basico              |
    774  cd git                 |
    775  cd resoluciones        | moverme a las carpetas.
    776  git ejercicio-04       |
    777  cd ejercicio-04        |
    778  cd resoluciones        |
    779  touch estibenixen.md = para crear mi archivo de solucion.
    780  history = ver historial de comandos ingresados en la terminal.
  ```

# comit echo

    ``` 
        camper@campus-H610M-K-V2:~/Documentos/shen/ejercicio/campuslands-devs-2$ git commit -m ":feat(git) ejercico cuatro finalizado"
        [feature/brandonestibenixenteleguario 769c122] :feat(git)       ejercico cuatro finalizado
        1 file changed, 43 insertions(+)
        create mode 100644 basico/git/ejercicio-04/resoluciones/   estibenixen.md

    ```
    