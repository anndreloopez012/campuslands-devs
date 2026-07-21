# Ejercicio 13 — Resolver conflicto de estructura 3D — Juan Lema

## Tematica

Animacion 3D. Simulacion de trabajo colaborativo entre dos areas (modelado y
renders) que editan el mismo archivo `estructura.md` en ramas distintas,
generando un conflicto real de Git que debe resolverse conservando el
trabajo de ambas partes.

## Estructura de carpetas

```
juan-lema/
├── estructura.md   # archivo en conflicto, ya resuelto
└── juan-lema.md     # este archivo (explicacion y evidencia)
```

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: dos ramas (`feature/modelado` y `feature/renders`) que parten
     de `dev` y modifican la misma seccion del mismo archivo.
   - Proceso: fusionar ambas ramas en `dev` y resolver el conflicto que
     Git genera automaticamente.
   - Salida: `estructura.md` con las dos secciones integradas, sin marcas
     de conflicto, y un commit de merge que deja evidencia del proceso.
2. En vez de elegir una sola version (`ours` o `theirs`), edite el archivo
   a mano para conservar el contenido de las dos ramas, ya que ambas
   aportan informacion valida y complementaria (no son cambios excluyentes).
3. Verifique que no quedaran marcas `<<<<<<<`, `=======` ni `>>>>>>>` antes
   de hacer commit de la resolucion.

## Comandos utilizados

```
git checkout -b dev
git checkout -b feature/modelado dev
# ... edito estructura.md agregando seccion "Modelado 3D" ...
git commit -m "feat(modelado): agrega seccion de modelado 3D"

git checkout -b feature/renders dev
# ... edito estructura.md agregando seccion "Renders" ...
git commit -m "feat(renders): agrega seccion de renders"

git checkout dev
git merge feature/modelado -m "merge: feature/modelado"
git merge feature/renders -m "merge: feature/renders (con conflicto)"
# Auto-merging estructura.md
# CONFLICT (content): Merge conflict in estructura.md

# Edito el archivo a mano y conservo ambas secciones
git add estructura.md
git commit -m "fix(merge): resuelve conflicto en estructura.md conservando modelado y renders"
```

## Evidencia — `git log --oneline --graph --all`

```
*   7fe8f77 fix(merge): resuelve conflicto en estructura.md conservando modelado y renders
|\
| * dd26bda feat(renders): agrega seccion de renders
* | 365aa43 feat(modelado): agrega seccion de modelado 3D
|/
* 739e45b base: estructura inicial
```

## Validacion (dos casos)

Caso normal — el archivo final no contiene marcas de conflicto y conserva
ambas secciones:

```
# Estructura del proyecto

## Modelado 3D
...

## Renders
...
```

Caso limite — intento de commit vacio despues de resolver el conflicto
(sin cambios pendientes): Git lo rechaza con el mensaje
`nothing to commit, working tree clean`, confirmando que la resolucion
ya quedo registrada correctamente y no hay nada mas que confirmar.