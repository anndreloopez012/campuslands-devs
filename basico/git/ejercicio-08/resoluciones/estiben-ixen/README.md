# Resolución: Conflicto simple en playlist musical
    Autor: Estiben Ixen
    Fecha: 11 de junio de 2026
    Ejercicio: 08 - Conflicto en Git (Música)

# Razonamiento
- Un conflicto en Git ocurre cuando dos ramas modifican la misma parte de un archivo y Git no puede decidir automáticamente qué versión es la correcta. Mi enfoque para resolverlo fue:

- Simulación: Creé dos ramas (rama-rock y rama-jazz) desde dev y modifiqué la misma línea en playlist.md.

- Fusión: Tras fusionar la primera rama (rock), el conflicto surgió al intentar fusionar la segunda (jazz).

- Resolución: Abrí el archivo playlist.md donde Git insertó las marcas de conflicto (<<<<<<<, =======, >>>>>>>), eliminé dichas marcas y dejé una versión coherente que incluía ambos géneros musicales.

- Finalización: Añadí el archivo resuelto y realicé un commit para cerrar el conflicto.

## Validación

- Caso Normal: Git avisa del conflicto (CONFLICT (content): Merge conflict in playlist.md). La ejecución de git status me permitió confirmar qué archivo estaba dañado.

- Caso Límite: Al resolver el conflicto y hacer git add, Git reconoce automáticamente que el conflicto ha terminado y permite completar el merge con éxito.

## 1. Implementación (Comandos Git)

# 1. Preparar el escenario
git checkout dev
echo "1. Bohemian Rhapsody" > playlist.md
git add playlist.md && git commit -m "feat: crear playlist inicial"

# 2. Modificar en rama Rock
git checkout -b rama-rock
echo "1. Stairway to Heaven" > playlist.md
git commit -am "feat: cambiar a rock"

# 3. Modificar en rama Jazz (desde dev original)
git checkout dev
git checkout -b rama-jazz
echo "1. So What" > playlist.md
git commit -am "feat: cambiar a jazz"

# 4. Intentar fusión
git checkout dev
git merge rama-rock # Éxito
git merge rama-jazz # Conflicto generado

# 5. Resolver conflicto (edición manual de playlist.md)
# Editar playlist.md y dejar:
# 1. Stairway to Heaven, So What

git add playlist.md
git commit -m "fix: resolver conflicto de playlist fusionando rock y jazz"

# Conclusión
Los conflictos no son errores, sino una funcionalidad de Git para evitar la pérdida de código cuando dos personas trabajan en lo mismo. Este ejercicio demuestra que la comunicación y la intervención humana son esenciales en el flujo de trabajo colaborativo para asegurar la coherencia del producto final.