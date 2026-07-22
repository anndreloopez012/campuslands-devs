# Resolución ejercicio 15 de git

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula el ciclo de vida completo de entrega de una funcionalidad en un proyecto real de gestión de inventario de ropa (`catalogo_ropa.md`). Se crea una rama de trabajo desde `dev`, se agrega un cambio atómico con un commit descriptivo, se sincroniza la rama local descargando posibles actualizaciones remotas de `dev` mediante `git pull` para prevenir conflictos, y finalmente se prepara una lista de chequeo (checklist) profesional para la revisión final.

```bash
git checkout dev
git checkout -b feature/catalogo-invierno-ropa

echo "# Catálogo Colección Invierno\n- Abrigo de lana gris\n- Chaqueta impermeable" > catalogo_ropa.md
git add catalogo_ropa.md
git commit -m "Agrega prendas base para coleccion de invierno"

git checkout dev
git pull origin dev

git checkout feature/catalogo-invierno-ropa
git merge dev

git push origin feature/catalogo-invierno-ropa

git log --oneline --graph --all
```

```markdown
### Checklist de Entrega Profesional

- [x] **Aislamiento de código:** El trabajo se realizó en una rama secundaria derivada de `dev`.
- [x] **Calidad de commits:** Mensajes claros, en formato imperativo y enfocados en un único cambio atómico.
- [x] **Sincronización:** Se ejecutó `git pull` sobre `dev` y se integraron cambios recientes a la rama de feature antes de publicar.
- [x] **Publicación remota:** La rama local fue enviada exitosamente al servidor con `git push`.
- [x] **Validación del historial:** Se revisó el árbol con `git log` verificando un historial limpio y sin conflictos pendientes.
```

- Breve explicación

Primero, se crea la rama `feature/catalogo-invierno-ropa` partiendo de `dev` para documentar los nuevos productos de vestimenta. Se registra un commit claro y enfocado únicamente en la adición de dicho catálogo.

A continuación, para simular un flujo de trabajo en un entorno real donde otros desarrolladores pueden haber publicado cambios en paralelo, se regresa a `dev` local para descargar las últimas novedades del servidor mediante `git pull origin dev`. Luego, se vuelve a la rama de la funcionalidad y se fusiona `dev` en ella, asegurando que la solución esté 100% actualizada y libre de conflictos antes de enviar los cambios al repositorio remoto con `git push`.

Finalmente, se completa una lista de verificación profesional (checklist) que valida que la tarea cumple con los estándares de calidad, orden y trazabilidad exigidos en proyectos reales de desarrollo colaborativo.