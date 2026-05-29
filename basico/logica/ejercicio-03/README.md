# Gestor de personajes RPG

## Dificultad

Media

## Temática usada

videojuegos RPG

## Contexto del problema

Una party RPG debe preparar personajes antes de una mazmorra con enemigos de diferentes niveles.

Este ejercicio está diseñado para que practiques análisis, orden y toma de decisiones. Aunque pertenece al nivel básico, debes tratarlo como una tarea real: leer requisitos, transformar información en una solución y validar el resultado.

## Objetivo

Calcular poder total, detectar personajes débiles y sugerir mejoras.

## Explicación paso a paso

1. Define personajes con nombre, clase, nivel, ataque y defensa.
2. Calcula poder = nivel * 2 + ataque + defensa.
3. Filtra personajes con poder menor a 60.
4. Crea una funcion que sugiera entrenar ataque o defensa segun el valor menor.
5. Muestra un reporte de la party.

## Instrucciones detalladas

- Trabaja en tu propia rama creada desde `dev`.
- Crea tu carpeta personal dentro de esta ruta: `basico/logica/ejercicio-03/resoluciones/nombre-apellido/`.
- Usa el formato obligatorio de carpeta: `nombre-apellido/`.
- Si escribes código, usa nombres de variables claros y evita resolver todo en una sola línea difícil de leer.
- Si el ejercicio pide estructura o comandos Git, documenta lo que hiciste con capturas de comandos copiadas como texto o con una explicación clara.
- Antes de entregar, revisa que no modificaste archivos base del ejercicio.

## Ejemplos

Un mago nivel 12 con ataque 35 y defensa 10 tiene poder 69.

Los ejemplos no son la única respuesta posible. Úsalos como guía para entender el tipo de entrada, proceso y salida esperada.

## Entregable esperado

Una carpeta propia dentro de `resoluciones/` con tu solución. Puede ser `.js`, `.md`, `.txt` u otra extensión indicada por el instructor. El archivo debe incluir:

- Tu nombre.
- La solución completa.
- Una breve explicación de cómo pensaste el problema.
- Evidencia de validación cuando aplique.

## Reglas

- No modifiques respuestas de otros alumnos.
- No borres `.gitkeep`.
- No cambies el README del ejercicio.
- No subas archivos fuera de tu carpeta personal en `resoluciones/nombre-apellido/`.
- No trabajes directamente en `main`.

## Consejos

- Lee el problema dos veces antes de empezar.
- Identifica datos de entrada, proceso y salida.
- Divide la solución en pasos pequeños.
- Usa nombres relacionados con el contexto del ejercicio.
- Valida con al menos dos casos: uno normal y uno límite.

## Errores comunes

- Entregar archivos sueltos directamente en `resoluciones/` o en una carpeta equivocada.
- Usar carpetas como `solucion/` en lugar de `nombre-apellido/`.
- No validar datos vacíos o valores en cero.
- Hacer commits con mensajes genéricos.
- Resolver sin explicar el razonamiento.

## Pistas opcionales

- Si te bloqueas, escribe primero la solución en lenguaje natural.
- Luego convierte cada frase en una operación concreta.
- Revisa si necesitas arreglos, condicionales, ciclos, funciones o carpetas.
- Usa `git status` varias veces durante el trabajo.

## Cómo validar si el ejercicio quedó bien

- La solución cumple el objetivo principal.
- El archivo está dentro de `resoluciones/nombre-apellido/`.
- El nombre de la carpeta sigue el formato obligatorio.
- Los ejemplos del README se pueden comprobar con tu solución.
- Tu explicación permite que otro compañero entienda tu proceso.
