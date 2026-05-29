# Ejercicio 01 de Git - Inicializar Repo de Equipo Esports
**Estudiante:** Maria Jose Montepeque Zet

---

## 1. Explicación del Razonamiento
Para resolver este problema, simulé la creación de un espacio de trabajo independiente para un equipo profesional de videojuegos shooters (enfocado en tácticas de juego). 

El objetivo principal no es solo memorizar comandos, sino comprender el propósito de cada acción:
* **`git init`**: Permite crear el "cerebro" o historial oculto (`.git`) de la carpeta. A partir de ese momento, el proyecto puede registrar el pasado, presente y futuro de los archivos de estrategias.
* **`git add`**: Funciona como una zona de preparación (Staging Area). Sirve para decidir qué planes tácticos están listos para guardarse y cuáles se quedarán fuera temporalmente.
* **`git commit`**: Consolida los archivos preparados en un bloque oficial de la historia del equipo. Usar un mensaje claro permite que cualquier analista o jugador entienda qué cambió exactamente sin revisar todo el código o texto.

---

## 2. Solución y Comandos Utilizados

A continuación, se detallan las acciones ejecutadas en la terminal fuera del repositorio base para la simulación:

1. **Creación del entorno táctico:**
```bash
   cd ~/Desktop
   mkdir equipo-esports-shooters
   cd equipo-esports-shooters