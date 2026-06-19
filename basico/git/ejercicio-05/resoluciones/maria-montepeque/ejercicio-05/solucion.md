# Ejercicio 05 — Push de rama de taller de motos

**Nombre:** Maria Montepeque

---

## Objetivo

Subir una rama personal al repositorio remoto y verificar que exista en GitHub.

---

## Cómo pensé el problema

El ejercicio pide simular el flujo real de trabajo colaborativo: crear una rama propia desde `dev`, hacer commit de mi solución y subirla al remoto. Esto es importante porque en equipos reales nunca se trabaja directo en `main`; cada persona trabaja en su propia rama y la sube cuando está lista para revisión.

El proceso tiene tres momentos claros:
1. Confirmar que estoy en la rama correcta.
2. Hacer commit con un mensaje descriptivo.
3. Subir la rama al remoto con `-u` para vincularla.

---

## Pasos realizados

### 1. Confirmar la rama actual

```bash
git branch
```

Salida esperada:

```
  dev
  main
* feat/ejercicio-05-maria-montepeque
```

El asterisco indica la rama activa. Si no estuviera en la rama correcta, usaría:

```bash
git checkout feat/ejercicio-05-maria-montepeque
```

---

### 2. Verificar estado antes del commit

```bash
git status
```

Salida esperada:

```
On branch feat/ejercicio-05-maria-montepeque
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)

        new file: basico/git/ejercicio-05/resoluciones/maria-montepeque/solucion.md
```

Esto confirma que solo está incluido mi archivo, sin tocar archivos base del ejercicio.

---

### 3. Hacer commit

```bash
git add basico/git/ejercicio-05/resoluciones/maria-montepeque/solucion.md
git commit -m "feat(ejercicio-05): agregar solucion push de rama - maria montepeque"
```

Salida esperada:

```
[feat/ejercicio-05-maria-montepeque 3a7f1c2] feat(ejercicio-05): agregar solucion push de rama - maria montepeque
 1 file changed, 1 insertion(+)
 create mode 100644 basico/git/ejercicio-05/resoluciones/maria-montepeque/solucion.md
```

El mensaje sigue la convención `tipo(contexto): descripción` para que quede claro qué se hizo y quién lo hizo.

---

### 4. Subir la rama al remoto

```bash
git push -u origin feat/ejercicio-05-maria-montepeque
```

Salida esperada:

```
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 620 bytes | 620.00 KiB/s, done.
Total 5 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'feat/ejercicio-05-maria-montepeque' on GitHub by visiting:
remote:   https://github.com/usuario/taller-motos/pull/new/feat/ejercicio-05-maria-montepeque
remote:
To https://github.com/usuario/taller-motos.git
 * [new branch]      feat/ejercicio-05-maria-montepeque -> feat/ejercicio-05-maria-montepeque
Branch 'feat/ejercicio-05-maria-montepeque' set up to track remote branch 'feat/ejercicio-05-maria-montepeque' from 'origin'.
```

La bandera `-u` vincula la rama local con la remota. Después de esto, futuros `git push` no necesitan especificar el nombre de la rama.

---

### 5. Verificar que la rama existe en el remoto

```bash
git branch -r
```

Salida esperada:

```
  origin/dev
  origin/main
  origin/feat/ejercicio-05-maria-montepeque
```

La rama aparece listada bajo `origin/`, lo que confirma que el push fue exitoso.

---

### 6. Confirmar con log

```bash
git log --oneline -3
```

Salida esperada:

```
3a7f1c2 (HEAD -> feat/ejercicio-05-maria-montepeque, origin/feat/ejercicio-05-maria-montepeque) feat(ejercicio-05): agregar solucion push de rama - maria montepeque
a1b2c3d (origin/dev, dev) chore: estructura inicial ejercicio 05
9f8e7d6 feat: base del repositorio
```

El commit local y el remoto apuntan al mismo hash, lo que confirma sincronización correcta.

---

## Por qué se usa `-u` en el primer push

La bandera `-u` (abreviatura de `--set-upstream`) le dice a Git que vincule la rama local con la rama del mismo nombre en `origin`. Sin esa vinculación, cada `git push` requeriría escribir el nombre completo. Con ella, basta con `git push` en adelante.

---

## Verificación

| Criterio | Estado |
|---|---|
| Rama creada desde `dev` | ✅ |
| Commit con mensaje descriptivo | ✅ |
| Archivo dentro de `resoluciones/maria-montepeque/` | ✅ |
| Rama subida al remoto con `-u` | ✅ |
| Rama visible en `git branch -r` | ✅ |
| No se modificaron archivos base del ejercicio | ✅ |
