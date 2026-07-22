# Resolución ejercicio 10 de git

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula el registro de un modelo de auto incorrecto dentro del archivo `catalogo_autos.md`. En lugar de alterar o borrar la historia existente mediante un reset, se utiliza `git revert` para crear un nuevo commit de reversión que deshace los cambios introducidos, preservando la trazabilidad del repositorio y validando el resultado mediante la revisión del historial.

```bash
git checkout dev
git checkout -b feature/catalogo-autos

echo "Modelo: Toyota Supra MK4" > catalogo_autos.md
git add catalogo_autos.md
git commit -m "Agrega modelo Toyota Supra"

echo "Modelo: Fiat Uno 1995" >> catalogo_autos.md
git add catalogo_autos.md
git commit -m "Agrega modelo incorrecto al catalogo"

git revert HEAD --no-edit

git log --oneline --graph --all
```

- Breve explicación

Primero, se crea la rama `feature/catalogo-autos` desde `dev` y se registra un primer commit válido agregando un vehículo. Posteriormente, se simula una equivocación agregando una línea con un modelo no deseado y registrando un commit con este error.

En lugar de reescribir la historia local con `git reset`, se ejecuta `git revert HEAD --no-edit`. Este comando analiza las modificaciones aplicadas en el último commit y genera de forma automática una nueva confirmación que aplica justamente los cambios opuestos, eliminando el texto incorrecto sin eliminar el registro de que esa equivocación existió.

Finalmente, al ejecutar `git log --oneline --graph --all`, se observa que el historial mantiene tanto el commit del error como el nuevo commit de reversión. Se prefiere `git revert` sobre `git reset` en entornos colaborativos porque no destruye la línea de tiempo ni afecta a otros desarrolladores que hayan descargado previamente la rama, garantizando la integridad e historial completo del proyecto.
