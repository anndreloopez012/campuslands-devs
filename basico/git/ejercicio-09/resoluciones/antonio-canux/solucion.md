# Ejercicio 09 - Trabajo con ramas sobre ramas en película sci-fi

**Camper:** Antonio Canux

---

## 1. Secuencia de Comandos (La Solución)

Para resolver este flujo de trabajo colaborativo simulando un entorno real, la secuencia exacta de comandos en Git es la siguiente (tomando en cuenta qe el repositorio ya fue inicializado y partiendo de la rama `dev`). 

```bash
git checkout dev
# 1. Crear y movernos a la rama principal de la feature
git checkout -b feature/catalogo-sci-fi
# 2. Hacer un commit en esta rama principal (simulando trabajo)
echo "Catálogo de películas de ciencia ficción" > catalogo.txt
git add catalogo.txt
git commit -m "feat: crear estructura inicial del catálogo sci-fi"
# 3. Crear la rama secundaria basada en la feature actual
git checkout -b feature/catalogo-sci-fi/posters
# 4. Hacer un commit separado en la rama secundaria
echo "- Blade Runner 2049: poster_link.jpg" > posters.txt
git add .
git commit -m "feat: agregar sección de posters al catálogo"
# 5. Fusionar la rama secundaria en la rama principal (feature)
git checkout feature/catalogo-sci-fi
git merge feature/catalogo-sci-fi/posters