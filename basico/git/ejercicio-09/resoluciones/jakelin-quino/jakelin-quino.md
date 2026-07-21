# Ejercicio 09 Git

## Paso a paso (comandos y qué hacen)

### 1. Crear la rama del catálogo
```bash
git checkout -b feature/catalogo-sci-fi
```

### Crear o modificar archivos del catálogo
- echo "Lista de películas sci-fi" > catalogo.txt
- git add catalogo.txt
- git commit -m "Agrega catálogo de películas sci-fi"

### Crear rama
git checkout -b feature/catalogo-sci-fi/posters

### Hacer commit
# Crear archivo de posters
- echo "Posters de películas sci-fi" > posters.txt
- git add posters.txt
- git commit -m "Agrega posters de películas sci-fi"

### Volver a la rama principal del catálogo
git checkout feature/catalogo-sci-fi

### git log --oneline
- abc1234 (HEAD -> dev) Merge feature/catalogo-sci-fi
- def5678 (feature/catalogo-sci-fi) Agrega catálogo de películas sci-fi
- ghi9012 (feature/catalogo-sci-fi/posters) Agrega posters de películas sci-fi
- jkl3456 (dev) Estado inicial del proyecto