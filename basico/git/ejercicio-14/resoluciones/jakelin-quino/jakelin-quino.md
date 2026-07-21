# PEjercicio 14 Git

## Paso a paso (comandos y qué hacen)

### 1. Crear rama personal desde dev
```bash
git checkout dev
git checkout -b feature/formula-quimica

# Crear carpeta con formato nombre-apellido
mkdir -p basico/git/ejercicio-14/resoluciones/tu-nombre-apellido

# Moverse a la carpeta
cd basico/git/ejercicio-14/resoluciones/tu-nombre-apellido

# Crear archivo markdown con la solución
echo "# Fórmula química - H2O" > solucion.md
echo "## Composición" >> solucion.md
echo "- Hidrógeno: 2 átomos" >> solucion.md
echo "- Oxígeno: 1 átomo" >> solucion.md
echo "" >> solucion.md
echo "## Validación" >> solucion.md
echo "- La fórmula cumple con la regla del octeto" >> solucion.md
echo "- Es una molécula estable" >> solucion.md

# Verificar estado
git status

# Agregar archivos
git add .

# Hacer commit con mensaje descriptivo
git commit -m "Agrega solución ejercicio laboratorio químico"

# Subir cambios al repositorio remoto
git push origin feature/formula-quimica

# Ver estado actual
git status

# Ver historial de commits
git log --oneline