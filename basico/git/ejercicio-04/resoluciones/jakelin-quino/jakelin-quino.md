# Ejercicio 04 Git
## 1. Desde main cambiar a dev
git checkout dev

## 2. Crear rama personal desde dev
git checkout -b feature/inventario

## 3. Crear carpeta personal
- mkdir -p basico/git/ejercicio-04/resoluciones/jakelin-quino
- cd basico/git/ejercicio-04/resoluciones/jakelin-quino

## 4. Crear archivo inventario.md con estructura base
Contenido en inventario.md

## 5. Primer commit: estructura
- git add inventario.md
- git commit -m "feat: estructura base del inventario"

## 6. Agregar sección armas
Contenido en inventario.md

## 7. Segundo commit: armas
- git add inventario.md
- git commit -m "feat: sección armas del inventario"

## 8. Agregar curaciones y utilidad
Nuevo contendio a inventario.md

## 9. Tercer commit: curaciones y utilidad
git add inventario.md
git commit -m "feat: curaciones y utilidad del inventario"

## 10. Revisar historial
git log --oneline

## 11. Hacer PR
git pull origin feature/inventario