# Solución del Ejercicio 01: Estructura de estudio indie

**Estudiante:** Evelyn Barrios  
**Contexto:** Estructura de archivos para un proyecto de videojuegos de acción y aventura.

---

## 1. Explicación del razonamiento

Para resolver este problema, analicé los requisitos de organización y decidí estructurar el proyecto de forma modular. 
- Creé una carpeta principal con mi nombre para no interferir con el trabajo de otros compañeros.
- las carpetas estan divididas de la siguiente manera:

- `assets`/`audio`   
aqui estan los efectos de sonido que se le podrian agregar a la pagina en este caso como es un videojuego debe de tener efectos de sonido

- `assets` / `images`
aui estan todos los recursos visuales que se usaran en el videojuego, imagenes y diseños

- `assets` / `maps`
es muy comun colocar aqui archivos de tipo json que ya llevan otras cosas como escenarios texturas cordenadas etc 

- `docs` / aqui pueden ir toda la documentacion como los readme, diagramas de flujo para entender el programa

- `src` / aqui van los archivos de codigo modulados, los html, css y javascript 
- `test` / es comun usar esta carpeta para poder hacer pruebas con respecto a bugs y optimizar el proceso 




- Utilicé archivos `.gitkeep` en las carpetas vacías para asegurar que Git pueda rastrear la estructura completa en el repositorio.

---

## 2. Estructura del Proyecto (Árbol de carpetas)

A continuación, se muestra la estructura final generada para el ejercicio:

```text
evelyn-barrios/
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
└── evelyn-barrios.md



## 3. Comandos utilizados en Git

Para desarrollar este ejercicio siguiendo el flujo de trabajo correcto y las reglas establecidas, apliqué los siguientes comandos en la terminal:

1. **Creación y cambio a la rama de trabajo independiente:**
   ```bash
   git checkout -b dev-evelyn-barrios

- git status

- git add .

- git commit -m "feat: agregar estructura modular y documentacion del ejercicio 01"

- git push origin dev-evelyn-barrios