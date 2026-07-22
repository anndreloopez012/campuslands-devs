# Resolución ejercicio 09 de git

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula el trabajo con ramas dependientes (sub-features) en un catálogo de películas de ciencia ficción (`sci-fi.md`). Se crea la rama principal `feature/catalogo-sci-fi` y, derivándose de ella, la rama secundaria `feature/catalogo-sci-fi/posters`. Se realizan commits independientes en cada una, para luego integrar primero la rama secundaria en la rama de feature principal y finalmente fusionar esta última en la rama `dev`.

```bash
git checkout dev
git checkout -b feature/catalogo-sci-fi
echo "# Catálogo Sci-Fi\n- Blade Runner 2049" > sci-fi.md
git add sci-fi.md
git commit -m "Agrega lista base de peliculas sci-fi"

git checkout -b feature/catalogo-sci-fi/posters
echo "- Poster: poster_blade_runner.jpg" >> sci-fi.md
git add sci-fi.md
git commit -m "Agrega enlace de poster para Blade Runner"

git checkout feature/catalogo-sci-fi
git merge feature/catalogo-sci-fi/posters

git checkout dev
git merge feature/catalogo-sci-fi

git log --oneline --graph --all
```

- Breve explicación

Primero, partiendo de `dev`, se crea la rama de trabajo `feature/catalogo-sci-fi` para iniciar el archivo `sci-fi.md` con la lista inicial de películas y se guarda un commit. A partir de esta misma rama, se genera una sub-rama llamada `feature/catalogo-sci-fi/posters` para trabajar una funcionalidad específica (los afiches), donde se agrega información de los pósters al archivo y se registra su respectivo commit.

A continuación, se regresa a la rama base de la funcionalidad `feature/catalogo-sci-fi` y se ejecuta `git merge feature/catalogo-sci-fi/posters` para integrar los avances de los afiches dentro de la feature principal.

Finalmente, se vuelve a la rama de integración `dev` y se fusiona la rama `feature/catalogo-sci-fi`, incorporando todo el bloque de cambios desarrollados de forma estructurada. Se valida la jerarquía e historial con `git log --oneline --graph --all`.