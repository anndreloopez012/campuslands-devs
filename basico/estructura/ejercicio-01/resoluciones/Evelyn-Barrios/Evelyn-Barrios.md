# Estructura de Estudio Indie 

**Desarrolladora:** Evelyn Barrios  


---

## 1. Organización del Proyecto

Para este proyecto de acción y aventura, organicé los archivos dividiendo el trabajo por áreas claras, simulando cómo opera un estudio de desarrollo real:

* **`src/`**: La carpeta destinada a guardar el código fuente y la lógica del videojuego.
* **`docs/`**: Espacio exclusivo para los documentos de diseño, guiones o manuales técnicos.
* **`tests/`**: Lugar reservado para las pruebas que aseguran que el juego funcione sin errores.
* **`assets/`**: El contenedor principal de los recursos visuales y sonoros, separado minuciosamente en:
  * `images/`: Para las texturas, interfaces y arte gráfico.
  * `audio/`: Para la música de fondo y los efectos de sonido.
  * `maps/`: Para los diseños de los niveles y escenarios de la aventura.

> 📌 **Nota sobre las carpetas:** Como Git no puede registrar carpetas que estén completamente vacías, coloqué un archivo oculto llamado `.gitkeep` dentro de ellas. Esto asegura que la estructura se mantenga intacta al subirla al repositorio.

---

## 2. Bitácora del Trabajo con Git (Paso a Paso)

Para garantizar un flujo de trabajo limpio y profesional, realicé los siguientes pasos directamente desde la terminal de comandos:

* **Vincular el proyecto (`git remote -v`)**: Primero revisé las conexiones de mi entorno. Confirmé que tengo mi copia personal para subir mis tareas (`origin`) y la conexión directa al repositorio original del profesor (`upstream`).
* **Actualizar el contenido (`git fetch upstream`)**: Descargué las últimas novedades y ejercicios que el profesor subió al servidor de la clase para asegurarme de trabajar con lo más reciente.
* **Resolver el conflicto de 'dev'**: Al intentar moverme a la rama de desarrollo, el sistema se confundió porque había dos ramas llamadas igual (la mía y la del profesor). Lo solucioné usando un comando específico que tomó la rama `dev` del profesor como molde base para crear mi entorno seguro de tareas.
* **Personalizar la rama (`git branch -m`)**: Para mantener un orden estricto por materias y ejercicios, renombré mi rama de trabajo local a `alumno/evelyn-barrios/estructura-ejercicio-01`, dejando en claro que corresponde al área de **Estructura**.
* **Limpieza del servidor (`git push origin --delete`)**: Borré una rama antigua que se había quedado guardada en mi perfil de GitHub para evitar confusiones visuales en el historial y mantener mi espacio 100% limpio.
* **Verificación de estado (`git status`)**: Revisa que todo estuviera en orden. El sistema me confirmó que la rama está limpia, perfectamente actualizada y lista para recibir los nuevos archivos del ejercicio.

---

## 3. Razonamiento y Conclusión

Este ejercicio me permitió entender la importancia del orden antes de escribir código. Al separar el arte y el sonido en la carpeta `assets` y la lógica en `src`, se evita que diferentes miembros de un equipo (como artistas y programadores) mezclen sus archivos por accidente. Trabajar con ramas independientes garantiza que cada tarea se evalúe por separado sin alterar el proyecto principal.