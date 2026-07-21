# Evidencia de Validación

## Comandos utilizados

```bash
git checkout dev
git pull origin dev

git checkout -b modelado
# Editar estructura.md
git add .
git commit -m "feat: agregar sección de modelado"

git checkout dev
git checkout -b renders
# Editar estructura.md
git add .
git commit -m "feat: agregar sección de renders"

git checkout modelado
git merge renders
```

Al realizar el merge se produjo un conflicto en **estructura.md**.

Después de resolver el conflicto:

```bash
git add estructura.md
git commit -m "fix: resolver conflicto entre modelado y renders"
```

## Caso normal

El conflicto fue resuelto conservando ambas secciones.

**Resultado:** ✔ Correcto.

---

## Caso límite

Se verificó que el archivo no contiene marcas de conflicto:

```text
<<<<<<<
=======
>>>>>>>
```

**Resultado:** ✔ El archivo quedó limpio y el merge finalizó correctamente.