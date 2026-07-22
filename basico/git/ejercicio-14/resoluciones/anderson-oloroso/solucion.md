# Resolución ejercicio 14 de git

**Henrik Anderson Oloroso García**

- Solución completa:

Para resolver el ejercicio se simula la preparación de una entrega mediante un Pull Request (PR) colaborativo sobre fórmulas químicas (`resoluciones/formulas_quimicas.md`). Se crea una rama de trabajo personal, se agregan las soluciones técnicas correspondientes, se suben los cambios al repositorio remoto con `git push` y finalmente se redacta la estructura formal de un Pull Request detallando el objetivo, los cambios realizados y los pasos de validación.

```bash
git checkout dev
git checkout -b feature/henrik-formulas-quimicas

mkdir -p resoluciones
echo "# Fórmulas Químicas Base\n- Agua: H2O\n- Dióxido de Carbono: CO2\n- Ácido Sulfúrico: H2SO4" > resoluciones/formulas_quimicas.md
git add resoluciones/formulas_quimicas.md
git commit -m "Agrega soluciones de formulas quimicas base"

git push origin feature/henrik-formulas-quimicas
```

```markdown
### Descripción del Pull Request (PR)

#### Objetivo
Incorporar la documentación inicial con la nomenclatura y estructura de fórmulas químicas base dentro del directorio de resoluciones del proyecto.

#### Cambios realizados
- Se creó el directorio `resoluciones/` para organizar los aportes temáticos.
- Se añadió el archivo `formulas_quimicas.md` especificando las fórmulas moleculares de H2O, CO2 y H2SO4.

#### Validación
- Se verificó la sintaxis en Markdown de las fórmulas agregadas.
- Se ejecutó `git status` para confirmar un directorio de trabajo limpio sin archivos sin seguimiento (untracked).
- Se validó el historial de commits local antes de realizar el push a `origin/feature/henrik-formulas-quimicas`.
```

- Breve explicación

Primero, se crea una rama personal nombrada `feature/henrik-formulas-quimicas` a partir de `dev` para aislar el trabajo. Dentro de esta rama se crea la carpeta `resoluciones/` y el archivo `formulas_quimicas.md` con las fórmulas requeridas, registrando los cambios mediante un commit descriptivo.

A continuación, se suben los cambios locales al servidor remoto utilizando `git push origin feature/henrik-formulas-quimicas`, lo que deja la rama lista para la revisión de código por parte de otros miembros del equipo.

Finalmente, se redacta la plantilla de Pull Request incluyendo el objetivo de la entrega, la lista de cambios realizados y los pasos ejecutados para validar la solución. Esta práctica asegura que los revisores entiendan el contexto de la contribución antes de autorizar la integración a la rama principal.