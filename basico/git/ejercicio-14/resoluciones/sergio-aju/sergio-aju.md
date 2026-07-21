# Ejercicio: Preparación de Pull Request (Laboratorio Químico)

## Alumno
Sergio Miranda

## Descripción del problema
El objetivo es simular un flujo de trabajo profesional para proponer cambios en una base de datos de fórmulas químicas. La entrega consiste en organizar la solución, realizar un commit con buenas prácticas y redactar la documentación necesaria para que un revisor pueda aprobar el cambio sin dudas.

## Objetivo del PR
Integrar la nueva fórmula para la síntesis de compuestos complejos, asegurando que la nomenclatura siga los estándares del laboratorio.

## Cambios realizados
- Creación de carpeta `resoluciones/sergio-aju/`.
- Adición de archivo `formulas.js` con la estructura de cálculo de reactivos.
- Documentación del flujo de trabajo en este README.

## Validación
- **Caso Normal**: Cálculo de estequiometría con reactivos de valencia simple.
- **Caso Límite**: Verificación de compuestos con subíndices altos para evitar desbordamiento de memoria.

*Nota: Los cambios están aislados en la rama `alumno/sergio-aju/ejercicio-14` para garantizar que la rama `dev` permanezca estable.*

comandos a usar 

# Verificar archivos
git status

# Añadir los cambios
git add .

# Hacer commit profesional
git commit -m "feat(quimica): agregar lógica de síntesis de compuestos"

# Subir la rama al servidor
git push -u origin alumno/sergio-aju/ejercicio-14
