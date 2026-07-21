# Solución: Revertir idea sin borrar historial

## Explicación fácil de entender

Imagina que estás haciendo una lista de autos y por error agregaste uno que no debía. En lugar de borrar el historial (como si nunca hubiera pasado), usamos `git revert` que crea un nuevo commit que deshace los cambios del commit incorrecto. Así el historial queda completo y sabemos qué pasó.

---

## Paso a paso (comandos y qué hacen)

### 1. Crear un archivo con autos
```bash
echo "Toyota Corolla" > autos.txt
git add autos.txt
git commit -m "Agrega lista de autos"