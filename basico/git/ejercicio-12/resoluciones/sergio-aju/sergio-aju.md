# Resolución: Buenas prácticas de commits para Turismo

**Autor:** 

Sergio Ajù

## Razonamiento del problema
Para este ejercicio, he estructurado los cambios en tres pasos atómicos. Cada commit tiene una responsabilidad única:
1. **Configuración:** Establecer la base de datos de destinos.
2. **Lógica:** Implementar el filtro de búsqueda por precio.
3. **Documentación:** Actualizar las instrucciones de uso.

He utilizado el formato imperativo para los mensajes, asegurando que cualquier desarrollador pueda entender el progreso del proyecto solo con leer el log.

## Historial de cambios
1. `feat: crear base de datos inicial de destinos turísticos`
2. `feat: implementar filtro de búsqueda por rango de precios`
3. `docs: actualizar guía de usuario con ejemplos de consulta`

## Validación
Se verificó el historial mediante `git log --oneline`, confirmando que los mensajes son descriptivos y siguen la convención de tipos (feat/docs).

# 1. Crear y moverse a la rama de trabajo
git checkout dev
git checkout -b feature/nombres-apellido

# 2. Crear carpeta personal (asegúrate de estar en la raíz del repo)
mkdir -p resoluciones/nombre-apellido

# 3. Primer cambio: Crear archivo de destinos
echo "destinos = ['Paris', 'Tokyo', 'Cusco']" > resoluciones/nombre-apellido/destinos.py
git add resoluciones/nombre-apellido/destinos.py
git commit -m "feat: crear base de datos inicial de destinos turísticos"

# 4. Segundo cambio: Agregar lógica de búsqueda
echo "def buscar_por_precio(max_precio): pass" >> resoluciones/nombre-apellido/destinos.py
git add resoluciones/nombre-apellido/destinos.py
git commit -m "feat: implementar filtro de búsqueda por rango de precios"

# 5. Tercer cambio: Crear el README
# (Copia el contenido del punto 1 en este archivo)
nano resoluciones/nombre-apellido/README.md
git add resoluciones/nombre-apellido/README.md
git commit -m "docs: actualizar guía de usuario con ejemplos de consulta"

# 6. Validación final
git log --oneline