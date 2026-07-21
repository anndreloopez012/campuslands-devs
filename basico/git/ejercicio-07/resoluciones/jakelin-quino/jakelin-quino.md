# Ejercicio 07 Git
## Crear rama desde dev
- git checkout dev
- git checkout -b feature/ranking-pingpong

## Crear carpeta y archivo ranking.md
- mkdir -p basico/git/ejercicio-07/resoluciones/tu-nombre-apellido
- echo "1. Carlos - 25 pts" > basico/git/ejercicio-07/resoluciones/tu-nombre-apellido/ranking.md
- echo "2. Ana - 22 pts" >> basico/git/ejercicio-07/resoluciones/tu-nombre-apellido/ranking.md
- echo "3. Luis - 18 pts" >> basico/git/ejercicio-07/resoluciones/tu-nombre-apellido/ranking.md

## Commit en rama feature
- git add .
- git commit -m "feat: ranking pingpong"

## Cambiar a dev y fusionar
- git checkout dev
- git merge feature/ranking-pingpong

## Validar historial
git log --oneline --graph

## Salida git merge
``` text
Updating abc123..def456
Fast-forward
 basico/git/ejercicio-07/resoluciones/tu-nombre-apellido/ranking.md | 3 +++
 1 file changed, 3 insertions(+)
 create mode 100644 basico/git/ejercicio-07/resoluciones/tu-nombre-apellido/ranking.md
```

## Historial después del merge
* def456 feat: ranking pingpong
* abc123 estructura base dev

## Explicación
- git merge feature/ranking-pingpong fusiona los cambios de la rama en dev
- Como no hubo conflictos, merge fue Fast-forward (avance rápido)
- El historial muestra el commit de la feature integrado en dev