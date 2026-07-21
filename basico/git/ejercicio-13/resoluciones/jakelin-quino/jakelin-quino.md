# Ejercicio 13 Git

## Paso a paso (comandos y qué hacen)
```bash
# Crear archivo estructura.md
echo "# Estructura de proyecto 3D" > estructura.md
echo "## Archivos" >> estructura.md
echo "- README.md" >> estructura.md

# Guardar en Git
git add estructura.md
git commit -m "Crea estructura base del proyecto 3D"

# Crear rama para modelado
git checkout -b feature/modelado

# Luego de agregar sección, volver a dev y crear rama para renders
# Editar estructura.md
echo "" >> estructura.md
echo "## Modelado 3D" >> estructura.md
echo "- personajes.blend" >> estructura.md
echo "- escenarios.blend" >> estructura.md

# Guardar cambios
git add estructura.md
git commit -m "Agrega sección de modelado 3D"

# Agregar sección de renders
# Editar estructura.md
echo "" >> estructura.md
echo "## Renders" >> estructura.md
echo "- escena-final.png" >> estructura.md
echo "- vista-previa.jpg" >> estructura.md

# Guardar cambios
git add estructura.md
git commit -m "Agrega sección de renders"

# Intentar fusionar (genera conflicto)
git checkout dev
git merge feature/modelado

# Fusionar renders (aquí hay conflicto)
git merge feature/renders

# Resolver el conflicto (conservar ambas secciones)
# Editar estructura.md manualmente

# Marcar como resuelto y hacer commit
git add estructura.md
git commit -m "Resuelve conflicto: conserva modelado y renders"

# Ver historial de commits
git log --oneline
# xyz7890 (HEAD -> dev) Resuelve conflicto: conserva modelado y renders
# def5678 (feature/renders) Agrega sección de renders
# ghi9012 (feature/modelado) Agrega sección de modelado 3D
# abc1234 Crea estructura base del proyecto 3D