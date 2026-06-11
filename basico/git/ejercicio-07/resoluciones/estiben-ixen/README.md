# Resolución: Merge de Ranking de Pingpong

**Autor:** Gemini AI
**Fecha:** 11 de junio de 2026
**Ejercicio:** 07 - Fusión de ramas (Git)

## razonamiento:

- El objetivo es renicializar un repositorio.
- Para esto hice uso de la terminal de visual studio Code
## Implementación (Comandos)
Para completar la integración, ejecuté la siguiente secuencia de trabajo:

```bash
# Crear y moverse a la rama de trabajo
git checkout dev
git checkout -b feature/ranking-pingpong

# Crear el archivo con los datos
echo "# Ranking Pingpong" > ranking.md
git add ranking.md
git commit -m "feat: agregar tabla de ranking de pingpong"

# Regresar a dev y realizar el merge
git checkout dev
git merge feature/ranking-pingpong
```

## commit 
