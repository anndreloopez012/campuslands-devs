# Ejercicio 01 - Inicializar Repo de Equipo eSports
**Estudiante:** Maria Jose Montepeque Zet
**Contexto:** Videojuegos Shooters (Tactical Shooters)

---

## 1. Explicación del Razonamiento
Para resolver este problema, dividí el proceso en tres etapas clave del flujo de trabajo profesional con Git:
1. **Aislamiento y Preparación:** Entender que el proyecto requería un espacio limpio. Decidí simular el entorno del equipo de eSports creando una carpeta independiente para no interferir con el repositorio base del curso.
2. **Inicialización y Estructura:** Utilizar `git init` para transformar esa carpeta en un repositorio local. Diseñé un `README.md` temático para un equipo de shooters tácticos (estilo Valorant/Counter-Strike) que incluye el nombre del equipo, la lista de jugadores y sus roles.
3. **Confirmación Profesional:** Utilizar un flujo limpio con `git add` y realizar el primer commit utilizando el mensaje oficial requerido para el control de la entrega: `"Resolver ejercicio 01 de git"`.

---

## 2. Desarrollo del Ejercicio (Comandos Ejecutados)
A continuación, se dejan los comandos de Git que se usarían para simular el caso real en una carpeta externa:

```bash
mkdir equipo-esports-tactical
cd equipo-esports-tactical
git init
echo "# Vanguard Strike - eSports Team" > README.md
git status
git add README.md
git commit -m "Resolver ejercicio 01 de git"