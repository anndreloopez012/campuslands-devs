# Ejercicio 07 — Merge de ranking de ping pong

**Nombre:** Edgar Sánchez

---

## Comandos ejecutados

### Paso 1 — Crear la rama feature desde dev
```bash
git checkout dev
git checkout -b feature/ranking-pingpong
```

### Paso 2 — Crear `ranking.md` y hacer commit
```bash
git add ranking.md
git commit -m "feat: agrega ranking inicial de ping pong con top 5 jugadores"
```

### Paso 3 — Regresar a dev y fusionar
```bash
git checkout dev
git merge feature/ranking-pingpong
```

### Paso 4 — Validar el historial
```bash
git log --oneline --graph --all
```


## Conclusión

- **Flujo:** `dev → feature → merge → dev` mantiene la rama principal limpia.
- **Merge Fast-Forward:** Mueve el puntero de `dev` al commit de la rama feature sin crear un commit adicional.
- **Validación:** `git log --graph` confirma que los cambios se integraron correctamente.