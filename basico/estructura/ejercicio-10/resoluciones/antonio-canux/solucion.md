# Resolución - Ejercicio 10: Pipeline de Animación 3D

**CAmper:** Antonio Canux

## 1. Comandos Git Utilizados (Evidencia)

Para cumplir con las instrucciones de trabajar en una rama propia derivada de `dev`, ejecuté la siguiente secuencia de comandos en la terminal:

```bash
git checkout dev
git pull origin dev
git checkout -b alumno/antonio-canux/ejercicio-10
```

## 2. Árbol de Carpetas Resultante
Esta es la estructura que he diseñado, incluyendo archivos simulados para darle contexto al pipeline de animación 3D:

```text
antonio-canux/
├── 01-modelado/
│   ├── personaje_principal_v01.blend
│   └── escenario_base_v02.obj
├── 02-texturas/
│   ├── personaje_albedo.png
│   └── madera_normalmap.png
├── 03-renders/
│   └── .gitkeep
├── 04-entregas/
│   └── entrega_cliente_v1.zip
├── docs/
│   └── pipeline.md
├── referencias/
│   ├── concept_art_escenario.jpg
│   └── moodboard_colores.png
└── solucion.md
```

## 3. Explicación del Problema y Proceso de Resolución
**¿Cómo pensé el problema?**
El reto principal era crear una estructura escalable y a prueba de errores humanos. En un entorno de animación 3D, se manejan archivos muy pesados y muchas iteraciones del mismo modelo. Por ello, decidí organizar las carpetas de manera cronológica al flujo de trabajo (del 01 al 04), separando claramente el material de apoyo (referencias/) y las normativas (docs/).

Estrategia para el control de versiones de archivos:
Para el control interno de archivos (sin depender exclusivamente de Git, ya que los binarios 3D pesan mucho), implementé una nomenclatura basada en sufijos de versión iterativa: _v01, _v02, etc.

## 4. Validación
Revisé el estado del repositorio local mediante `git status` para confirmar que únicamente he añadido mi carpeta personal dentro de resoluciones/ y no he modificado o eliminado ningún archivo base del ejercicio provisto por el equipo técnico.