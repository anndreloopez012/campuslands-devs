# Solución del Ejercicio 01: Estructura de estudio indie

**Estudiante:** Evelyn Barrios  
**Contexto:** Estructura de archivos para un proyecto de videojuegos de acción y aventura.

---

## 1. Explicación del razonamiento

Para resolver este problema, analicé los requisitos de organización y decidí estructurar el proyecto de forma modular. 
- Creé una carpeta principal con mi nombre para no interferir con el trabajo de otros compañeros.
- Las carpetas están divididas de la siguiente manera:

- `assets`/`audio`   
Aquí están los efectos de sonido que se le podrían agregar a la página; en este caso, como es un videojuego, debe tener efectos de sonido.

- `assets` / `images`
Aquí están todos los recursos visuales que se usarán en el videojuego: imágenes y diseños.

- `assets` / `maps`
Es muy común colocar aquí archivos de tipo JSON que ya contienen escenarios, texturas, coordenadas, etc. 

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

1. **Sincronización con la rama de integración oficial (dev):**
   ```bash
   git fetch --all
   git checkout dev
   git pull upstream dev
   ```

2. **Creación de rama propia con formato estándar:**
   ```bash
   git checkout -b alumno/evelyn-barrios/ejercicio-01
   ```

- git status
- git add .
- git commit -m "feat(estructura): resolver ejercicio 01"
- git push origin alumno/evelyn-barrios/ejercicio-01