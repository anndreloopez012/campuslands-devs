# Ejercicio 15 Git

## Paso a paso (comandos y qué hacen)

### 1. Crear rama desde dev
```bash
git checkout dev
git pull origin dev
git checkout -b feature/ropa-proyecto

# Crear carpeta personal
mkdir -p basico/git/ejercicio-15/resoluciones/tu-nombre-apellido

# Crear archivo solución
cd basico/git/ejercicio-15/resoluciones/tu-nombre-apellido
echo "# Proyecto de ropa" > solucion.md
echo "- Camisetas: 10 unidades" >> solucion.md
echo "- Pantalones: 5 unidades" >> solucion.md

git add .
git commit -m "Agrega solución proyecto ropa - inventario inicial"

git checkout dev
git pull origin dev
git checkout feature/ropa-proyecto
git merge dev

# Ver rama actual
git branch

# Ver estado
git status

# Ver historial de commits
git log --oneline

# Ver diferencias con dev
git diff dev

# Ver archivos en mi carpeta
ls basico/git/ejercicio-15/resoluciones/tu-nombre-apellido/