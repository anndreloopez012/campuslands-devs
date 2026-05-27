# Entregable: Inicializar repo de equipo esports
**Estudiante:** María Montepeque  
**Dificultad:** Básica retadora  
**Temática:** Videojuegos Shooters (Equipo de Esports: *Apex Predators*)  

---

## 1. Explicación de cómo lo pensé

Para este ejercicio, me imaginé que estaba creando desde cero el espacio de trabajo para un equipo profesional de shooters (en este caso, de Apex Legends). Mi lógica para dar cada paso con Git fue la siguiente:

1. **Crear una carpeta aparte (`mkdir` y `cd`):** Lo primero era armar una carpeta totalmente limpia y fuera del proyecto principal para no mezclar los archivos ni alterar el historial de las otras tareas.
2. **Arrancar Git (`git init`):** Ejecuté este comando para que Git empiece a rastrear todo lo que pasa dentro de la nueva carpeta de mi equipo.
3. **Crear el README (`README.md`):** Un buen proyecto de esports necesita presentarse bien. Armé un archivo inicial con el nombre de la escuadra, la temática de shooters y puse mi usuario como capitana del equipo.
4. **Preparar el archivo (`git add`):** Antes de guardar el cambio definitivo, pasé el README al área de preparación (*staging area*) para confirmar que ese era el archivo que quería registrar.
5. **Hacer el commit (`git commit`):** Hice mi primer commit usando un mensaje claro y profesional. Usé el prefijo `feat:` para dejar bien documentado que estaba añadiendo una nueva característica (la base del proyecto).

---

## 2. Comandos usados y evidencias

Aquí dejo el texto exacto de lo que ejecuté en mi terminal y las respuestas que me dio el sistema:

### Paso 1: Crear e ingresar a la carpeta del proyecto
```bash
mkdir apex-esports-repo
cd apex-esports-repo