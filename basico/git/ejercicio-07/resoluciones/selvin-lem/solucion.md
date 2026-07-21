# Resumen - Merge de ranking de pingpong

## Planteamiento del problema
Se requería crear una rama de trabajo (`feature/ranking-pingpong`), generar un commit con el ranking, y fusionarla hacia `dev` como rama de integración, validando el historial resultante.


## Pasos seguidos
- `git checkout dev`
- `git pull origin dev`
- `git checkout -b feature/ranking-pingpong`
- Crear `ranking.md` y commitear
- `git log --oneline --graph -5`
- Documentar evidencia en `resoluciones/selvin-lem/`
- `git push -u origin dev`