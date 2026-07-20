# Entregable: Actualización de tabla de fútbol usando Git

**Camper:** Antonio Canux

## 1. Solución Completa (Comandos ejecutados)

Para resolver el problema de actualizar el repositorio antes de comenzar a trabajar en la tabla de posiciones, seguí este flujo en la terminal:

```bash
# 1. Cambiar a la rama de desarrollo
git checkout dev

# 2. Sincronizar con los últimos cambios agregados
git pull origin dev

# 3. Crear y moverme a mi propia rama de ttrabajo
git checkout -b alumno/antonio-canux/ejercicio-06

# 4. Modificar el archivo de la tabla y guardar los cambios (simulado)
# Se editó el archivo tabla.json con los nuevos puntos de los equipos.
git add tabla.json
git commit -m "feat: actualizar posiciones y diferencia de goles en la tabla"
```

## Explicación de la importancoa del Pull

Hacer un pull antes de crear una nueva rama asegura que mi punto de partida local, sea exactamente el mismo que la versión más reciente en el repositorio remoto. Si me salto este paso y empiezo a modificar o trabajar basándome en una versión desactualizada de dev, cuando intente subir mi trabajo, Git detectará que las líneas que modifiqué ya habían sido alteradas por otra persona, generando un conflicto de fusión (merge conflict). El pull preventivo me permite construir sobre el trabajo de los demás, en lugar de sobrescribirlo accidentalmente.