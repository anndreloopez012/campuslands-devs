# Ejercicio 07 — Merge de ranking de ping pong

**Nombre:** Maria Montepeque

---

## Objetivo

Practicar el flujo completo de trabajo con ramas en Git: crear una rama feature, hacer un commit en ella, y fusionarla de regreso a la rama de integración (`dev`).

---

## Cómo pensé el problema

El ejercicio simula el flujo real de trabajo en equipo: nadie trabaja directamente en `dev`. Primero se crea una rama `feature/` para desarrollar algo específico (en este caso, el ranking de ping pong), se hace commit ahí, y luego se integra de vuelta a `dev` mediante un merge.

Los pasos que identifiqué antes de empezar:

1. Partir desde `dev` — es la rama base de integración.
2. Crear la rama feature desde `dev` — así hereda su historial.
3. Crear el archivo `ranking.md` con datos reales de ping pong.
4. Hacer commit descriptivo en la rama feature.
5. Regresar a `dev` y ejecutar el merge.
6. Validar con `git log` que los commits quedaron integrados.

---

## Comandos ejecutados (con salida real)

### Paso 1 — Crear la rama feature desde dev

```bash
git checkout dev
git checkout -b feature/ranking-pingpong
```

```
Switched to a new branch 'feature/ranking-pingpong'
```

**Por qué:** Se crea desde `dev` para que la rama feature tenga el historial de integración como punto de partida. Nunca desde `main`.

---

### Paso 2 — Crear ranking.md y hacer commit

```bash
git add ranking.md
git commit -m "feat: agrega ranking inicial de ping pong con top 5 jugadores"
```

```
[feature/ranking-pingpong 89eceb3] feat: agrega ranking inicial de ping pong con top 5 jugadores
 1 file changed, 11 insertions(+)
 create mode 100644 ranking.md
```

**Por qué:** El mensaje describe exactamente qué se hizo y por qué. Evita mensajes genéricos como "cambios" o "update".

---

### Paso 3 — Regresar a dev y ejecutar el merge

```bash
git checkout dev
git merge feature/ranking-pingpong
```

```
Updating 606386a..89eceb3
Fast-forward
 ranking.md | 11 +++++++++++
 1 file changed, 11 insertions(+)
 create mode 100644 ranking.md
```

**Por qué fast-forward:** `dev` no tenía commits nuevos desde que se creó la feature branch. Git simplemente mueve el puntero de `dev` al commit de la rama feature, sin necesidad de un commit de merge.

---

### Paso 4 — Validar el historial

```bash
git log --oneline
```

```
89eceb3 feat: agrega ranking inicial de ping pong con top 5 jugadores
606386a inicio: commit inicial en main
```

```bash
git log --oneline --all --graph
```

```
* 89eceb3 feat: agrega ranking inicial de ping pong con top 5 jugadores
* 606386a inicio: commit inicial en main
```

```bash
git branch
```

```
* dev
  feature/ranking-pingpong
  master
```

**Interpretación:** El historial de `dev` ahora incluye el commit de la feature branch. El `*` en el grafo confirma que fue un fast-forward limpio. `ranking.md` está presente en `dev`.

---

## Contenido de ranking.md

```markdown
# Ranking de Ping Pong

| Posición | Jugador         | Puntos | Partidas Ganadas |
|----------|-----------------|--------|-----------------|
| 1        | Ana García      | 1500   | 30              |
| 2        | Luis Pérez      | 1420   | 27              |
| 3        | María López     | 1380   | 25              |
| 4        | Carlos Ruiz     | 1310   | 22              |
| 5        | Sofía Martínez  | 1250   | 19              |

Última actualización: junio 2026
```

---

## Qué aprendí con este ejercicio

- El flujo `dev → feature → merge → dev` protege la rama de integración de cambios incompletos.
- Un **fast-forward** ocurre cuando la rama base no avanzó mientras trabajabas en la feature: Git solo mueve el puntero, sin commit extra.
- `git log --all --graph` es la mejor herramienta para ver qué pasó entre ramas.
- Los mensajes de commit con prefijos (`feat:`, `fix:`, `docs:`) hacen el historial legible sin necesitar abrir cada archivo.
