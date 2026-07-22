# Ejercicio #11 - Stash durante urgencia de kickboxing

**Camper:** Antonio Canux

## Solución completa (Flujo de comandos Git):

```bash
# 1. Modifico un archivo de entrenamiento agregando nuevas combinaciones
echo "- Jab, Cross, Low Kick derecha" >> rutinas/combinaciones_basicas.txt
git status
# Salida esperada:
On branch mejora-rutinas
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   rutinas/combinaciones_basicas.txt

# ¡URGENCIA! Me piden que revise un problema crítico en la rama principal sobre los horarios del gimnasio.
# Uso git stash para limpiar mi espacio de trabajo sin hacer un commit sucio
git stash
# Salida esperada:
Saved working directory and index state WIP on mejora-rutinas: a1b2c3d Agrega estructura de carpetas

# Cambio de rama para simular la otra tarea urgente
git checkout main
# (Simulo que arreglo la urgencia de los horarios, hago el commit necesario...)
# Termino la urgencia y regreso a mi rama de entrenamiento de kickboxing
git checkout mejora-rutinas

# Recupero mi trabajo exactamente donde lo dejé
git stash pop
# Salida esperada:
On branch mejora-rutinas
Changes not staged for commit:
        modified:   rutinas/combinaciones_basicas.txt
Dropped refs/stash@{0} (e4f5g6h...)
```

## Explicación de cómo pensé el problema:
Cuando ocurre una urgencia (como tener que arreglar un bug en la rama main), Git no nos deja cambiar de rama si tenemos archivos modificados que entran en conflicto. La primera tentación suele ser hacer un commit rápido como git commit -m "cambios a medias". Sin embargo, esto ensucia el historial (git log) del proyecto.

Para solucionar esto de forma profesional, utilicé git stash. Esta herramienta actúa como un "portapapeles" o "gaveta" temporal. Toma mis modificaciones incompletas en las combinaciones de kickboxing, las guarda y deja mi área de trabajo completamente limpia. Así pude ir a la otra rama, hacer el arreglo urgente y, al regresar, usar git stash pop para sacar mis cambios de la gaveta y continuar escribiendo la rutina justo donde me quedé.
