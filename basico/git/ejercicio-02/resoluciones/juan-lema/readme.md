# Clonar base de torneo RPG — Juan Lema

## Tematica

Videojuegos RPG. Se clona un repositorio base que simula el torneo (un
README inicial y una carpeta `personajes/`) y se explora su estado con Git.

## Estructura de carpetas

```
juan-lema/
├── README.md    # este archivo (explicacion y evidencia)
└── notas.md     # notas de la exploracion pedidas por el ejercicio
```

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: repositorio remoto del torneo RPG indicado por el instructor.
   - Proceso: clonarlo, revisar su estado (`git status`), identificar en que
     rama queda ubicado el clon y registrar lo observado.
   - Salida: un archivo de notas (`notas.md`) con la evidencia de la
     exploracion.
2. Antes de tocar nada cree mi propia rama (`dev` → `juan-lema-ejercicio-02`)
   para no trabajar directo sobre `dev`.
3. Ejecute `git status` dos veces: una justo despues de clonar (sin cambios)
   y otra despues de agregar `notas.md` (archivo nuevo sin trackear), para
   comparar ambos estados y entender que detecta cada uno.

## Comandos ejecutados

```bash
git clone <url-del-repo-torneo-rpg>
cd torneo-rpg
git status
git branch --show-current
git checkout -b juan-lema-ejercicio-02
# crear basico/git/ejercicio-02/resoluciones/juan-lema/notas.md
git add basico/git/ejercicio-02/resoluciones/juan-lema/notas.md
git commit -m "docs: agregar notas de exploracion del clon torneo RPG"
git log --oneline
```

## Validacion (dos casos)

Caso normal — clon recien hecho, antes de crear el archivo de notas:

```text
$ git status
On branch dev
Your branch is up to date with 'origin/dev'.
nothing to commit, working tree clean

$ git branch --show-current
dev
```

Caso limite — repositorio recien clonado sin ningun cambio local todavia
(se valida que `git status --short` no devuelva nada, es decir, que un clon
limpio no marque diferencias falsas):

```text
$ git status --short
(sin salida = repo limpio, sin diferencias)
```

Evidencia final tras agregar y commitear `notas.md`:

```text
$ git log --oneline
1b1941c docs: agregar notas de exploracion del clon torneo RPG
54b6bfb docs: agregar README base del torneo RPG
```