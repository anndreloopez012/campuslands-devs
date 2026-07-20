# Ejercicio 08 - Conflicto simple en playlist musical
**Camper:** Antonio Canux

## 1. Simulación paso a paso (Comandos ejecutados)
Para cumplir con el objetivo, se ejecutó la siguiente secuencia de comandos en la terminal simulando el flujo de trabajo colaborativo:

### Paso A: Creación del entorno base

```Bash
git init
echo "1. Espacio disponible para canción" > playlist.md
git add playlist.md
git commit -m "feat: añadir playlist inicial"
```

### Paso B: Creación de ramas y modificaciones simultáneas

```Bash
git branch rama-rock
git branch rama-acustico

# Modificación en la primera rama
git checkout rama-rock
echo "1. Las piedras rodantes - El Tri" > playlist.md
git commit -am "feat: agregar canción de rock a la playlist"

# Modificación en la segunda rama
git checkout rama-acustico
echo "1. Wicked Game - Chris Isaak" > playlist.md
git commit -am "feat: agregar canción acústica a la playlist"
```

### Paso C: Fusión y provocación del conflicto

```Bash
git checkout main
git merge rama-rock  # Se fusiona correctamente (Fast-forward)
git merge rama-acustico # Aparece el mensaje: CONFLICT (content): Merge conflict in playlist.md
```

## 2. Estado del archivo durante el conflicto

Al abrir playlist.md luego del intento fallido de merge, Git insertó los siguientes marcadores:

```Plaintext
<<<<<<< HEAD
1. Las piedras rodantes - El Tri
=======
1. Wicked Game - Chris Isaak
>>>>>>> rama-acustico
```

## 3. Resolución del conflicto (Archivo final)
Para resolver el conflicto, se eliminaron los marcadores de Git (<<<<<<<, =======, >>>>>>>) y se conservaron ambas aportaciones, asignándoles un orden lógico para mantener una versión coherente de la playlist. El archivo playlist.md quedó así:

```Plaintext
1. Las piedras rodantes - El Tri
2. Wicked Game - Chris Isaak
```

Finalmente, se confirmó la resolución en la terminal con los siguientes comandos:

```Bash
git add playlist.md
git commit -m "fix: resolver conflicto integrando ambas canciones a la playlist"
```

## 4. Explicación del razonamiento
El conflicto se originó porque dos ramas divergentes (rama-rock y rama-acustico) intentaron modificar exactamente el mismo bloque de memoria (la línea 1 del archivo playlist.md) partiendo de un ancestro común.

Al fusionar la primera rama a main, esta línea se actualizó. Cuando se intentó fusionar la segunda rama, Git detectó que el estado actual de main ya no coincidía con el historial previo de rama-acustico, deteniendo el proceso por seguridad. La solución óptima no era descartar el trabajo de un compañero para priorizar el de otro, sino limpiar los marcadores de control de versiones e integrar ambas aportaciones en distintas líneas, logrando un archivo funcional que respeta el esfuerzo colaborativo.