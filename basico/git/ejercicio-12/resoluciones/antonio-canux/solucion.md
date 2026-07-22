# Ejerccicio #12 - Git Turismo

**Camper:** Antonio Canux

## Solución completa (Flujo de comandos Git y Log):

```bash
# 1. Primer cambio: Creación del catálogo de destinos
touch catalogo_destinos.md
git add catalogo_destinos.md
git commit -m "feat: Agregar catálogo inicial de destinos en el Caribe"

# 2. Segundo cambio: Actualización de un precio erróneo
echo "Precio actualizado a $1500" > paquetes/riviera_maya.txt
git add paquetes/riviera_maya.txt
git commit -m "fix: Corregir precio desactualizado en el paquete Riviera Maya"

# 3. Tercer cambio: Adición de políticas de cancelación
echo "Reembolso del 100% antes de 48 horas" > docs/politicas_cancelacion.md
git add docs/politicas_cancelacion.md
git commit -m "docs: Añadir política de cancelación para reservas de hotel"

# 4. Listado del historial de commits
git log --oneline
# Salida esperada:
a1b2c3d (HEAD -> main) docs: añade política de cancelación para reservas de hotel
e4f5g6h fix: corrige precio desactualizado en el paquete Riviera Maya
i7j8k9l feat: agrega catálogo inicial de destinos en el Caribe
m0n1o2p init: commit inicial del proyecto
```

## Explicación de cómo pensé el problema:
Para que el historial sea verdaderamente profesional y legible, decidí aplicar la convención de Conventional Commits (feat:, fix:, docs:). Esto le da contexto inmediato a cualquier desarrollador que lea el registro sin tener que abrir el código.

Además, seguí la regla de usar verbos en modo imperativo ("agregar", "corregir", "añadir") como si le estuviera dando una orden al repositorio sobre lo que hace el commit. Evité por completo mensajes genéricos como "actualiza archivo" o "cambios en precios", especificando exactamente qué se agregó (catálogo del Caribe) y dónde se corrigió (paquete Riviera Maya). Si un nuevo desarrollador (o yo mismo en 6 meses) lee este git log, sabrá exactamente qué pasó en cada punto de la historia y por qué se hizo.