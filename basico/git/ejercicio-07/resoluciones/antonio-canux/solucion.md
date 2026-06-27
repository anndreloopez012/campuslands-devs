# Resolución: Merge de ranking de pingpong

**Camper:** Antonio Canux

---

## 1. Solución Paso a Paso (Comandos de Git)

A continuación, se detallan los comandos exactos ejecutados en la terminal para resolver el reto, a partir de la rama `dev`.

```bash
# 1. Crear la rama alumno/antonio-canux/ejercicio-07 y moverse a ella
git checkout -b alumno/antonio-canux/ejercicio-07

# 2. Crear el archivo ranking.md con algo de contenido inicial

# 2.1 Preparar el archivo y hacer el commit
git add ranking.md # O git add .
git commit -m "feat: agregar tabla inicial de ranking de ping pong"

# 3. Regresar a la rama dev local
git checkout dev

# 4. Subir rama local al remoto para su posterior PR
git push origin alumno/antonio-canux/ejercicio-07